package com.jeeva.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.UserRequest;
import com.jeeva.model.User;
import com.jeeva.model.enumerate.Role;
import com.jeeva.repository.UserRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	private final PasswordEncoder passwordEncoder;
	
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	public boolean createUser(UserRequest request) throws IOException {
        Optional<User> isUserExists = userRepository.findByUsername(request.getUsername());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .mobile(request.getMobile())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .image(request.getImage().getBytes())
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

	public User getUserById(long uid) {
		return userRepository.findById(uid).get();
	}
	
	public void deleteUser(long uid) {
		userRepository.deleteById(uid);
	}
	
	public void updateUser(long uid, UserRequest request) throws IOException {
		User user = getUserById(uid);
		user = User.builder()
                .name(request.getName())
                .username(request.getUsername())
                .email(request.getEmail())
                .mobile(request.getMobile())
                .password(passwordEncoder.encode(request.getPassword()))
                .image(request.getImage().getBytes())
                .isEnabled(true)
                .role(Role.valueOf(request.getRole().toUpperCase()))
                .build();
        userRepository.save(user);
	}
	
	public long countOfUsers() {
		return userRepository.count();
	}
	
}
