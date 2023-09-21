package com.jeeva.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.Login;
import com.jeeva.model.User;
import com.jeeva.repository.UserRepository;
import com.jeeva.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;

	@Override
	public boolean isUserExist(String username) {
		int uid = userRepository.findByUsername(username).getUid();
		return userRepository.existsById(uid);
	}
	
	@Override
	public boolean isUserNameExist(String username) {
		return userRepository.existsByUsername(username);
	}
	
	@Override
	public void updateUser(User user) {
		userRepository.save(user);
	}
	
	@Override
	public void signup(User user) {
		userRepository.save(user);
	}
	
	@Override
	public Login login(String username, String password) {
		Login login = new Login();
		if(userRepository.existsByUsername(username)) 
			{
			if(userRepository.findByUsername(username).getPassword().equals(password))
			{
				login.setId(0);
				login.setMessage("Login was successful");
			}
			else
			{
				login.setId(1);
				login.setMessage("Password is incorrect");
			}
			
		}
		else
		{
			login.setId(2);
			login.setMessage("Username is incorrect");
		}
		return login;
	}
}
