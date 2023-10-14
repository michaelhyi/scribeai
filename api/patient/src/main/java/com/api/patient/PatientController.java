package com.api.patient;

import com.api.patient.dto.PatientCreateRequest;
import com.api.patient.dto.PatientUpdateRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/patient")
@AllArgsConstructor
public class PatientController {
    private final PatientService service;

    @PostMapping
    public ResponseEntity<Long> createPatient(@RequestBody PatientCreateRequest req) {
        return ResponseEntity.ok(service.createPatient(req));
    }

    @GetMapping("{id}")
    public ResponseEntity<Patient> readPatient(
            @PathVariable("id") Long id
    ) {
        return ResponseEntity.ok(service.readPatient(id));
    }

    @GetMapping
    public ResponseEntity<List<Patient>> readAllPatientsByUserId(
            @RequestParam("userId") Long userId
    ) {
        return ResponseEntity.ok(service.readAllPatientsByUserId(userId));
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> updatePatient(
            @PathVariable("id") Long id,
            @RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("mrn") String mrn,
            @RequestParam("notes") String notes
    ) {
        PatientUpdateRequest req = new PatientUpdateRequest(firstName, lastName, mrn, notes);
        service.updatePatient(id, req);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Void> deletePatient(Long id) {
        service.deletePatient(id);
        return ResponseEntity.ok().build();
    }
}