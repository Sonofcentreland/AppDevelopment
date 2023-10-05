package com.jeeva.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.Genre;
import com.jeeva.repository.GenreRepository;

@Service
public class GenreService {

    @Autowired
    private GenreRepository genreRepository;

    public Genre getGenreByName(String name) {
        return genreRepository.findByName(name).get();
    }
    
}
