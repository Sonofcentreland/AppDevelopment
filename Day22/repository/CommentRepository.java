package com.jeeva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Comment;
import com.jeeva.model.Recipe;
import com.jeeva.model.User;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
	
 	List<Comment> findByRecipe(Recipe recipe);
    List<Comment> findByUser(User user);
    
}
