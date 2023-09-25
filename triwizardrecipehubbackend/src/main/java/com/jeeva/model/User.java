package com.jeeva.model;

import java.io.IOException;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	private String fullname;
	private String username;
	private String email;
	private String mobile;
	@Lob
	private byte[] profile;
	private String password;
	
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public byte[] getProfile() {
		return profile;
	}
	public void setProfile(byte[] profile) {
		this.profile = profile;
	}
	
	public void setUserData(UserForm user) throws IOException {
		this.fullname = user.getFullname();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.mobile = user.getMobile();
		this.profile = ImageEdit.compressImage(user.getProfile().getBytes());
		this.password = user.getPassword();
	}
	
	public void setUser(User user) {
		this.uid = user.getUid();
		this.fullname = user.getFullname();
		this.username = user.getUsername();
		this.email = user.getEmail();
		this.mobile = user.getMobile();
		this.profile = ImageEdit.decompressImage(user.getProfile());
		this.password = user.getPassword();
	}
}
