package com.jeeva.model;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.repository.GenreRepository;
import com.jeeva.repository.UserRepository;

@Service
public class FormService {
	
	@Autowired
	UserRepository userRepository;

	@Autowired
	GenreRepository genreRepository;
	
	public User setUser(UserForm form) throws IOException {
		User user = new User();
		
		user.setFullname(form.getFullname());
		user.setUsername(form.getUsername());
		user.setEmail(form.getEmail());
		user.setMobile(form.getMobile());
		user.setPassword(form.getPassword());
		user.setProfile_image(form.getProfile_image().getBytes());
		
		return user;
	}
	
	public Recipe setRecipe(RecipeForm form) throws IOException {
		Recipe recipe = new Recipe();
		
		recipe.setTitle(form.getTitle());
		recipe.setRecipe_image(form.getImage().getBytes());
		recipe.setIngredients(form.getIngredients());
		recipe.setInstructions(form.getInstructions());
		recipe.setTips(form.getTips());
		recipe.setValue(form.getValue());
		
		User author = userRepository.findById(form.getAuthorId()).get();
		recipe.setAuthor(author);
		
		List<Genre> genres = genreRepository.findAllById(form.getGenreIds());
		recipe.setGenres(genres);
		
		return recipe;
	}
}
