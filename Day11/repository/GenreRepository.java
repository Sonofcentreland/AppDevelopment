package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer>{

}
