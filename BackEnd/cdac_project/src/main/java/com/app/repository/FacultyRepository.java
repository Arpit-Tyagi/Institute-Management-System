package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

	Optional<Faculty> findById(Integer id);
	List<Faculty> findByFacModuleModCourseName(String name);
}
