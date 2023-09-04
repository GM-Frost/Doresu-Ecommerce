package com.doresuecommerce.doresu.userAuth;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.doresuecommerce.doresu.UsersModel.Role;
import com.doresuecommerce.doresu.UsersModel.RegisterUsers;
import com.doresuecommerce.doresu.UsersRepo.UsersRepo;
import com.doresuecommerce.doresu.userConfig.JwtService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

	private final UsersRepo repository;
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
