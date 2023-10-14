package com.api.patient.dto;

public record PatientCreateRequest(
        String firstName,
        String lastName,
        String mrn,
        String notes,
        Long userId
) {
}