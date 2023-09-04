package com.doresuecommerce.products.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doresuecommerce.products.model.Size;
import com.doresuecommerce.products.service.SizeService;

@RestController
@RequestMapping("/api/v1/products/sizes")
@CrossOrigin(origins = "*", allowedHeaders = { "*" })
public class SizeController {

	private final SizeService sizeService;
	
	@Autowired
	public SizeController(SizeService sizeService) {
		this.sizeService = sizeService;
	}
	
	//Create  a new Size
	@PostMapping("/create")
	public Size createSize(@RequestBody Size size) {
		return sizeService.createSize(size);
	}
	
	 // Get a size by name
    @GetMapping("/{name}")
    public Size getSizeByName(@PathVariable String name) {
        return sizeService.getSizeByName(name);
    }
    
    @GetMapping
    public List<Size> getAllSizes() {
        return sizeService.getAllSizes();
    }
    
}
