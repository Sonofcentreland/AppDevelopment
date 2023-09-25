package com.jeeva.model;

import java.io.IOException;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity 
@NoArgsConstructor
@AllArgsConstructor
public class Recipe
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int rid;
	private String title;
	private String ingredients;
	private String instructions;
	private String value;
	private String tips;
	@Lob
	private byte[] image;
	private String author;
	
	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getTips() {
		return tips;
	}

	public void setTips(String tips) {
		this.tips = tips;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	//Method to get data from RecipeForm and save it in Recipe
	public void setRecipeData(RecipeForm data) throws IOException {
		this.title = data.getTitle();
		this.ingredients = data.getIngredients();
		this.instructions = data.getInstructions();
		this.value = data.getValue();
		this.tips = data.getTips();
		this.image = ImageEdit.compressImage(data.getImage().getBytes());
		this.author = data.getAuthor();
	}
	
	public void setRecipe(Recipe recipe) {
		this.rid = recipe.rid;
		this.title = recipe.getTitle();
		this.ingredients = recipe.getIngredients();
		this.instructions = recipe.getInstructions();
		this.value = recipe.getValue();
		this.tips = recipe.getTips();
		this.image = ImageEdit.decompressImage(recipe.getImage());
		this.author = recipe.getAuthor();
	}
}
