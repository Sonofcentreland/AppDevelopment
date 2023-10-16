package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.jeeva.model.UserReport;
import com.jeeva.repository.UserReportRepository;

@Service
public class UserReportService {
	@Autowired
	UserReportRepository userReportRepository;
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
	
	public ResponseEntity<UserReport> createReport(UserReport report){
		ResponseEntity<UserReport> responseEntity = restTemplate().postForEntity(
				"http://localhost:8807/recipehub/user/report/create",
				report,
				UserReport.class);
		return responseEntity;
	}
	
	public ResponseEntity<UserReport> getReportById(long rid){
		ResponseEntity<UserReport> responseEntity = restTemplate().getForEntity(
				"http://localhost:8807/recipehub/user/report/get/"+rid,
				UserReport.class);
		return responseEntity;
	}
	
	public ResponseEntity<List<UserReport>> getAllReports(){
		ResponseEntity<List<UserReport>> responseEntity = restTemplate().exchange(
				"http://localhost:8807/recipehub/user/report/get/all",
				HttpMethod.GET,
	            null,
	            new ParameterizedTypeReference<List<UserReport>>() {});
		return responseEntity;
	}
	
	public void deleteReportById(long rid) {
		restTemplate().delete("http://localhost:8807/recipehub/user/report/delete/" + rid);
	}
	 
}
