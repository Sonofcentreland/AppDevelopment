package com.jeeva.dto.request;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
	
    private String name;
    private String username;
    private String email;
    private String mobile;
    private String password;
    private MultipartFile image;
    private String role;

}
