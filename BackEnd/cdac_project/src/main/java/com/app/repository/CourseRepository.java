package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Courses;

public interface CourseRepository extends JpaRepository<Courses, Integer> {
	
	Optional<Courses> findByName(String name);
	Optional<Courses> findById(Integer id);
	
	

}
