package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.Courses;
import com.app.repository.CourseRepository;

@Service
@Transactional
public class CourseServiceImpl implements ICourseService {
	
	@Autowired
	private CourseRepository courseRepo;

	@Override
	public Courses getCourse(String courseName) {
		
		return courseRepo.findByName(courseName).orElseThrow(() -> new UserHandlingException("Course Not Found!! Please Enter Valid Course Name!!!"));
	}

	@Override
	public List<Courses> getAllCourses() {
	List<Courses> coulist = courseRepo.findAll();
	System.out.println("In the getAllCourses");
	//System.out.println(coulist.get(1));
	System.out.println("In the getAllCourses");
		return coulist;
	}
	
	
		

}
