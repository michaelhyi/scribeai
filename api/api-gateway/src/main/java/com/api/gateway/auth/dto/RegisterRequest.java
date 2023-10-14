package com.api.gateway.auth.dto;

public record RegisterRequest(
        String email,
        String password,
        String firstName,
        String lastName
) {
}

