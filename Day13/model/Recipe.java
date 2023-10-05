package com.jeeva.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    @Column(length = 300, nullable = false)
    private String title;

    @Column(length = 300, nullable = false)
    private String ingredients;

    @Column(length = 300, nullable = false)
    private String instructions;
    
    @Column(length = 300, nullable = false)
    private String tips;
    
    @Column(length = 300, nullable = false)
    private String value;
    
    @Column
    private byte[] image;
    
    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    @ManyToMany
    @JoinTable(
        name = "recipe_genre",
        joinColumns = @JoinColumn(name = "recipe_id"),
        inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private List<Genre> genres = new ArrayList<>();
    
    @OneToMany(mappedBy = "recipe")
    private List<FavouriteRecipe> favoritedByUsers;
    
}
