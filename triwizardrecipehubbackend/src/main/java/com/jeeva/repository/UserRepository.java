package com.jeeva.repository;

import org.springframework.data.repository.CrudRepository;

import com.jeeva.model.User;

public interface UserRepository extends CrudRepository<User, Integer>{
	public boolean existsByUsername(String username);
	public User findByUsername(String username);
}
