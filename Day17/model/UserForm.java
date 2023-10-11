package com.jeeva.model;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class UserForm {
	private String fullname;
	private String username;
	private String email;
	private String mobile;
	private String password;
	private MultipartFile profile_image;
}
