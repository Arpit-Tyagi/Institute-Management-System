package com.app.repository;

import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.app.pojos.Courses;
import com.app.pojos.Modules;
import com.app.pojos.Student;

@SpringBootTest
class CourseRepositoryTests {
	
	@Autowired
	private CourseRepository courseRepo;
	@Autowired
	private ModulesRepository moduleRepo;

	@Test
	void testAddCourse() {
		
		List<Courses> course = Arrays.asList(
				new Courses("DAC", 100000.0f), 
				new Courses("DAI", 150000.0f));
	
		courseRepo.saveAll(course);		
	}   
	
	@Test
	void testAddModule() {
		
		List<Modules> mod = Arrays.asList(
				new Modules("JAVA", "15 days"),
				new Modules("Advanced Data Structure", "12 days"),
				new Modules("Web based Technologies", "15 days"),
				new Modules("Aptitute", "12 days"),
				new Modules("Effective Communication", "15 days"),
				new Modules("Software Enng", "12 days"),
				new Modules("J2EE", "15 days"),
				new Modules("Operating System", "12 days"),
				new Modules("Concept of Programing", "15 days"),
				new Modules("Database Management System", "12 days"),
				new Modules("Practical Machine Learning", "15 days"),
				new Modules("AI Trends and Computing Platforms", "12 days"),
				new Modules("Data Analytics", "15 days"),
				new Modules("Deep Neural Networks", "12 days"),
				new Modules("Advanced Programming Using R and Python", "15 days"),
				new Modules("Fundamentals of Artificial Intelligence", "12 days"),
				new Modules("Mathematics for Artificial Intelligence", "15 days"),
				new Modules("Natural Language Processing &Computer Vision", "12 days"),
				new Modules("Aptitute and Reasning", "15 days"),
				new Modules("Communication", "12 days"));
	
		moduleRepo.saveAll(mod);		
	}   
	
	@Test
	void linkCourseModule()
	{
		Courses c1 = courseRepo.findById(1).get();
		Courses c2 = courseRepo.findById(2).get();
		
		Modules m1 = moduleRepo.findById(1).get();
		Modules m2 = moduleRepo.findById(2).get();
		Modules m3 = moduleRepo.findById(3).get();
		Modules m4 = moduleRepo.findById(4).get();
		Modules m5 = moduleRepo.findById(5).get();
		Modules m6 = moduleRepo.findById(6).get();
		Modules m7 = moduleRepo.findById(7).get();
		Modules m8 = moduleRepo.findById(8).get();
		Modules m9 = moduleRepo.findById(9).get();
		Modules m10 = moduleRepo.findById(10).get();
		Modules m11 = moduleRepo.findById(11).get();
		Modules m12 = moduleRepo.findById(12).get();
		Modules m13 = moduleRepo.findById(13).get();
		Modules m14 = moduleRepo.findById(14).get();
		Modules m15 = moduleRepo.findById(15).get();
		Modules m16 = moduleRepo.findById(16).get();
		Modules m17 = moduleRepo.findById(17).get();
		Modules m18 = moduleRepo.findById(18).get();
		Modules m19 = moduleRepo.findById(19).get();
		Modules m20 = moduleRepo.findById(20).get();
	
	
		m1.setModCourse(c1);
		m2.setModCourse(c1);
		m3.setModCourse(c1);
		m4.setModCourse(c1);
		m5.setModCourse(c1);
		m6.setModCourse(c1);
		m7.setModCourse(c1);
		m8.setModCourse(c1);
		m9.setModCourse(c1);
		m10.setModCourse(c1);
		
		m11.setModCourse(c2);
		m12.setModCourse(c2);
		m13.setModCourse(c2);
		m14.setModCourse(c2);
		m15.setModCourse(c2);
		m16.setModCourse(c2);
		m17.setModCourse(c2);
		m18.setModCourse(c2);
		m19.setModCourse(c2);
		m20.setModCourse(c2);

		moduleRepo.save(m1);
		moduleRepo.save(m2);
		moduleRepo.save(m3);
		moduleRepo.save(m4);
		moduleRepo.save(m5);
		moduleRepo.save(m6);
		moduleRepo.save(m7);
		moduleRepo.save(m8);
		moduleRepo.save(m9);
		moduleRepo.save(m10);
		moduleRepo.save(m11);
		moduleRepo.save(m12);
		moduleRepo.save(m13);
		moduleRepo.save(m14);
		moduleRepo.save(m15);
		moduleRepo.save(m16);
		moduleRepo.save(m17);
		moduleRepo.save(m18);
		moduleRepo.save(m19);
		moduleRepo.save(m20);
	}

}
