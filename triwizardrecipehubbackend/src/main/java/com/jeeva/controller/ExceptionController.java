package com.jeeva.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.jeeva.exception.ShortfactNotfoundException;
import com.jeeva.exception.UserNotFoundException;

@ControllerAdvice
public class ExceptionController
{
	@ExceptionHandler(value = ShortfactNotfoundException.class)
	public ResponseEntity<Object> exception(ShortfactNotfoundException exception)
	{
		return new ResponseEntity<>("Sorry, The Fact you looking for is either been deleted or not been created yet.", HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value = UserNotFoundException.class)
	public ResponseEntity<Object> exception(UserNotFoundException exception)
	{
		return new ResponseEntity<>("Sorry, The user is not found", HttpStatus.NOT_FOUND);
	}
}
