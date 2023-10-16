package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.UserReportRequest;
import com.jeeva.model.UserReport;
import com.jeeva.repository.UserReportRepository;

@Service
public class UserReportService {
	@Autowired
	UserReportRepository reportRepository;
	
	public UserReport toReport(UserReportRequest request) {
		UserReport report = new UserReport();
		long n = 100;
		report.setRid(n);
		report.setDescription(request.getDescription());
		report.setRecipe(request.getRecipe());
		report.setUser(request.getUser());
		return report;
	}
	
	public UserReport toReport(long rid,UserReportRequest request) {
		UserReport report = getReportById(rid);
		report.setDescription(request.getDescription());
		report.setRecipe(request.getRecipe());
		report.setUser(request.getUser());
		return report;
	}
	
	public boolean isReportExist(long rid) {
		return reportRepository.existsById(rid);
	}
	
	public UserReport createReport(UserReport report) {
		return reportRepository.save(report);
	}
	
	public UserReport getReportById(long rid) {
		return reportRepository.findById(rid).get();
	}
	
	public List<UserReport> getAllReports(){
		return reportRepository.findAll();
	}
	
	public List<UserReport> getAllReportById(List<Long> reportIds){
		return reportRepository.findAllById(reportIds);
	}
	
	public UserReport updateReport(long rid, UserReportRequest request) {
		System.out.println(toReport(rid,request).getRid());
		return reportRepository.save(toReport(rid,request));
	}

	public void deleteReportById(long rid) {
		reportRepository.deleteById(rid);
	}
	
	public long countOfReports() {
		return reportRepository.count();
	}
}
