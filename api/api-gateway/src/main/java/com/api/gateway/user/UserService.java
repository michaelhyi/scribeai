package com.api.gateway.user;

import com.api.gateway.auth.dto.RegisterRequest;
import com.api.gateway.security.Encoder;
import com.api.gateway.security.JwtService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
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
        User user = new User(
                req.email(),
                encoder.encode(req.password()),
                req.firstName(),
                req.lastName(),
                List.of(UserRole.ROLE_USER)
        );

        repository.save(user);

        return jwtService.generate(user);
    }
}