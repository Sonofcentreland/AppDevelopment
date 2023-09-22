package com.jeeva.service.impl;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.FactData;
import com.jeeva.model.Recipe;
import com.jeeva.repository.RecipeRepository;
import com.jeeva.service.RecipeService;

@Service
public class RecipeServiceImpl implements RecipeService
{

	@Autowired
	private RecipeRepository shortfactRepository;

	@Override
	public Recipe createShortfact(FactData fact) throws IOException
	{
		Recipe shortfact = new Recipe();
		shortfact.setShortfactData(fact);
		return shortfactRepository.save(shortfact);
	}

	@Override
	public void updateShortfact(Recipe shortfact)
	{
		shortfactRepository.save(shortfact);
	}
	
	@Override
	public Recipe getShortfact(int id)
	{
		Optional<Recipe> optional = shortfactRepository.findById(id);
		Recipe shortfact = new Recipe();
		shortfact.setShortFact(optional.get());
		return shortfact;
		
	}

	@Override
	public List<Recipe> getShortfacts()
	{
		return (List<Recipe>)shortfactRepository.findAll();
	}

	@Override
	public void deleteShortfact(int id)
	{
		shortfactRepository.deleteById(id);
	}

	@Override
	public boolean isShortfactExist(int id)
	{
		return shortfactRepository.existsById(id);
	}
}
