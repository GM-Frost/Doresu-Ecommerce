package com.doresu.admin.adminAuth;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.doresu.admin.adminConfig.JwtService;
import com.doresu.admin.adminModel.RegisterAdmin;
import com.doresu.admin.adminModel.Role;
import com.doresu.admin.adminRepo.AdminRepo;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RegistrationService {

	private final AdminRepo repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	
	
	public Object register(RegisterRequest request) {
	    // Check if the email is already taken
	    if (repository.existsByEmail(request.getEmail())) {
	        return EmailAlreadyTakenResponse.builder()
	                .message("This email already taken")
	                .status(HttpStatus.BAD_REQUEST.value())
	                .build();
	    }

	    // Rest of your code for successful registration
	    var user = RegisterAdmin.builder()
	            .firstname(request.getFirstname())
	            .lastname(request.getLastname())
	            .email(request.getEmail())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.ADMIN)
	            .build();

	    repository.save(user);

	    var jwtToken = jwtService.generateToken(user);

	    return RegisterResponse.builder()
	            .message("Registered Successfully")
	            .status(HttpStatus.OK.value())
	            .token(jwtToken) // Include the token for successful registration
	            .build();
	}
}
