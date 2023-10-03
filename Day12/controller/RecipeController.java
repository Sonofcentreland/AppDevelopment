package com.jeeva.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.model.Recipe;
import com.jeeva.model.RecipeForm;
import com.jeeva.service.RecipeService;

@RestController
public class RecipeController {
	@Autowired
	RecipeService recipeService;
	
	@GetMapping("/Hello")
	public String sayHello() {
		return "Hello I am Kanishka";
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createRecipe(@ModelAttribute RecipeForm recipe)throws IOException
	{
		Recipe Recipe = recipeService.createRecipe(recipe);
		return new ResponseEntity<>("Recipe is created successfully with id = " +Recipe.getRid(), HttpStatus.CREATED);
	}
	
}
