package com.jeeva.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.exception.UserNotFoundException;
import com.jeeva.model.Login;
import com.jeeva.model.User;
import com.jeeva.service.UserService;

@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public String signup(@RequestBody User user) {
		userService.signup(user);
		return "Successfully created";
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
