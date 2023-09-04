package com.doresuecommerce.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Color;
import com.doresuecommerce.products.repo.ColorRepo;

@Service
public class ColorService {

	private final ColorRepo colorRepo;
	
	@Autowired
	public ColorService(ColorRepo colorRepo) {
		this.colorRepo = colorRepo;
	}
	
	//Get All Color
	public List<Color>getAllColor(){
		return colorRepo.findAll();
	}
	
	 // Get Color By Name
    public Color getColorByName(String name) {
        return colorRepo.findByName(name);
    }
    
    // Save Color
    public Color createColor(Color color) {
        return colorRepo.save(color);
    }

	public Color getOrCreateColorByName(String name) {
		Color color = colorRepo.findByName(name);
        if (color == null) {
            // If the color doesn't exist, create it
            color = Color.builder().name(name).build();
            colorRepo.save(color);
        }
        return color;
	}
}
