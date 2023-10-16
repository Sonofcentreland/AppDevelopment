package com.jeeva.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.RecipeRequest;
import com.jeeva.model.Genre;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;
import com.jeeva.repository.RecipeRepository;

@Service
public class RecipeService {

    @Autowired
    RecipeRepository recipeRepository;
    
    @Autowired
    UserService userService;
    
    @Autowired
    GenreService genreService;
    
    public Recipe toRecipe(RecipeRequest request) throws IOException {
    	var recipe = Recipe.builder()
    			.title(request.getTitle())
    			.ingredients(request.getIngredients())
    			.instructions(request.getInstructions())
    			.tips(request.getTips())
    			.value(request.getValue())
    			.image(request.getImage().getBytes())
    			.author(userService.getUserById(request.getAuthorId()))
    			.genres(genreService.getGenreAllByNames(request.getGenres()))
    			.build();
    	return recipe;
    }
    
    public Recipe toRecipe(long rid,RecipeRequest request) throws IOException {
    	Recipe recipe = getRecipeById(rid);
    	recipe = Recipe.builder()
    			.title(request.getTitle())
    			.ingredients(request.getIngredients())
    			.instructions(request.getInstructions())
    			.tips(request.getTips())
    			.value(request.getValue())
    			.image(request.getImage().getBytes())
    			.author(userService.getUserById(request.getAuthorId()))
    			.genres(genreService.getGenreAllByNames(request.getGenres()))
    			.build();
    	return recipe;
    }
    
    public boolean isRecipeExist(long rid) {
        return recipeRepository.existsById(rid);
    }
    

    public void createRecipe(RecipeRequest request) throws IOException {
        recipeRepository.save(toRecipe(request));
    }

    public void deleteRecipe(long rid) {
        recipeRepository.deleteById(rid);
    }
    
    public Recipe updateRecipe(long rid,RecipeRequest request) throws IOException {
        return recipeRepository.save(toRecipe(rid,request));
    }

    public Recipe getRecipeById(long rid){
    	return recipeRepository.findById(rid).get();
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public List<Recipe> getRecipesByTitle(String title) {
        return recipeRepository.findByTitleContainingIgnoreCase(title);
    }

    public List<Recipe> getRecipesByAuthor(User author) {
        return recipeRepository.findByAuthor(author);
    }

    public List<Recipe> getRecipesByGenre(Genre genre) {
        return recipeRepository.findByGenresContaining(genre);
    }

    public void addGenreToRecipe(long rid, Genre genre) {
        Recipe recipe = recipeRepository.findById(rid).orElse(null);
        if (recipe != null) {
            List<Genre> genres = recipe.getGenres();
            genres.add(genre);
            recipe.setGenres(genres);
            recipeRepository.save(recipe);
        }
    }

    public void removeGenreFromRecipe(long rid, Genre genre) {
        Recipe recipe = recipeRepository.findById(rid).orElse(null);
        if (recipe != null) {
            List<Genre> genres = recipe.getGenres();
            genres.remove(genre);
            recipe.setGenres(genres);
            recipeRepository.save(recipe);
        }
    }

    public void updateRecipeTitle(long rid, String newTitle) {
        Recipe recipe = recipeRepository.findById(rid).orElse(null);
        if (recipe != null) {
            recipe.setTitle(newTitle);
            recipeRepository.save(recipe);
        }
    }

    public List<Recipe> getRecipesByPage(int number,int size) {
    	Page<Recipe> page = recipeRepository.findAll(PageRequest.of(number,size));
    	return page.getContent();
    }
    
    public List<Recipe> sortRecipeByGenre(String genre) {
    	return recipeRepository.findAll(Sort.by(genre));
    }
    
    public long countOfRecipes() {
    	return recipeRepository.count();
    }
    
}
