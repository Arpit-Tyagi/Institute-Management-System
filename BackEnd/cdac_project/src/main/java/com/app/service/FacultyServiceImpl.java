package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.UserHandlingException;
import com.app.pojos.Faculty;
import com.app.repository.FacultyRepository;
import com.app.repository.ModulesRepository;

@Service
@Transactional
public class FacultyServiceImpl implements IFacultyService {

	@Autowired
	ModulesRepository modRepo;
	
	@Autowired
	FacultyRepository facRepo;
	
	
	@Override
	public Faculty addFaculty(Faculty fac, String name) {
		fac.setFacModule(modRepo.findByName(name).orElseThrow(() -> new UserHandlingException("Module Not Found! Faculty Details Not Added !!!!")));
		return facRepo.save(fac);
	}


	@Override
	public Faculty getFacultyById(Integer id) {
		
		return facRepo.findById(id).orElseThrow(() -> new UserHandlingException("Faculty Details Not Found!  Please Enter a valid Faculty Id !!!!"));
	}


	@Override
	public List<Faculty> getFacultyListByCourse(String name) {
		
		return facRepo.findByFacModuleModCourseName(name);
	}


	@Override
	public Faculty editFaculty(Faculty fac) {
		return facRepo.save(fac);
	}
	
	@Override
	public String deleteFacultyDetails(Integer facId) {
		System.out.println("In fac service delete");
		
		facRepo.deleteById(facId);

		return "Faculty details deleted ";
	}
	
	
	

}
