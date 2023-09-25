package com.jeeva.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.exception.UserNotFoundException;
import com.jeeva.model.Login;
import com.jeeva.model.User;
import com.jeeva.model.UserForm;
import com.jeeva.service.UserService;

@CrossOrigin("*")
@RequestMapping("/Users")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping("/Hello")
	public String sayHello(){
		 return "Hello";
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> createUser(@ModelAttribute UserForm user)throws IOException
	{
		User User = userService.signup(user);
		return new ResponseEntity<>("Recipe is created successfully with id = " + User.getUid(), HttpStatus.CREATED);
	}
	
	@PutMapping("/updateuser")
	public String update(@RequestParam String username,@RequestBody User user) {
		boolean isUserExist = userService.isUserExist(username);
		boolean isUserNameExist = userService.isUserNameExist(user.getUsername());
		if(isUserExist) {
			if(isUserNameExist) {
				throw new UserNotFoundException();
			}
			else {				
				userService.updateUser(user);
				return "Success";
			}
		}
		else {
			throw new UserNotFoundException();
		}
	}
	
	@GetMapping("/login")
	public Login login(@RequestParam String username,@RequestParam String password) {
		return userService.login(username, password);
	}
}
