package com.jeeva.service;

import java.io.IOException;

import com.jeeva.model.Login;
import com.jeeva.model.User;
import com.jeeva.model.UserForm;

public interface UserService {
	
	public abstract User signup(UserForm user) throws IOException;
	
	public Login login(String username,String password);
	
	public boolean isUserExist(String username);
	
	public boolean isUserNameExist(String username);
	
	public void updateUser(User user);
	
}
