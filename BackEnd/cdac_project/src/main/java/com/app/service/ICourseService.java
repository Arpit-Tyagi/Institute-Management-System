package com.app.service;

import java.util.List;

import com.app.pojos.Courses;

public interface ICourseService {

	List<Courses> getAllCourses();
	Courses getCourse(String courseName);
}
