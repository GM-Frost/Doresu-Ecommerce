package com.doresu.admin.adminConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.doresu.admin.adminRepo.AdminRepo;


import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

	//Fetching user from the database
	private final AdminRepo repository;
	
	//Create bean of type User Details Services
	@Bean
	public UserDetailsService userDetailsService() {
		
			//Lambda Expression
			return username -> repository.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("User not found"));
		
	};
	
	//Authentication Provider to fetch user details and encrypt password
	@Bean
	public AuthenticationProvider authenticationProvider() {
		
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		//password encoder
		authProvider.setPasswordEncoder(passwordEncoder());
		
		return authProvider;
	}
	
	//Authenticate user who only use Username & Password
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
		return config.getAuthenticationManager();
	}
	
	//Create Password Encoder Method
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
