package com.app.service;

import java.util.List;

import com.app.pojos.Marks;

public interface IMarksService {
	
	public Marks updateMarks(Marks marks, String moduleName, Integer studentId);
	
	public List<Marks> getMarksByStudentId(Integer id);

}
