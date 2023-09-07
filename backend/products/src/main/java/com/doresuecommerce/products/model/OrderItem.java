package com.doresuecommerce.products.model;

import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

	 	private String productId;
	    private String productName;
	    private String productBrand;
	    private String productColor;
	    private String productSize;
	    private String category;
	    private int quantity;
	    private double price;
	    private double subtotal;
	   
	    private List<Image> images;

	    
}
