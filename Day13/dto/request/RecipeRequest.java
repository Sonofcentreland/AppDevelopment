package com.jeeva.dto.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RecipeRequest {
	
	private String title;
	private String ingredients;
	private String instructions;
	private String tips;
	private String value;
	private String author;
	private MultipartFile image;
	
}
