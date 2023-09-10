package com.doresuecommerce.doresu.UsersRepo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.doresu.UsersModel.RegisterUsers;

public interface UsersRepo extends MongoRepository<RegisterUsers, String>{

	//Find User by Email
	Optional<RegisterUsers> findByEmail(String email);

	boolean existsByEmail(String email);
}