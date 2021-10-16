package com.app.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Student;

@SpringBootTest
class StudentServiceTest {

	@Autowired
	private IStudentService stdService;
	 
	@Test
	void test() {
	
		List<Student> stdList = stdService.fetchAllStudents();
		System.out.println(stdList);
		assertEquals(3, stdList.size());
	
	}

}
