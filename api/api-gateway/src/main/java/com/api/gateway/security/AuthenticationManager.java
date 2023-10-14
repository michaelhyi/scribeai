package com.api.gateway.security;

import io.jsonwebtoken.Claims;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class AuthenticationManager implements ReactiveAuthenticationManager {
    private JwtService jwtService;

    public AuthenticationManager(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    @SuppressWarnings("unchecked")
    public Mono<Authentication> authenticate(Authentication authentication) {
        String token = authentication.getCredentials().toString();
        String username = jwtService.getUsernameFromToken(token);
        return Mono.just(jwtService.validate(token))
                .filter(valid -> valid)
                .switchIfEmpty(Mono.empty())
                .map(valid -> {
                    Claims claims = jwtService.getAllClaimsFromToken(token);
                    List<String> rolesMap = claims.get("role", List.class);
                    return new UsernamePasswordAuthenticationToken(
                            username,
                            null,
                            rolesMap
                                    .stream()
                                    .map(SimpleGrantedAuthority::new)
                                    .collect(Collectors.toList())
                    );
                });
    }
}