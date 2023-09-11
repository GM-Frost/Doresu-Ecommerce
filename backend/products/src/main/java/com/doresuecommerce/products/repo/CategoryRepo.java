package com.doresuecommerce.products.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Category;

public interface CategoryRepo extends MongoRepository<Category, String>{

	Category findByName(String categoryName);

}
