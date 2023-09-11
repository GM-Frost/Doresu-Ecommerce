package com.doresu.admin.adminController;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.doresu.admin.adminModel.RegisterAdmin;

import org.springframework.security.core.Authentication;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*", allowedHeaders = { "*" })
@RestController
@RequestMapping("/api/admin/user")
@RequiredArgsConstructor
public class AdminController {
	
	@GetMapping("/details")
	public ResponseEntity<UserDetailsResponse>getUserDetails(){
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if(authentication!=null && authentication.getPrincipal() instanceof RegisterAdmin) {
			RegisterAdmin jwtUser = (RegisterAdmin) authentication.getPrincipal();
			
			UserDetailsResponse userDetailsResponse = new UserDetailsResponse(
			jwtUser.getEmail(),
			jwtUser.getFirstname(),
			jwtUser.getLastname()
			);
			
			return ResponseEntity.ok(userDetailsResponse);
			
			
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
	

	
	private static class UserDetailsResponse{
		private final String email;
		private final String firstname;
		private final String lastname;
		
		
		public UserDetailsResponse(String email, String firstname, String lastname) {
			this.email = email;
			this.firstname = firstname;
			this.lastname = lastname;
		}
		
		public String getEmail() {
			return email;
		}
		public String getFirstname() {
			return firstname;
			
		}
		
		public String getLastname() {
			return lastname;
		}
	}
}
