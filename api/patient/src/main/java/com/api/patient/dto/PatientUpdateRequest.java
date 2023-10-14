package com.api.patient.dto;

public record PatientUpdateRequest(
        String firstName,
        String lastName,
        String mrn,
        String notes
) {
}