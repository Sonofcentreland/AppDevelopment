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
public class Shortfacts
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sid;
	private String title;
	private String description;
	private String content;
	@Lob
	private byte[] image;
	private String author;
	
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
		this.description = data.getDescription();
		this.content = data.getContent();
		this.image = ImageEdit.compressImage(data.getImage().getBytes());
		this.author = data.getAuthor();
	}
	
	public void setShortFact(Shortfacts shortfact) {
		this.sid = shortfact.sid;
		this.title = shortfact.getTitle();
		this.description = shortfact.getDescription();
		this.content = shortfact.getContent();
		this.image = ImageEdit.decompressImage(shortfact.getImage());
		this.author = shortfact.getAuthor();
	}
	
	@Override
	public String toString() {
		return "Shortfacts [sid=" + sid + ", title=" + title + ", description=" + description + ", content=" + content
				+ ", image=" + Arrays.toString(ImageEdit.decompressImage(image)) + ", author=" + author + "]";
	}
}
