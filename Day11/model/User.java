package com.jeeva.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	private String fullname;
	private String username;
	private String email;
	private String mobile;
	private String password;
	@Lob
	private byte[] profile_image;
	
	@OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private Set<Recipe> recipes = new HashSet<>();
}
