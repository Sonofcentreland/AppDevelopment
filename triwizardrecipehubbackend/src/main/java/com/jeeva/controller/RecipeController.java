package com.jeeva.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.exception.RecipeNotfoundException;
import com.jeeva.model.FactData;
import com.jeeva.model.Recipe;
import com.jeeva.service.RecipeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/Recipes")
public class RecipeController
{
	@Autowired
	private RecipeService shortfactService;
	
	@GetMapping("/Hello")
	public String sayHello(){
		 return "Hello";
	}

	@PostMapping("/create")
	public ResponseEntity<?> createShortfact(@ModelAttribute FactData Shortfact)throws IOException
	{
		Recipe shortfact = shortfactService.createShortfact(Shortfact);
		return new ResponseEntity<>("Shortfact is created successfully with id = " +shortfact.getRid(), HttpStatus.CREATED);
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateShortfact(@PathVariable int id,
			@RequestBody Recipe Shortfact)
	{
		boolean isShortfactExist = shortfactService.isShortfactExist(id);
		if (isShortfactExist)
		{
			Shortfact.setRid(id);
			shortfactService.updateShortfact(Shortfact);
			return new ResponseEntity<>("Shortfact is updated successsfully", HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}

	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getPhoto(@PathVariable int id)
	{
		boolean isShortfactExist = shortfactService.isShortfactExist(id);
		if (isShortfactExist)
		{
			return new ResponseEntity<>(shortfactService.getShortfact(id), HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}
	}

	@GetMapping("/getall")
	public ResponseEntity<?> getShortfacts()
	{
		List<Recipe> ShortfactList = shortfactService.getShortfacts();
		return new ResponseEntity<>(ShortfactList, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteShortfact(@PathVariable int id) throws IOException
	{
		boolean isShortfactExist = shortfactService.isShortfactExist(id);
		if (isShortfactExist)
		{
			shortfactService.deleteShortfact(id);
			return new ResponseEntity<>("Shortfact is deleted successsfully", HttpStatus.OK);
		}
		else
		{
			throw new RecipeNotfoundException();
		}

	}

}
