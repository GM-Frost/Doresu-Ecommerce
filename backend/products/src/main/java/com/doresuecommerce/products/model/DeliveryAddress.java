package com.doresuecommerce.products.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryAddress {

	 	private String firstName;
	    private String lastName;
	    private String addressLine;
	    private String city;
	    private String province;
	    private String postalCode;
	    private String country;
}
