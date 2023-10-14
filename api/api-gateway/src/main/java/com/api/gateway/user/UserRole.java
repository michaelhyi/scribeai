package com.api.gateway.user;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

public enum UserRole {
    ROLE_USER, ROLE_ADMIN;

    public List<SimpleGrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.name()));
    }
}