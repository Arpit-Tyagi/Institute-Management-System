package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.pojos.Marks;

public interface MarksRepsitory extends JpaRepository<Marks, Integer> {
	
	List<Marks> findByStudentId(Integer id);

}
