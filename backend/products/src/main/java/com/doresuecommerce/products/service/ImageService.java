package com.doresuecommerce.products.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doresuecommerce.products.model.Image;
import com.doresuecommerce.products.repo.ImageRepo;

@Service
public class ImageService {

	private final ImageRepo imageRepo;
	
	@Autowired
	public ImageService(ImageRepo imageRepo) {
		this.imageRepo = imageRepo;
	}
	
	public Image createImage(Image image) {
		return imageRepo.save(image);
	}
	
	//Get ALL Image
	public List<Image>getAllImages(){
		return imageRepo.findAll();
	}
	
	 public Image updateImage(String id, Image image) {
	        image.setId(id);
	        return imageRepo.save(image);
	    }
	
	  public void deleteImage(String id) {
	        imageRepo.deleteById(id);
	    }

	  public Image getImageById(String id) {
	        return imageRepo.findById(id).orElse(null);
	    }
}
