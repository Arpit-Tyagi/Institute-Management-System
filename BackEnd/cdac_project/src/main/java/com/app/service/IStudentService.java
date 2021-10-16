package com.app.service;

import java.util.List;

import com.app.pojos.Student;

public interface IStudentService {
	
	List<Student> fetchAllStudents(); 
	Student saveStudentDetails(Student transientStudent);
	Student studentLogin(String email, String password);
	Student addStudentDetails(Student transientStudent, String courseName);
	
	List<Student> getByCourse(String course);
	Student getById(Integer id);
}
