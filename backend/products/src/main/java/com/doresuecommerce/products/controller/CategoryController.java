package com.doresuecommerce.products.controller;

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
import com.doresuecommerce.products.service.CategoryService;

@RestController
@RequestMapping("/api/v1/products/categories")
@CrossOrigin(origins = "*", allowedHeaders = { "*" })
public class CategoryController {

	private final CategoryService categoryService;
	
	 @Autowired
	    public CategoryController(CategoryService categoryService) {
	        this.categoryService = categoryService;
	    }
	 
	

	 @PostMapping("/create")
	    public Category createCategory(@RequestBody Category category) {
	        // Check if the category already exists
	        Category existingCategory = categoryService.getCategoryByName(category.getName());
	        if (existingCategory != null) {
	            // Category with the same name already exists, return the existing one
	            return existingCategory;
	        }

	        // Category doesn't exist, create a new one
	        return categoryService.createCategory(category.getName());
	    }

	 @GetMapping("/getByName/{name}")
	    public Category getCategoryByName(@PathVariable String name) {
	        return categoryService.getCategoryByName(name);
	    }
	 @GetMapping
	    public List<Category> getAllCategories() {
	        return categoryService.getAllCategories();
	    }
	 
	    @DeleteMapping("/{id}")
	    public void deleteCategory(@PathVariable String id) {
	        categoryService.deleteCategory(id);
	    }
	    
}
