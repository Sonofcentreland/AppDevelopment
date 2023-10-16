package com.jeeva.exception;

import lombok.Getter;

@Getter
public class InvalidArgumentException extends Exception{
	private static final long serialVersionUID = 1L;
	
	private String message;
	
	public InvalidArgumentException(String message) {
		super(message);
		this.message = message;
	}
	
}
