package com.api.record.dto;

import java.util.Date;

public record PatientResponse(
        Long id,
        String name,
        String mrn,
        Long userId,
        Date dob,
        String sex,
        Date createdAt,
        Date updatedAt
) {
}