package com.jeeva.service;

import java.util.List;

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
    
    public List<Genre> getGenreAllByIds(Iterable<Integer> gids) {
    	return genreRepository.findAllById(gids);
    }
    
    public List<Genre> getGenreAllByNames(List<String> genres) {
    	return genreRepository.findAllByNameIn(genres);
    }
    
    public Genre getGenreById(Integer gid) {
    	return genreRepository.findById(gid).get();
    }
    
    public void deleteGenreById(Integer gid) {
    	genreRepository.deleteById(gid);
    }
    
    public long countOfGenres() {
    	return genreRepository.count();
    }
    
}
