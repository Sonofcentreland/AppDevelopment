package com.jeeva.exception;

import lombok.Getter;

@Getter
public class RecipeNotFoundException extends Exception{
	private static final long serialVersionUID = 1L;
	
	private String message;
	
	public RecipeNotFoundException(String message) {
		super(message);
		this.message = message;
	}
	
}
