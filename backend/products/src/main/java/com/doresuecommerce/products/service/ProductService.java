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
	  private final ColorService colorService;
	    private final SizeService sizeService;
	
	@Autowired
	   public ProductService(ProductsRepo productRepository, ColorService colorService, SizeService sizeService) {
        this.productsRepo = productRepository;
        this.colorService = colorService;
        this.sizeService = sizeService;
    }

	public Products createProduct(Products product) {

        // Check if the product has a color specified by name
        if (product.getColor() != null && product.getColor().getName() != null) {
            // Try to find the color by name, or create it if it doesn't exist
            Color color = colorService.getOrCreateColorByName(product.getColor().getName());
            product.setColor(color);
        }

        // Check if the product has sizes specified by names
        if (product.getSizes() != null) {
            for (Size size : product.getSizes()) {
                if (size.getName() != null) {
                    // Try to find the size by name, or create it if it doesn't exist
                    Size existingSize = sizeService.getSizeByName(size.getName());
                    if (existingSize == null) {
                        // Size doesn't exist, create a new one
                        existingSize = sizeService.createSize(size);
                    }
                    // Update the product's sizes list with the existing or new size
                    size.setId(existingSize.getId());
                }
            }
        }

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
