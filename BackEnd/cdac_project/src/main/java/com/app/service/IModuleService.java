package com.app.service;

import java.util.List;

import com.app.pojos.Modules;

public interface IModuleService {
	
	Modules addModule(Modules mod, String course);
	List<Modules> getModuleList();
	List<Modules> getModuleByCourse(String name);
	Modules getModuleByName(String moduleName);

}
