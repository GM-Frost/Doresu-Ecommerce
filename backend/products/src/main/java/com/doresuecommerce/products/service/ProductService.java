package com.doresuecommerce.products.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Color;
import com.doresuecommerce.products.model.Products;
import com.doresuecommerce.products.model.Size;
import com.doresuecommerce.products.repo.ProductsRepo;

@Service
public class ProductService {

	private final ProductsRepo productsRepo;
	
	@Autowired
	   public ProductService(ProductsRepo productRepository) {
        this.productsRepo = productRepository;
       
    }

	public Products createProduct(Products product) {

        return productsRepo.save(product);
	}

	public List<Products> findAllProducts() {
		return productsRepo.findAll();
	}

	


    public Products updateProduct(String id, Products product) {
       
        product.setId(id);
        return productsRepo.save(product);
    }

    public void deleteProduct(String id) {
       
        productsRepo.deleteById(id);
    }

	public Products getProductById(String id) {
		return productsRepo.findById(id).orElse(null);
	}

	
	
	
}
