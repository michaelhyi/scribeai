package com.api.gateway.auth;

import com.api.gateway.auth.dto.LoginRequest;
import com.api.gateway.auth.dto.RegisterRequest;
import com.api.gateway.security.Encoder;
import com.api.gateway.security.JwtService;
import com.api.gateway.user.User;
import com.api.gateway.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/auth")
public class AuthController {
    private final JwtService jwtService;
    private final Encoder encoder;
    private final UserService service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest req) {
        return ResponseEntity.ok(service.register(req));
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest req) {
        Optional<User> user = service.findByUsername(req.email());

        //email does not exist
        if (user.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .build();
        }

        //wrong credentials
        if (!encoder.encode(req.password()).equals(user.get().getPassword())) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .build();
        }


        return ResponseEntity.ok(jwtService.generate(user.get()));
    }

}
