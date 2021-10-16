package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Student;

public interface StudentRepository extends JpaRepository<Student,Integer> {

	Optional<Student> findByEmailAndPassword(String email, String password);
	List<Student> findByCourseName(String course);
	Optional<Student> findById(Integer id);
}
