package com.jeeva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.dto.request.ReportRequest;
import com.jeeva.model.Report;
import com.jeeva.repository.ReportRepository;

@Service
public class ReportService {
	@Autowired
	ReportRepository reportRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired
	RecipeService recipeService;
	
	public Report toReport(ReportRequest request) {
		var report = Report.builder()
				.description(request.getDescription())
				.recipe(recipeService.getRecipeById(request.getRecipeId()))
				.user(userService.getUserById(request.getUserId()))
				.build();
		return report;
	}
	
	public Report toReport(long rid,ReportRequest request) {
		Report report = getReportById(rid);
		report.setDescription(request.getDescription());
		return report;
	}
	
	public boolean isReportExist(long rid) {
		return reportRepository.existsById(rid);
	}
	
	public Report createReport(ReportRequest request) {
		return reportRepository.save(toReport(request));
	}
	
	public Report getReportById(long rid) {
		return reportRepository.findById(rid).get();
	}
	
	public List<Report> getAllReports(){
		return reportRepository.findAll();
	}
	
	public List<Report> getReportByRecipe(long rid){
		return reportRepository.findByRecipe(recipeService.getRecipeById(rid));
	}
	
	public List<Report> getReportByUser(long uid){
		return reportRepository.findByUser(userService.getUserById(uid));
	}
	
	public List<Report> getAllReportById(List<Long> reportIds){
		return reportRepository.findAllById(reportIds);
	}
	
	public Report updateReport(long rid, ReportRequest request) {
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
