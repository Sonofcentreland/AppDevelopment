package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.RatingRequest;
import com.jeeva.model.Rating;
import com.jeeva.repository.RatingRepository;

@Service
public class RatingService {
	@Autowired
	RatingRepository ratingRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	RecipeService recipeService;
	
	
	public Rating toRating(RatingRequest request) {
		var rating = Rating.builder()
				.rating(request.getRating())
				.review(request.getReview())
				.recipe(recipeService.getRecipeById(request.getRecipeId()))
				.user(userService.getUserById(request.getUserId()))
				.build();
		return rating;
	}
	
	public Rating toRating(long rid, RatingRequest request) {
		Rating rating = getRatingById(rid);
		
		rating.setRating(request.getRating());
		rating.setReview(request.getReview());
		
		return ratingRepository.save(rating);
	}
	
	public Rating createRating(RatingRequest request) {
		return ratingRepository.save(toRating(request));
	}
	
	public Rating getRatingById(long rid) {
		return ratingRepository.findById(rid).get();
	}

	public List<Rating> getAllRatings() {
		return ratingRepository.findAll();
	}
	
	public List<Rating> getRatingByRecipe(long rid) {
		return ratingRepository.findByRecipe(recipeService.getRecipeById(rid));
	}
	
	public List<Rating> getRatingByUser(long uid) {
		return ratingRepository.findByUser(userService.getUserById(uid));
	}
	
	public Rating updateRating(long rid,RatingRequest request) {
		return ratingRepository.save(toRating(rid,request));
	}
	
	public void deleteRatingById(long rid) {
		ratingRepository.deleteById(rid);
	}
	
	public long countOfRatings() {
		return ratingRepository.count();
	}
	
}
