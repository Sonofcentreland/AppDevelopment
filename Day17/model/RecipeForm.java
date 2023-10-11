package com.jeeva.model;

import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class RecipeForm {
	private String title;
    private String ingredients;
    private String instructions;
    private String tips;
    private String value;
    private Integer authorId;  
    private Set<Integer> genreIds;
    private MultipartFile image;
}
