package com.doresuecommerce.doresu.userAuth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*", allowedHeaders = { "*" })
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

	private final AuthenticationService service;
	private final RegistrationService regservice;
	
	  @PostMapping("/register")
	    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
	        Object response = regservice.register(request);

	        if (response instanceof RegisterResponse) {
	            // If it's a registration response, return it as is
	            return ResponseEntity.ok(response);
	        } else if (response instanceof EmailAlreadyTakenResponse) {
	            // If it's an email already taken response, return it as is
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
	        }

	        // Handle other cases or errors here
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }

	
	@PostMapping("/authenticate")
	public ResponseEntity<?>register(@RequestBody AuthenticationRequest request){
		Object response = service.authenticate(request);

		if (response instanceof AuthenticationResponse) {
	        // If it's an authentication response, return it as is
	        return ResponseEntity.ok(response);
	    } else if (response instanceof InvalidCredentialsResponse) {
	        // If it's an invalid credentials response, return it as is
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
	    }

		 // Handle other cases or errors here
	    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	}

}
