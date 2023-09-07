package com.doresuecommerce.products.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Orders;

public interface OrderRepo extends MongoRepository<Orders, String>{

	Optional<Orders> findTopByOrderByOrderIdDesc();

}
