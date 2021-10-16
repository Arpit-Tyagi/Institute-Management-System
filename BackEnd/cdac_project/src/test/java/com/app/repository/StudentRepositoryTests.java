package com.app.repository;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Courses;
import com.app.pojos.Student;

@SpringBootTest
class StudentRepositoryTests {
	
	@Autowired
	private StudentRepository stdRepo;
	@Autowired
	private CourseRepository courseRepo;

	@Test
	void testAddStudent() {
		
		List<Student> std = Arrays.asList(
				new Student("samarth shukla", "samthshukla@gmail.com", "samarth", 63.0, 89.0 ,67.0, 9559982929l, "Delhi", 350, Date.valueOf("1993-11-11")),
				new Student("mukesh tyagi", "meshtyagi@gmail.com", "mukesh", 59.0, 68.0 ,67.0, 9760555484l, "Pune", 350, Date.valueOf("1995-03-11")),
				new Student("ramesh tyagi", "rashtyagi@gmail.com", "akki", 59.0, 68.0 ,67.0, 9557062929l, "Meerut", 350, Date.valueOf("1994-04-21")),
				new Student("sresh tyagi", "sushtyagi@gmail.com", "arpit", 59.0, 68.0 ,67.0, 9557062929l, "Haridwar", 350, Date.valueOf("1992-05-22")),
				new Student("matesh tyagi", "matyagi@gmail.com", "arjit", 59.0, 68.0 ,67.0, 9760555484l, "Rishikesh", 350, Date.valueOf("1999-04-30")),
				new Student("aadesh tyagi", "aahtyagi@gmail.com", "akki", 59.0, 68.0 ,67.0, 9557062929l, "Shimla", 350, Date.valueOf("1992-05-10"))

				
				
				);
		stdRepo.saveAll(std);		
	}    
	
	@Test
	void linkStudentCourse()
	{
		Courses c1 = courseRepo.findById(1).get();
		Courses c2 = courseRepo.findById(2).get();
		
		Student s1 = stdRepo.findById(14).get();
		Student s2 = stdRepo.findById(15).get();
		Student s3 = stdRepo.findById(16).get();
		
		s1.setCourse(c2);
		s2.setCourse(c2);
		s3.setCourse(c2);
		
		stdRepo.save(s1);
		stdRepo.save(s2);
		stdRepo.save(s3);
	}

}
