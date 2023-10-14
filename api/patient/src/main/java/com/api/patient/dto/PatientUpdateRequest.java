package com.api.patient.dto;

import java.util.Date;

public record PatientUpdateRequest(
        String name,
        String mrn,
        Date dob,
        String sex
) {
}