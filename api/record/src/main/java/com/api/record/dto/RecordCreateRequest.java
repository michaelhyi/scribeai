package com.api.record.dto;


public record RecordCreateRequest(
        String data,
        Long userId,
        Long patientId
) {
}
