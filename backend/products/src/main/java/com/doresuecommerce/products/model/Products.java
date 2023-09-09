package com.doresuecommerce.products.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="products")
public class Products {


	@Id
	private String id;
    private String title;
    private String description;
    private double price;
    private String brand;
    private String color;
    private String[] sizes; 
    private String[] images;
    private String category;
}
