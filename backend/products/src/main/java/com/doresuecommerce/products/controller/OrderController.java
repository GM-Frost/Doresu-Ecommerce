package com.doresuecommerce.products.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.doresuecommerce.products.model.Orders;
import com.doresuecommerce.products.service.OrderService;


@RestController
@RequestMapping("/api/v1/orders")
@CrossOrigin(origins = "*", allowedHeaders = { "*" })
public class OrderController {

	private final OrderService orderService;
	
	@Autowired
	public OrderController(OrderService orderService) {
		this.orderService = orderService;
	}
	
	@GetMapping
	public List<Orders>getAllOrders(){
		return orderService.getAllOrders();
	}

	
	@PostMapping("/create")
	public Orders createOrder(@RequestBody Orders order) {
		return orderService.createOrder(order);
	}
	
	@PutMapping("/{orderId}")
	public Orders updateOrder(@PathVariable String orderId, @RequestBody Orders order) {
		if (!order.getOrderId().equals(orderId)) {
            throw new IllegalArgumentException("Order ID mismatch");
        }
        return orderService.updateOrder(order);
	}
	
	@DeleteMapping("/{orderId}")
    public void deleteOrder(@PathVariable String orderId) {
        orderService.deleteOrder(orderId);
    }
	
	@GetMapping("/user/orders")
    public List<Orders> getOrdersByEmailOrUserId(
            @RequestParam(name = "accEmail", required = false) String accEmail,
          @RequestParam(name = "userId", required = false) String userId) {
      if (accEmail != null && userId != null) {
          // You can choose to search by either accEmail or userId based on your needs.
          return orderService.getOrdersByAccEmailOrUserId(accEmail, userId);
        }
        return Collections.emptyList(); // Handle the case when both accEmail and userId are not provided.
   }

	
	 @GetMapping("/{orderId}")
	 public Orders getOrderById(@PathVariable String orderId) {
		 return orderService.getOrderByID(orderId);
	 }
	 
}
