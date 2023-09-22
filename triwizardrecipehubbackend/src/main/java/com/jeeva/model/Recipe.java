package com.jeeva.model;

import java.io.IOException;
import java.util.Arrays;

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
	private String procedure;
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

	public String getProcedure() {
		return procedure;
	}

	public void setProcedure(String procedure) {
		this.procedure = procedure;
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

	//Method to get data from ShortfactUpload and save it in Shortfacts
	public void setShortfactData(FactData data) throws IOException {
		this.title = data.getTitle();
		this.ingredients = data.getDescription();
		this.procedure = data.getContent();
		this.value = data.getContent();
		this.tips = data.getContent();
		this.image = ImageEdit.compressImage(data.getImage().getBytes());
		this.author = data.getAuthor();
	}
	
	public void setShortFact(Recipe shortfact) {
		this.rid = shortfact.rid;
		this.title = shortfact.getTitle();
		this.ingredients = shortfact.getIngredients();
		this.procedure = shortfact.getProcedure();
		this.value = shortfact.getValue();
		this.tips = shortfact.getTips();
		this.image = ImageEdit.decompressImage(shortfact.getImage());
		this.author = shortfact.getAuthor();
	}
	
	
}
