package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Marks;
import com.app.pojos.Modules;
import com.app.pojos.Student;
import com.app.repository.MarksRepsitory;

@Service
@Transactional
public class MarksServiceImpl implements IMarksService {
	
	@Autowired
	private IModuleService modService;
	
	@Autowired
	private IStudentService studService;
	
	@Autowired
	private MarksRepsitory marksRepo;
	
	@Override
	public Marks updateMarks(Marks marks, String moduleName, Integer studentId) {
		
		Student stud = studService.getById(studentId);   // added extra method in student service to search 
		                                                                                      // student details by student id
		Modules module = modService.getModuleByName(moduleName);
		
		marks.setModule(module);
		marks.setStudent(stud);
		
		return marksRepo.save(marks);
	}

	@Override
	public List<Marks> getMarksByStudentId(Integer id) {
		
		return marksRepo.findByStudentId(id);
	}
	
}
