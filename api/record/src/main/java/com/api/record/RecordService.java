package com.api.record;

import com.api.record.dto.RecordCreateRequest;
import com.api.record.dto.RecordUpdateRequest;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RecordService {
    private final RecordRepository repository;

    public Long createRecord(RecordCreateRequest req) {
        Record record = Record.builder()
                .data(req.data())
                .userId(req.userId())
                .patientId(req.patientId())
                .build();

        repository.saveAndFlush(record);
        return record.getId();
    }

    public Record readRecord(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Record not found."));
    }

    public List<Record> readAllRecordsByPatientId(Long patientId) {
        return repository.findAllByPatientId(patientId);
    }
    public List<Record> readAllRecordsByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }

}