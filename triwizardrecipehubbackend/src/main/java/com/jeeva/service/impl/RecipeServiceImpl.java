package com.jeeva.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.RecipeForm;
import com.jeeva.model.Recipe;
import com.jeeva.repository.RecipeRepository;
import com.jeeva.service.RecipeService;

@Service
public class RecipeServiceImpl implements RecipeService
{

	@Autowired
	private RecipeRepository recipeRepository;

	@Override
	public Recipe createRecipe(RecipeForm form) throws IOException
	{
		Recipe recipe = new Recipe();
		recipe.setRecipeData(form);
		return recipeRepository.save(recipe);
	}

	@Override
	public void updateRecipe(Recipe recipe)
	{
		recipeRepository.save(recipe);
	}
	
	@Override
	public Recipe getRecipe(int id)
	{
		Optional<Recipe> optional = recipeRepository.findById(id);
		Recipe recipe = new Recipe();
		recipe.setRecipe(optional.get());
		return recipe;
	}

	@Override
	public List<Recipe> getRecipes()
	{
		return (List<Recipe>)recipeRepository.findAll();
	}

	@Override
	public void deleteRecipe(int id)
	{
		recipeRepository.deleteById(id);
	}

	@Override
	public boolean isRecipeExist(int id)
	{
		return recipeRepository.existsById(id);
	}
}
