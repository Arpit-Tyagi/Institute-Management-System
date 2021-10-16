package com.app.repository;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.app.pojos.Announcements;
import com.app.pojos.Courses;

@SpringBootTest
class AnnouncementRepositoryTest {
	
	@Autowired
	private AnnouncementRepository annRepo;
	
	@Autowired
	private CourseRepository courseRepo;

	@Test
	void testAddAnnouncements() {
		
		List<Announcements> annou = Arrays.asList(
//				new Announcements("Re-Exam ", "There will be a Re-Exam scheduled for Core Java on 5th October.", Date.valueOf("2021-09-24")),
			new Announcements("Exam Notice", "Lab Exam for Database Technologies will be held on 1st October.", Date.valueOf("2021-09-20"))
//			new Announcements("Marks declared", "Marks for Data Analytics Test are uploaded.", Date.valueOf("2021-09-18")),
  //			new Announcements("Next Test", "There will be a surprise test scheduled for Core Java on 5th October.", Date.valueOf("2021-09-24")),
		//		new Announcements("Guest Lecture", "Guest Lecture for Database Technologies will be held on 1st October.", Date.valueOf("2021-09-20"))
		);
		
		annRepo.saveAll(annou);
		
	}
	
	@Test
	void linkAnnCourse()
	{
		Courses c1 = courseRepo.findById(1).get();
		Courses c2 = courseRepo.findById(2).get();
		
		Announcements a1 = annRepo.findById(14).get();
		Announcements a2 = annRepo.findById(15).get();
		Announcements a3 = annRepo.findById(16).get();
		
		a1.setCoursesAnou(c2);
		a2.setCoursesAnou(c2);
		a3.setCoursesAnou(c2);
		
		annRepo.save(a1);
		annRepo.save(a2);
		annRepo.save(a3);
	}

}
