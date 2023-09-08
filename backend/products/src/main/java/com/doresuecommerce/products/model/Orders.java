package com.doresuecommerce.products.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "orders")
public class Orders {

	 @Id
	    private String id; 
	 	private String orderId; 
	    private String userId;
	    private String accFirstname;
	    private String accLastname;
	    private String accEmail;
	    private String orderDate;
	    private String expectedDate;
	    private String status;
	    private double totalPrice;
	 
	    private DeliveryAddress deliveryAddress;

	    private List<OrderItem> orderItems;

	  
	    
	
}
