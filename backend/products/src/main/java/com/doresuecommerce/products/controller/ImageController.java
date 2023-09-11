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
import org.springframework.web.bind.annotation.RestController;

import com.doresuecommerce.products.model.Image;
import com.doresuecommerce.products.service.ImageService;

@RestController
@RequestMapping("/api/v1/product/images")
@CrossOrigin(origins = "*", allowedHeaders = { "*" })
public class ImageController {

	private final ImageService imageService;
	
	@Autowired
	public ImageController(ImageService imageService) {
		this.imageService = imageService;
	}
	
	@PostMapping("/create")
    public Image createImage(@RequestBody Image image) {
        return imageService.createImage(image);
    }
	
	@GetMapping("/{id}")
    public Image getImageById(@PathVariable String id) {
        return imageService.getImageById(id);
    }
	
	@GetMapping
    public List<Image> getAllImages() {
        return imageService.getAllImages();
    }
	@PutMapping("/{id}")
    public Image updateImage(@PathVariable String id, @RequestBody Image image) {
        return imageService.updateImage(id, image);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable String id) {
        imageService.deleteImage(id);
    }
}
