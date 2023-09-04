package com.doresuecommerce.products.repo;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Products;


public interface ProductsRepo extends MongoRepository<Products, String>{

	
}
