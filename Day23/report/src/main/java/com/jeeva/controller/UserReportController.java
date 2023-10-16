package com.jeeva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.UserReportRequest;
import com.jeeva.model.UserReport;
import com.jeeva.service.UserReportService;

@RestController
@RequestMapping(Api.USERREPORT)
@CrossOrigin("*")
public class UserReportController {
	@Autowired
	UserReportService reportService;
	
	@PostMapping("/create")
	public ResponseEntity<?> createReport(@RequestBody UserReport report){
		return ResponseEntity.ok(reportService.createReport(report));
	}
	
	@GetMapping("/get/count")
	public ResponseEntity<?> getCount(){
		long count = reportService.countOfReports();
		return new ResponseEntity<>(count,HttpStatus.OK);
	}
	
	@GetMapping("/get/{rid}")
	public ResponseEntity<?> getReportById(@PathVariable long rid){
		UserReport report = reportService.getReportById(rid);
		return new ResponseEntity<>(report,HttpStatus.OK);
	}
	
	@GetMapping("/get/all")
	public ResponseEntity<?> getAllReports(){
		List<UserReport> reports = reportService.getAllReports();
		return new ResponseEntity<>(reports,HttpStatus.OK);
	}
	
	@PutMapping("update/{rid}")
	public ResponseEntity<?> updateReport(@PathVariable long rid, UserReportRequest request){
		reportService.updateReport(rid, request);
		return new ResponseEntity<>("Report was updated successfully",HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{rid}")
	public ResponseEntity<?> deleteReportById(@PathVariable long rid){
		reportService.deleteReportById(rid);
		return new ResponseEntity<>("The report with id "+rid+" was deleted successfully",HttpStatus.OK);
	}
	
}
