package com.api.patient.dto;

import java.util.Date;

public record PatientCreateRequest(
        String name,
        String mrn,
        Long userId,
        Date dob,
        String sex
) {
}