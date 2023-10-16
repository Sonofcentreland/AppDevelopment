package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.UserReport;
@Repository
public interface UserReportRepository extends JpaRepository<UserReport, Long>{
    
}
