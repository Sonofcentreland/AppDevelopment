package com.jeeva.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rid;
	private String title;
	@Lob
	private byte[] recipe_image;
	private String ingredients;
	
	@ManyToMany
    @JoinTable(
        name = "recipe_genre",
        joinColumns = @JoinColumn(name = "recipe_id"),
        inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> genres = new ArrayList<>();
	
	private String instructions;
	private String tips;
	private String value;
	
	@ManyToOne
    @JoinColumn(name = "author_id")
    private User author;
	
}
