package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.ClassLink;
import com.app.pojos.Courses;
import com.app.repository.ClassLinkRepository;
import com.app.repository.CourseRepository;

@Service
@Transactional
public class ClassLinkServiceImpl implements IClassLinkService {

	@Autowired
	private ClassLinkRepository classRepo;
	@Autowired
	private CourseRepository courRepo;

	
	@Override
	public ClassLink addClassLink(ClassLink link, String courName) {
		Courses cour = courRepo.findByName(courName).orElseThrow(() -> new UserHandlingException("Course Not Found! Class Link Not Added !!!!"));
		link.setCoursesLink(cour);
		return classRepo.save(link);
	}

	@Override
	public List<ClassLink> getClassLinkByCourse(String courName) {
		return  classRepo.findByCoursesLinkName(courName);
	}

	@Override
	public ClassLink editLink(ClassLink newLink) {
		return classRepo.save(newLink);
	}
	

		@Override
		public String deleteClassLink(Integer linkId) {
			
			classRepo.deleteById(linkId);
			
			return "Class Link Deleted";
		}
	
	

}
