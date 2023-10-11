package com.jeeva.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.RecipeRequest;
import com.jeeva.model.Genre;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;
import com.jeeva.service.GenreService;
import com.jeeva.service.RecipeService;
import com.jeeva.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.RECIPE)
@RequiredArgsConstructor
@Tag(name = "Recipe")
@CrossOrigin("*")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private UserService userService;

    @Autowired
    private GenreService genreService;
    
    @GetMapping("/get/{rid}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable long rid) {
        Recipe recipe = recipeService.getRecipe(rid);
        if (recipe != null) {
            return ResponseEntity.ok(recipe);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllRecipes() {
    	return ResponseEntity.ok(recipeService.getAllRecipes());
    }
    
    @GetMapping("/get/genre/{gid}")
    public ResponseEntity<?> getGenre(@PathVariable int gid) {
    	return ResponseEntity.ok(genreService.getGenreById(gid));
    }
    
    @GetMapping("/get/all/genre")
    public ResponseEntity<?> getAllGenre(@RequestParam List<Integer> gid) {
    	return ResponseEntity.ok(genreService.getGenreAllByIds(gid));
    }

    @PostMapping("/create")
    public ResponseEntity<?> createRecipe(@ModelAttribute RecipeRequest request) {
//            return ResponseEntity.ok(request.toString());
        try {
            recipeService.createRecipe(request);
            return ResponseEntity.ok("Recipe created successfully");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to create recipe: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{rid}")
    public ResponseEntity<String> deleteRecipe(@PathVariable long rid) {
        recipeService.deleteRecipe(rid);
        return ResponseEntity.ok("Recipe deleted successfully");
    }

    @GetMapping("/get/byTitle")
    public List<Recipe> getRecipesByTitle(@RequestParam String title) {
        return recipeService.getRecipesByTitle(title);
    }

    @GetMapping("/get/byAuthor")
    public List<Recipe> getRecipesByAuthor(@RequestParam long authorId) {
        User author = userService.getUserById(authorId);
        return recipeService.getRecipesByAuthor(author);
    }

    @GetMapping("/get/byGenre")
    public List<Recipe> getRecipesByGenre(@RequestParam String genre) {
        Genre genreObj = genreService.getGenreByName(genre);
        return recipeService.getRecipesByGenre(genreObj);
    }

    @GetMapping("/get/byPage")
    public List<Recipe> getRecipesByPage(@RequestParam int number, @RequestParam int size) {
        return recipeService.getRecipesByPage(number, size);
    }

    @GetMapping("/get/sortedByGenre")
    public List<Recipe> sortRecipeByGenre(@RequestParam String genre) {
        return recipeService.sortRecipeByGenre(genre);
    }
}
