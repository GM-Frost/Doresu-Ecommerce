package com.doresuecommerce.products.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Image;

public interface ImageRepo extends MongoRepository<Image,String>{

}
