package com.jeeva.service;

import java.io.IOException;

import com.jeeva.dto.request.AuthenticationRequest;
import com.jeeva.dto.request.UserRequest;
import com.jeeva.dto.response.AuthenticationResponse;

public interface AuthService {
	
    boolean userRegistration(UserRequest request) throws IOException;

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
