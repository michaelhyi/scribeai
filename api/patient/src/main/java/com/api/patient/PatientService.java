package com.api.patient;

import com.api.patient.dto.PatientCreateRequest;
import com.api.patient.dto.PatientUpdateRequest;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PatientService {
    private final PatientRepository repository;

    public Long createPatient(PatientCreateRequest req) {
        Patient patient = Patient.builder()
                .name(req.name())
                .mrn(req.mrn())
                .userId(req.userId())
                .dob(req.dob())
                .sex(req.sex())
                .build();

        repository.saveAndFlush(patient);
        return patient.getId();
    }

    public Patient readPatient(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Patient does not exist."));
    }

    public List<Patient> readAllPatientsByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }
}