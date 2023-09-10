package com.doresu.admin.adminRepo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresu.admin.adminModel.RegisterAdmin;

public interface AdminRepo extends MongoRepository<RegisterAdmin, String>{

	//Find User by Email
		Optional<RegisterAdmin> findByEmail(String email);

		boolean existsByEmail(String email);

}
