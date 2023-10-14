package com.api.record.dto;

public record RecordUpdateRequest(
        String data,
        Long patientId
) {
}