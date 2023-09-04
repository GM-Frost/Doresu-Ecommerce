package com.doresuecommerce.doresu.userAuth;

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
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	// Authenticate user based on username and password
	private final AuthenticationManager authenticationManager;


	 public RegisterResponse register(RegisterRequest request) {
	        // Check if the email is already taken
	        if (repository.existsByEmail(request.getEmail())) {
	            return RegisterResponse.builder()
	                    .message("This email already Taken")
	                    .build();
	        }
	        
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
	                .token(jwtToken)
	                .build();
	        
	 }       
	
	        
	public AuthenticationResponse authenticate(AuthenticationRequest request) {

		
		  try {
	            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

	            var user = repository.findByEmail(request.getEmail()).orElseThrow();
	            var jwtToken = jwtService.generateToken(user);

	            return AuthenticationResponse.builder()
	                    .token(jwtToken)
	                    .firstname(user.getFirstname())
	                    .lastname(user.getLastname())
	                    .email(user.getEmail())
	                    .build();
	        } catch (BadCredentialsException e) {
	            // Handle bad credentials (invalid login)
	            return AuthenticationResponse.builder()
	                    .message("Invalid Credentials")
	                    .build();
	        }

	
}
}
