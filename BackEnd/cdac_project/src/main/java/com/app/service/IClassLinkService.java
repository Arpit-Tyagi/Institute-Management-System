package com.app.service;

import java.util.List;

import com.app.pojos.ClassLink;

public interface IClassLinkService {

	ClassLink addClassLink(ClassLink announ, String courName);
	
	List<ClassLink> getClassLinkByCourse(String courName);
	
	ClassLink editLink(ClassLink newLink);
	
	// ^^^^^^^^^^^^^^^^^^ Delete Class Link ^^^^^^^^^^^^^^^^^^^^^^
		String deleteClassLink(Integer linkId);
}
