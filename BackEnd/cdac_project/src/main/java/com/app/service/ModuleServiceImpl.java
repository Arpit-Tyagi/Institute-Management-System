package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Courses;
import com.app.pojos.Modules;
import com.app.repository.ModulesRepository;

@Service
@Transactional
public class ModuleServiceImpl implements IModuleService {

	@Autowired
	private ModulesRepository modRepo;
	
	@Autowired
	private ICourseService courseService;
	
	@Override
	public Modules addModule(Modules mod, String course) {
		Courses cou = courseService.getCourse(course);
		mod.setModCourse(cou);
		return modRepo.save(mod);
	}

	@Override
	public List<Modules> getModuleList() {
		
		return modRepo.findAll();
	}

	@Override
	public List<Modules> getModuleByCourse(String name) {
		
		return modRepo.findByModCourseName(name);
	}
	
	@Override
	public Modules getModuleByName(String moduleName) {
		
		return modRepo.findByName(moduleName).orElseThrow(() -> new RuntimeException("Module Not Found"));
	}
	

}
