package com.jeeva.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeeva.model.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer> {
	
	Optional<Genre> findByName(String name);
	List<Genre> findAllByNameIn(List<String> names);
	
}
