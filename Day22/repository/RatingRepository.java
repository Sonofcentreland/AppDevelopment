package com.jeeva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Rating;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long>{
	
	List<Rating> findByRecipe(Recipe recipe);
    List<Rating> findByUser(User user);

}
