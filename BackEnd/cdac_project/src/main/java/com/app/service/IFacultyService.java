package com.app.service;

import java.util.List;

import com.app.pojos.Faculty;

public interface IFacultyService {
	
	Faculty addFaculty(Faculty fac, String name);
	Faculty getFacultyById(Integer id);
	List<Faculty> getFacultyListByCourse(String name);
	 Faculty editFaculty(Faculty fac);
	// ^^^^^^^^ Delete Faculty Details ^^^^^^^^^^
     String deleteFacultyDetails(Integer facId);
		
}
