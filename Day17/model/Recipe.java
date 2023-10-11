package com.jeeva.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
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
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "rid")
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
    
    @Column(columnDefinition = "MEDIUMBLOB")
    private byte[] image;
    
    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;
    
    @ManyToMany
    private List<Genre> genres = new ArrayList<>();
    
    @OneToMany(mappedBy = "recipe")
    private List<FavouriteRecipe> favorites = new ArrayList<>();
    
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();
    
}
