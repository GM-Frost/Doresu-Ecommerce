package com.doresuecommerce.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Size;
import com.doresuecommerce.products.repo.SizeRepo;

@Service
public class SizeService {

	private final SizeRepo sizeRepo;
	
	@Autowired
	public SizeService(SizeRepo sizeRepo) {
		this.sizeRepo = sizeRepo;
	}
	
	//Create A New Size
	 public Size createSize(Size size) {
	        return sizeRepo.save(size);
	    }
	 // Get a size by name
	    public Size getSizeByName(String name) {
	        return sizeRepo.findByName(name);
	    }

		public List<Size> getAllSizes() {
			return sizeRepo.findAll();
		}
}
