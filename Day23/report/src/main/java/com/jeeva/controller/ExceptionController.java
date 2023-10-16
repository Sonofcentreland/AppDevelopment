package com.jeeva.controller;

import java.util.NoSuchElementException;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.jeeva.dto.response.ErrorResponse;
import com.jeeva.exception.RecipeNotFoundException;

class ClassNameExtractor {

    public static String extractClassNameFromStackTrace(Exception e) {
        StackTraceElement[] stackTrace = e.getStackTrace();
        for (StackTraceElement element : stackTrace) {
            String className = element.getClassName();
            if (className.startsWith("com.jeeva")) {
            	String method = element.getMethodName();
            	return ((method.contains("Comment")) ? "Comment" : 
            			(method.contains("Favourite")) ? "Favourite" : 
        				(method.contains("Genre")) ? "Genre" : 
    					(method.contains("Rating")) ? "Rating" : 
						(method.contains("Recipe")) ? "Recipe" : 
            			(method.contains("Report")) ? "Report" :
        				(method.contains("User")) ? "User":
            			"Entity");
            }
        }
        return "No Method";
    }
}

@RestControllerAdvice
public class ExceptionController {
	
	@ExceptionHandler(RecipeNotFoundException.class)
	public ResponseEntity<ErrorResponse> handleRecipeNotFoundException(RecipeNotFoundException e){
		ErrorResponse errorResponse = new ErrorResponse(404, e.getMessage());
		return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(NotFoundException.class)
	public ResponseEntity<ErrorResponse> handleNotFoundException(NotFoundException e){
		ErrorResponse errorResponse = new ErrorResponse(404, e.getMessage());
		return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(NoSuchElementException.class)
	public ResponseEntity<ErrorResponse> handleNotFoundException(NoSuchElementException e){
		String entity = ClassNameExtractor.extractClassNameFromStackTrace(e);
		
		ErrorResponse errorResponse = new ErrorResponse(404, "Requested "+entity+" not found!");
		return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public ResponseEntity<ErrorResponse> handleInvalidArgumentException(MethodArgumentTypeMismatchException e){
		String message = "Parameter '" + e.getName() + "' has an invalid value '"
                + e.getValue() + "'. Please provide a valid value.";
		ErrorResponse errorResponse = new ErrorResponse(400, message);
		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}
}
