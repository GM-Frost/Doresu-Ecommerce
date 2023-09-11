package com.doresuecommerce.products.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.doresuecommerce.products.model.Orders;

public interface OrderRepo extends MongoRepository<Orders, String>{

	List<Orders> findByAccEmailOrUserId(String accEmail, String userId);

	Optional<Orders> findTopByOrderByOrderIdDesc();

	Orders findByOrderId(String orderId);


}
