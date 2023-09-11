package com.doresuecommerce.products.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Color;

public interface ColorRepo extends MongoRepository<Color, String>{

	Color findByName(String name);

}
