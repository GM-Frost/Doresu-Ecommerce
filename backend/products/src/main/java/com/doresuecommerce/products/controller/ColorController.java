package com.doresuecommerce.products.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doresuecommerce.products.model.Color;
import com.doresuecommerce.products.service.ColorService;

@RestController
@RequestMapping("/api/v1/products/colors")
public class ColorController {

	private final ColorService colorService;
	
	@Autowired
	public ColorController(ColorService colorService) {
		this.colorService = colorService;
	}
	
	//Create a New Color
	@PostMapping("/create")
	public Color createColor(@RequestBody Color color) {
		return colorService.createColor(color);
	}
}
