package com.app.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.ClassLink;
import com.app.pojos.Courses;
import com.app.pojos.Marks;
import com.app.pojos.Modules;
import com.app.pojos.Student;

@SpringBootTest
class MarksRepositoryTest {

	@Autowired
	private MarksRepsitory marksRepo;
	
	@Autowired
	private ModulesRepository moduleRepo;
	
	@Autowired
	private StudentRepository studRepo;

	@Test
	void testAddMarks() {
		
		List<Marks> marks = Arrays.asList(
				new Marks(68, 100, 'B', "PASS"),
				new Marks(5, 100, 'E', "FAIL"),
				new Marks(90, 100, 'A', "PASS"),
				new Marks(44, 100, 'C', "PASS"),
				new Marks(51, 100, 'B', "PASS"),
				new Marks(29, 100, 'D', "FAIL")
				);
		
		marksRepo.saveAll(marks);
		
	}
	
	@Test
	void linkMarksModules()
	{
		Modules m1 = moduleRepo.findById(3).get();
		Modules m2 = moduleRepo.findById(4).get();
		Modules m3 = moduleRepo.findById(15).get();
		Modules m4 = moduleRepo.findById(17).get();
		Modules m5 = moduleRepo.findById(8).get();
		Modules m6 = moduleRepo.findById(1).get();
		
		Marks mark1 = marksRepo.findById(1).get();
		Marks mark2 = marksRepo.findById(2).get();
		Marks mark3 = marksRepo.findById(3).get();
		Marks mark4 = marksRepo.findById(4).get();
		Marks mark5 = marksRepo.findById(5).get();
		Marks mark6 = marksRepo.findById(6).get();
		
		mark1.setModule(m1);
		mark2.setModule(m2);
		mark3.setModule(m3);
		mark4.setModule(m4);
		mark5.setModule(m5);
		mark6.setModule(m6);
		
		marksRepo.save(mark1);
		marksRepo.save(mark2);
		marksRepo.save(mark3);
		marksRepo.save(mark4);
		marksRepo.save(mark5);
		marksRepo.save(mark6);
	}

	@Test
	void linkMarksStudents()
	{
		Student s1 = studRepo.findById(1).get();
		Student s2 = studRepo.findById(2).get();
		Student s3 = studRepo.findById(3).get();
		
		Marks mark1 = marksRepo.findById(1).get();
		Marks mark2 = marksRepo.findById(2).get();
		Marks mark3 = marksRepo.findById(3).get();
		Marks mark4 = marksRepo.findById(4).get();
		Marks mark5 = marksRepo.findById(5).get();
		Marks mark6 = marksRepo.findById(6).get();
		
		mark1.setStudent(s1);
		mark2.setStudent(s2);
		mark3.setStudent(s3);
		mark4.setStudent(s3);
		mark5.setStudent(s2);
		mark6.setStudent(s1);
		
		marksRepo.save(mark1);
		marksRepo.save(mark2);
		marksRepo.save(mark3);
		marksRepo.save(mark4);
		marksRepo.save(mark5);
		marksRepo.save(mark6);
	}

}
