package com.jeeva.dto.request;

import java.util.List;

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
	private MultipartFile image;
	private Long authorId;
	private List<Long> genreIds;
	
}
