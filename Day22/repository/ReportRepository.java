package com.jeeva.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Recipe;
import com.jeeva.model.Report;
import com.jeeva.model.User;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long>{
	 
    List<Report> findByRecipe(Recipe recipe);
    List<Report> findByUser(User user);
    
}
