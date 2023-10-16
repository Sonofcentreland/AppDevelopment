package com.jeeva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Favourite;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;

@Repository
public interface FavouriteRepository extends JpaRepository<Favourite, Long>{

	List<Favourite> findByRecipe(Recipe recipe);
	List<Favourite> findByUser(User user);
	
	boolean existsByRecipe(Recipe recipe);
	boolean existsByUser(User user);

}
