package com.doresuecommerce.products.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Orders;
import com.doresuecommerce.products.repo.OrderRepo;

@Service
public class OrderService {

	private final OrderRepo orderRepo;
	
	@Autowired
	public OrderService(OrderRepo orderRepo) {
		this.orderRepo = orderRepo;
	}
	
	public List<Orders>getAllOrders(){
		return orderRepo.findAll();
	}
	
	public Optional<Orders>getOrderById(String orderId){
		return orderRepo.findById(orderId);
	}
	
	public Orders createOrder(Orders order ) {
		 String nextOrderId = getNextOrderId();
	        order.setOrderId(nextOrderId);
	        return orderRepo.save(order);
	}
	
	 private String getNextOrderId() {
	       
	        String highestOrderId = orderRepo.findTopByOrderByOrderIdDesc()
	                .map(Orders::getOrderId)
	                .orElse("999");

	      
	        int nextOrderNumber = Integer.parseInt(highestOrderId) + 1;

	      
	        return String.format("%04d", nextOrderNumber);
	    }
	 
	public Orders updateOrder(Orders order) {
		return orderRepo.save(order);
	}
	
	public void deleteOrder(String orderId) {
		orderRepo.deleteById(orderId);
	}
}
