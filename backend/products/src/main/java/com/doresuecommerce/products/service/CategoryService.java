package com.doresuecommerce.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Category;
import com.doresuecommerce.products.repo.CategoryRepo;

@Service
public class CategoryService {

	 private final CategoryRepo categoryRepo;
	 
	 @Autowired
	    public CategoryService(CategoryRepo categoryRepo) {
	        this.categoryRepo = categoryRepo;
	    }
	 
	 public Category createCategory(String categoryName) {
	        Category category = new Category();
	        category.setName(categoryName);
	        return categoryRepo.save(category);
	    }

	    public List<Category> getAllCategories() {
	        return categoryRepo.findAll();
	    }

	    public Category getCategoryByName(String categoryName) {
	        return categoryRepo.findByName(categoryName);
	    }
	    
	    public Category getCategoryById(String id) {
	        return categoryRepo.findById(id).orElse(null);
	    }

	    public Category updateCategory(String id, Category category) {
	        category.setId(id);
	        return categoryRepo.save(category);
	    }

	    public void deleteCategory(String id) {
	        categoryRepo.deleteById(id);
	    }
}
