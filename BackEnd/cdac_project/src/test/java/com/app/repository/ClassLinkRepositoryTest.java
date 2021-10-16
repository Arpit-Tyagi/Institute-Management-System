package com.app.repository;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.app.pojos.ClassLink;
import com.app.pojos.Courses;

@SpringBootTest
class ClassLinkRepositoryTest {

	@Autowired
	private ClassLinkRepository linkRepo;
	
	@Autowired
	private CourseRepository courseRepo;

	@Test
	void testAddClassLink() {
		
		List<ClassLink> links = Arrays.asList(
				new ClassLink("Fundamentals of Artificial Intelligence","JAVA", "https://us02web.zoom.us/meeting/register/tZIuduGqqTwpG9QI9RtJSjGd-MLzaAfIgaD4", Date.valueOf("2021-09-28")),
				new ClassLink("Web based Technologies","ADS", "https://us02web.zoom.us/meeting/register/tZIuduGqqTwpG9QI9RtJSjGd-MLzaAfIgaD4", Date.valueOf("2021-09-27")),
				new ClassLink("Deep Neural Networks","WT", "https://us02web.zoom.us/meeting/register/tZIuduGqqTwpG9QI9RtJSjGd-MLzaAfIgaD4", Date.valueOf("2021-09-26"))
			);
		
		linkRepo.saveAll(links);
		
	}
	
	@Test
	void linkWithCourse()
	{
		Courses c1 = courseRepo.findById(1).get();
		Courses c2 = courseRepo.findById(2).get();
		
		ClassLink l1 = linkRepo.findById(1).get();
		ClassLink l2 = linkRepo.findById(2).get();
		ClassLink l3 = linkRepo.findById(3).get();
		
		l1.setCoursesLink(c2);
		l2.setCoursesLink(c1);
		l3.setCoursesLink(c2);
		
		linkRepo.save(l1);
		linkRepo.save(l2);
		linkRepo.save(l3);
	}


}
