package com.doresuecommerce.products.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.doresuecommerce.products.model.Category;
import com.doresuecommerce.products.model.Color;
import com.doresuecommerce.products.model.Image;
import com.doresuecommerce.products.model.Products;
import com.doresuecommerce.products.model.Size;
import com.doresuecommerce.products.service.CategoryService;
import com.doresuecommerce.products.service.ColorService;
import com.doresuecommerce.products.service.ImageService;
import com.doresuecommerce.products.service.ProductService;
import com.doresuecommerce.products.service.SizeService;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin(origins = "*", allowedHeaders = { "*" })
public class ProductsController {

	private final ProductService productService;
	private final CategoryService categoryService;
	private final ColorService colorService;
    private final SizeService sizeService;
    private final ImageService imageService;

	@Autowired
	public ProductsController(ProductService productService, ColorService colorService,SizeService sizeService, ImageService imageService,CategoryService categoryService) {
		this.productService = productService;
		this.colorService = colorService;
		this.sizeService = sizeService;
		this.imageService = imageService;
		this.categoryService = categoryService;
	}

	  // Create Product
	@PostMapping("/create")
    public Products createProduct(@RequestBody Products product) {
		
		  // Check if the product has a category specified by ID
		 if (product.getCategory() != null && product.getCategory().getName() != null) {
	            // Try to find the category by name, or create it if it doesn't exist
	            Category category = categoryService.getCategoryByName(product.getCategory().getName());
	            if (category == null) {
	                // Category doesn't exist, create a new one
	                category = categoryService.createCategory(product.getCategory().getName());
	            }
	            // Update the product's category field with the existing or new category
	            product.setCategory(category);
	        }
        
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

        // Check if the product has images specified by URLs
        if (product.getImages() != null) {
        	List<Image> newImages = new ArrayList<>();
        	for (Image image : product.getImages()) {
        	    if (image.getImageUrl() != null) {
        	        // Create the image
        	        Image newImage = imageService.createImage(image);
        	        newImages.add(newImage);
        	    }
        	}
        	product.setImages(newImages);
        }

        return productService.createProduct(product);
    }

    // Get a product by ID
    @GetMapping("/{id}")
    public Products getProductById(@PathVariable String id) {
        return productService.getProductById(id);
    }

    // Get a list of all products
    @GetMapping
    public List<Products> getAllProducts() {
        return productService.findAllProducts();
    }

    // Update a product
    @PutMapping("/{id}")
    public Products updateProduct(@PathVariable String id, @RequestBody Products product) {
        // Implement updateProduct logic here
        // You can also handle related entities here if needed
        product.setId(id); // Set the ID of the updated product
        return productService.updateProduct(id, product);
    }

    // Delete a product by ID
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id) {
        // Implement deleteProduct logic here
        productService.deleteProduct(id);
    }

}
