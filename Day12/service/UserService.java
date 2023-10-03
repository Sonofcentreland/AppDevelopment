package com.jeeva.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.FormService;
import com.jeeva.model.User;
import com.jeeva.model.UserForm;
import com.jeeva.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	FormService formService;
	
	public User findById(int uid) {
		Optional<User> optional = userRepository.findById(uid);
		return optional.get();
	}
	
	public void createUser(UserForm form) throws IOException {
		userRepository.save( formService.setUser(form) );
	}
	
	public User getUser(int uid) {
		return userRepository.findById(uid).get();
	}
}
