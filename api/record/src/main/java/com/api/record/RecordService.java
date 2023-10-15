package com.api.record;

import com.api.record.dto.PatientResponse;
import com.api.record.dto.RecordCreateRequest;
import com.api.record.dto.RecordUpdateRequest;
import com.api.record.dto.RecordsResponse;
import com.api.record.security.AES;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class RecordService {
    private final RecordRepository repository;
    private final RestTemplate restTemplate;

    public Long createRecord(RecordCreateRequest req) {
        Record record = Record.builder()
                .data(AES.encrypt(req.data(), "a7f8e92c0196a31bfba2ce4b9275ec8641db1ce98f4cc4cd4e74aa1538bbd5e7"))
                .userId(req.userId())
                .patientId(req.patientId())
                .build();

        repository.saveAndFlush(record);
        return record.getId();
    }

    public Record readRecord(Long id) {
        Record record = repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Record not found."));

        return new Record(
                record.getId(),
                AES.decrypt(record.getData(), "a7f8e92c0196a31bfba2ce4b9275ec8641db1ce98f4cc4cd4e74aa1538bbd5e7"),
                record.getUserId(),
                record.getPatientId(),
                record.getCreatedAt(),
                record.getUpdatedAt()
        );
    }

    public List<RecordsResponse> readAllRecordsByPatientId(Long patientId) {
        List<Record> records = repository.findAllByPatientIdOrderByCreatedAtDesc(patientId);
        List<RecordsResponse> response = new ArrayList<>();

        for (Record r : records) {
            PatientResponse patient = restTemplate
                .getForObject(
                        "http://PATIENT/api/v1/patient/{id}",
                        PatientResponse.class,
                        r.getPatientId()
                );

            Record finalRecord = readRecord(r.getId());

            response.add(
                    new RecordsResponse(
                            finalRecord.getId(),
                            AES.decrypt(finalRecord.getData(), "a7f8e92c0196a31bfba2ce4b9275ec8641db1ce98f4cc4cd4e74aa1538bbd5e7"),
                            finalRecord.getUserId(),
                            patient.name(),
                            patient.mrn(),
                            finalRecord.getCreatedAt(),
                            finalRecord.getUpdatedAt()
                    ));
        }

        return response;
    }

    public List<RecordsResponse> readAllRecordsByUserId(Long userId) {
        List<Record> records = repository.findAllByUserIdOrderByCreatedAtDesc(userId);
        List<RecordsResponse> response = new ArrayList<>();

        for (Record r : records) {
            PatientResponse patient = restTemplate
                    .getForObject(
                            "http://PATIENT/api/v1/patient/{id}",
                            PatientResponse.class,
                            r.getPatientId()
                    );

            response.add(
                    new RecordsResponse(
                            r.getId(),
                            AES.decrypt(r.getData(), "a7f8e92c0196a31bfba2ce4b9275ec8641db1ce98f4cc4cd4e74aa1538bbd5e7"),
                            r.getUserId(),
                            patient.name(),
                            patient.mrn(),
                            r.getCreatedAt(),
                            r.getUpdatedAt()
                            )
            );
        }

        return response;
    }

    @Transactional
    public void updateRecord(Long id, String data) {
        Record record = repository.findById(id).orElseThrow(() -> new IllegalStateException("Record does not exist."));

        record.setData(AES.encrypt(data, "a7f8e92c0196a31bfba2ce4b9275ec8641db1ce98f4cc4cd4e74aa1538bbd5e7"));
    }

}