package com.doresuecommerce.doresu.userAuth;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.doresuecommerce.doresu.UsersModel.RegisterUsers;
import com.doresuecommerce.doresu.UsersModel.Role;
import com.doresuecommerce.doresu.UsersRepo.UsersRepo;
import com.doresuecommerce.doresu.userConfig.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RegistrationService {

	private final UsersRepo repository;
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
	    var user = RegisterUsers.builder()
	            .firstname(request.getFirstname())
	            .lastname(request.getLastname())
	            .email(request.getEmail())
	            .password(passwordEncoder.encode(request.getPassword()))
	            .role(Role.USER)
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
