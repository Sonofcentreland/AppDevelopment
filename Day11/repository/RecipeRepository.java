package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Integer>{
	
}
