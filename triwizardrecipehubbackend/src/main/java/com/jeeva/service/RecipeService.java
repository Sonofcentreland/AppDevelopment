package com.jeeva.service;

import java.io.IOException;
import java.util.List;

import com.jeeva.model.RecipeForm;
import com.jeeva.model.Recipe;

public interface RecipeService
{
	public abstract Recipe createRecipe(RecipeForm recipe) throws IOException;

	public abstract void updateRecipe(Recipe recipe);
	
	public abstract Recipe getRecipe(int id);
	
	public abstract List<Recipe> getRecipes();
	
	public abstract void deleteRecipe(int id);
	
	public abstract boolean isRecipeExist(int id);
}
