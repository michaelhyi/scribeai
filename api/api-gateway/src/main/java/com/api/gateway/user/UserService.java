package com.api.gateway.user;

import com.api.gateway.auth.dto.RegisterRequest;
import com.api.gateway.security.Encoder;
import com.api.gateway.security.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final Encoder encoder;
    private final JwtService jwtService;

    public Optional<User> findByUsername(String username) {
        return repository.findByEmail(username);
    }

    public String register(RegisterRequest req) {
        User user = User.builder()
                .email(req.email())
                .password(encoder.encode(req.password()))
                .firstName(req.firstName())
                .lastName(req.lastName())
                .role(UserRole.ROLE_USER)
                .build();

        repository.save(user);

        return jwtService.generate(user);
    }
}