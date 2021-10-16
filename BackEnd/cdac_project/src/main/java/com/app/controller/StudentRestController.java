package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.Courses;
import com.app.pojos.Student;
import com.app.service.CourseServiceImpl;
import com.app.service.IStudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins="http://localhost:3000")
public class StudentRestController {

	@Autowired
	private IStudentService stdService;
	
	@Autowired
	private CourseServiceImpl courService;
	
	@GetMapping
	public List<Student> getAllStudents(){
		System.out.println("In getAll Students");
		List<Student> stdList = stdService.fetchAllStudents();
		System.out.println("Processing");
		return stdList;
	}
	
	@PostMapping
	public ResponseEntity<?> saveStudent(@RequestBody Student stdDetails){
		System.out.println("in save student" + stdDetails);
	//	try{
		return new ResponseEntity <>(stdService.saveStudentDetails(stdDetails), HttpStatus.CREATED);
//	}catch(DataIntegrityViolationException e) {
//		System.out.println("error occured in saving student details" + e);
//		ErrorResponse resp = new  ErrorResponse( "Email Id is already in use!!!! Please use different email id" , LocalDateTime.now() );
//		return new ResponseEntity <>(resp, HttpStatus.CONFLICT);
//	}catch(RuntimeException e) {
//		System.out.println("error occured in saving student details" + e);
//		ErrorResponse resp = new  ErrorResponse( "Adding student details failed!!! Please check the details carefully", LocalDateTime.now() );
//		return new ResponseEntity <>(resp, HttpStatus.BAD_REQUEST);
}
	
	@PostMapping("/signin")
	public ResponseEntity<?> loginValidation(@RequestBody LoginRequest request){
		
		return new ResponseEntity<>(stdService.studentLogin(request.getEmail(), request.getPassword()), HttpStatus.OK);
	}
	
	
	@PostMapping("/{courseName}")
	public  Student addStudent(@RequestBody Student stdDetails, @PathVariable String courseName){
		
		return  stdService.addStudentDetails(stdDetails, courseName);
	}
	
	@GetMapping("/{course}")
	public  List<Student> getStudent(@PathVariable String course){
	
		return stdService.getByCourse(course);
		
	}
	
	@GetMapping("/byId/{id}")
	public Student getStudentById(@PathVariable Integer id){
		
		return  stdService.getById(id);
	}
	
	@GetMapping("/course/{name}")
public Courses getCourseByName(@PathVariable String name){
		
		return  courService.getCourse(name);
	}
	
	
}
