package com.api.record.dto;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

public record RecordsResponse(
        Long id,
        String data,
        Long userId,
        String patientName,
        String patientMrn,
        Date createdAt,
        Date updatedAt
) {
}
