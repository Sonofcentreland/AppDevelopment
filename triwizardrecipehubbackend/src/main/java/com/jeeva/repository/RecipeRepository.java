package com.jeeva.repository;

import org.springframework.data.repository.CrudRepository;

import com.jeeva.model.Recipe;  

public interface RecipeRepository extends CrudRepository<Recipe, Integer>
{

}
