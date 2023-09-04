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
	
	@PostMapping("/register")
	 public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
		RegisterResponse response = service.register(request);

        if ("This email already Taken".equals(response.getMessage())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        return ResponseEntity.ok(response);
    }

	
	@PostMapping("/authenticate")
	public ResponseEntity<?>register(@RequestBody AuthenticationRequest request){
		 AuthenticationResponse response = service.authenticate(request);

	        if ("Invalid Credentials".equals(response.getMessage())) {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
	        }

	        return ResponseEntity.ok(response);
	}

}
