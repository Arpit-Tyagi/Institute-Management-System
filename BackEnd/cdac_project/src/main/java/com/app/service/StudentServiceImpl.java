package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.Courses;
import com.app.pojos.Student;
import com.app.repository.StudentRepository;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {


	@Autowired
	private StudentRepository stdRepo;
	
	@Autowired
	private ICourseService courseSerivice;
	
	@Override
	public List<Student> fetchAllStudents() {
		System.out.println("In fetchAll Students");
		return stdRepo.findAll();
	}
	
	@Override
	public Student saveStudentDetails(Student transientStudent) {
		// TODO Auto-generated method stub
		return stdRepo.save(transientStudent);
	}

	@Override
	public Student studentLogin(String email, String password) {
		
		return stdRepo.findByEmailAndPassword(email, password).orElseThrow(() -> new UserHandlingException("Login Failed!! Please Enter valid credentials !!!!"));
	}

	@Override
	public Student addStudentDetails(Student transientStudent, String courseName) {
		
		Courses course = courseSerivice.getCourse(courseName);
		//System.out.println(course);
    transientStudent.setCourse(course);
//		System.out.println(transientStudent);
		return stdRepo.save(transientStudent);
		//return null;
	}

	@Override
	public List<Student> getByCourse(String course) {
		
		return stdRepo.findByCourseName(course);
	}

	@Override
	public Student getById(Integer id) {
		
		return stdRepo.findById(id).orElseThrow(()-> new UserHandlingException("Student Dteails Not Found! Please Enter Valid Id!!!!"));
	}
	
	
	
	

}
