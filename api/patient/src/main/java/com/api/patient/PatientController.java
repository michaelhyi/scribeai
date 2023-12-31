package com.api.patient;

import com.api.patient.dto.PatientCreateRequest;
import com.api.patient.dto.PatientUpdateRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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
}