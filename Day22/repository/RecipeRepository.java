package com.jeeva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeeva.model.Genre;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findByTitleContainingIgnoreCase(String title);

    List<Recipe> findByAuthor(User author);

    List<Recipe> findByGenresContaining(Genre genre);
    
    List<Recipe> findByIngredientsContaining(String ingredient);

    List<Recipe> findByAuthorAndTitle(User author, String title);
    
}
