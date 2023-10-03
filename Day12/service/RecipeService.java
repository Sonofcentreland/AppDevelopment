package com.jeeva.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.FormService;
import com.jeeva.model.Recipe;
import com.jeeva.model.RecipeForm;
import com.jeeva.repository.RecipeRepository;

@Service
public class RecipeService {
	@Autowired
	RecipeRepository recipeRepository;

	@Autowired
	FormService formService;
	
	public boolean isRecipeExist(int rid) {
		return recipeRepository.existsById(rid);
	}

	public Recipe createRecipe(RecipeForm form) throws IOException {
		return recipeRepository.save( formService.setRecipe(form) );
	}
	
	public Recipe updateRecipe(RecipeForm form) throws IOException {
		return recipeRepository.save( formService.setRecipe(form) );
	}
	
	public void deleteRecipe(int rid) {
		recipeRepository.deleteById(rid);
	}
	
	public Recipe getRecipe(int rid) {
		return recipeRepository.findById(rid).get();
	}
	
}
