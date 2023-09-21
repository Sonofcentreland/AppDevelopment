package com.jeeva.service;

import com.jeeva.model.Login;
import com.jeeva.model.User;

public interface UserService {
	
	public void signup(User user);
	
	public Login login(String username,String password);
	
	public boolean isUserExist(String username);
	
	public boolean isUserNameExist(String username);
	
	public void updateUser(User user);
	
}
