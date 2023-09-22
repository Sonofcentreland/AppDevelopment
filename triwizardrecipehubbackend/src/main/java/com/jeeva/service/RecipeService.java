package com.jeeva.service;

import java.io.IOException;
import java.util.List;

import com.jeeva.model.FactData;
import com.jeeva.model.Recipe;

public interface RecipeService
{
	public abstract Recipe createShortfact(FactData shortfact) throws IOException;

	public abstract void updateShortfact(Recipe shortfact);
	
	public abstract Recipe getShortfact(int id);
	
	public abstract List<Recipe> getShortfacts();
	
	public abstract void deleteShortfact(int id);
	
	public abstract boolean isShortfactExist(int id);
}
