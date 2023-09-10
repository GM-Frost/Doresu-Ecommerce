package com.doresu.admin.adminAuth;


import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.doresu.admin.adminConfig.JwtService;
import com.doresu.admin.adminRepo.AdminRepo;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final AdminRepo repository;
	private final JwtService jwtService;

	// Authenticate user based on username and password
	private final AuthenticationManager authenticationManager;

	public Object authenticate(AuthenticationRequest request) {
	    try {
	        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

	        var user = repository.findByEmail(request.getEmail()).orElseThrow();
	        var jwtToken = jwtService.generateToken(user);

	        return AuthenticationResponse.builder()
	                .token(jwtToken)
	                .firstname(user.getFirstname())
	                .lastname(user.getLastname())
	                .email(user.getEmail())
	                .message("Authentication successful")
	                .status(HttpStatus.OK.value())
	                .build();
	    } catch (BadCredentialsException e) {
	        // Handle bad credentials (invalid login) with a custom response
	        return InvalidCredentialsResponse.builder()
	                .message("Invalid Credentials")
	                .status(HttpStatus.UNAUTHORIZED.value())
	                .build();
	    }
	}
}