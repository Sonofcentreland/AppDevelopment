package com.jeeva.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.exception.RecipeNotfoundException;
import com.jeeva.model.RecipeForm;
import com.jeeva.model.Recipe;
import com.jeeva.service.RecipeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/Recipes")
public class RecipeController
{
	@Autowired
	private RecipeService RecipeService;
	
	@GetMapping("/Hello")
	public String sayHello(){
		 return "Hello";
	}

	@PostMapping("/create")
	public ResponseEntity<?> createRecipe(@ModelAttribute RecipeForm recipe)throws IOException
	{
		Recipe Recipe = RecipeService.createRecipe(recipe);
		return new ResponseEntity<>("Recipe is created successfully with id = " +Recipe.getRid(), HttpStatus.CREATED);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateRecipe(@PathVariable int id,
			@RequestBody Recipe recipe)
	{
		boolean isRecipeExist = RecipeService.isRecipeExist(id);
		if (isRecipeExist)
		{
			recipe.setRid(id);
			RecipeService.updateRecipe(recipe);
			return new ResponseEntity<>("Recipe is updated successsfully", HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}

	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getPhoto(@PathVariable int id)
	{
		boolean isRecipeExist = RecipeService.isRecipeExist(id);
		if (isRecipeExist)
		{
			return new ResponseEntity<>(RecipeService.getRecipe(id), HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}
	}

	@GetMapping("/getall")
	public ResponseEntity<?> getRecipes()
	{
		List<Recipe> RecipeList = RecipeService.getRecipes();
		return new ResponseEntity<>(RecipeList, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteRecipe(@PathVariable int id) throws IOException
	{
		boolean isRecipeExist = RecipeService.isRecipeExist(id);
		if (isRecipeExist)
		{
			RecipeService.deleteRecipe(id);
			return new ResponseEntity<>("Recipe is deleted successsfully", HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}

	}

}
