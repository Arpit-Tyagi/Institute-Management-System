package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.Announcements;
import com.app.pojos.Courses;
import com.app.repository.AnnouncementRepository;
import com.app.repository.CourseRepository;

@Service
@Transactional
public class AnnouncementServiceImpl implements IAnnouncementService {

	@Autowired
	private AnnouncementRepository annRepo;
	
	@Autowired
	private CourseRepository courRepo;
	
	
	@Override
	public Announcements addAnnouncement(Announcements announ, String courName) {
		Courses cour = courRepo.findByName(courName).orElseThrow(() -> new UserHandlingException("Course Not Found!! Adding Announcement Failed!!!!"));
		announ.setCoursesAnou(cour);
		return annRepo.save(announ);
	}


	@Override
	public List<Announcements> getAnnouncementsByCourse(String courName) {
		
		return annRepo.findByCoursesAnouName(courName);
	}


	@Override
	public String announcementDeleteById(Integer id) {
		annRepo.deleteById(id);
		return "Deleted Successfully";
	}
	
		@Override
		public String deleteAnnouncement(Integer annId) {
			annRepo.deleteById(annId);
			return "Announcement Deleted";
		}
	

}
