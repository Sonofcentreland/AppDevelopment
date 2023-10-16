package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.FavouriteRequest;
import com.jeeva.model.Favourite;
import com.jeeva.repository.FavouriteRepository;

@Service
public class FavouriteService {
	@Autowired
	FavouriteRepository favouriteRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	RecipeService recipeService;
	
	public Favourite toFavourite(FavouriteRequest request) {
		var favourite = Favourite.builder()
				.recipe(recipeService.getRecipeById(request.getRecipeId()))
				.user(userService.getUserById(request.getUserId()))
				.build();
		return favourite;
	}
	
	public boolean isFavouriteExist(long fid) {
		return favouriteRepository.existsById(fid);
	}
	
	public boolean isFavouriteExist(FavouriteRequest request) {
		boolean user = favouriteRepository.existsByUser(userService.getUserById(request.getUserId()));
		boolean recipe = favouriteRepository.existsByRecipe(recipeService.getRecipeById(request.getRecipeId()));
		return (user && recipe);
	}
	
	public Favourite createFavourite(FavouriteRequest request) {
		return favouriteRepository.save(toFavourite(request));
	}
	
	public Favourite getFavouriteById(long fid) {
		return favouriteRepository.findById(fid).get();
	}
	
	public List<Favourite> getAllFavourites(){
		return favouriteRepository.findAll();
	}
	
	public List<Favourite> getFavouriteByRecipe(long rid){
		return favouriteRepository.findByRecipe(recipeService.getRecipeById(rid));
	}
	
	public List<Favourite> getFavouriteByUser(long uid){
		return favouriteRepository.findByUser(userService.getUserById(uid));
	}
	
	public List<Favourite> getAllFavouriteById(List<Long> favouriteIds){
		return favouriteRepository.findAllById(favouriteIds);
	}

	public void deleteFavouriteById(long fid) {
		favouriteRepository.deleteById(fid);
	}
	
	public long countOfFavourites() {
		return favouriteRepository.count();
	}
}
