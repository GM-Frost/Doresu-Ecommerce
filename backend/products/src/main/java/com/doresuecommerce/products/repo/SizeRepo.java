package com.doresuecommerce.products.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Size;

public interface SizeRepo extends MongoRepository<Size, String>{

	Size findByName(String name);

}
