package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.Announcements;
import com.app.pojos.ClassLink;
import com.app.pojos.Courses;
import com.app.pojos.Faculty;
import com.app.pojos.Marks;
import com.app.pojos.Modules;
import com.app.service.IAdminService;
import com.app.service.IAnnouncementService;
import com.app.service.IClassLinkService;
import com.app.service.ICourseService;
import com.app.service.IFacultyService;
import com.app.service.IMarksService;
import com.app.service.IModuleService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	@Autowired
	private IModuleService modServ;
	
	@Autowired
	private IMarksService marksService;
	
	@Autowired
	private IAnnouncementService annoServ;
	
	@Autowired
	private ICourseService courService;
	
	@Autowired
	private IFacultyService facService;
	
	@Autowired
	private IClassLinkService classService;
	
	@PostMapping
	public ResponseEntity<?> loginValidation(@RequestBody LoginRequest request){
		
	return new ResponseEntity<>(adminService.adminLogin(request.getEmail(), request.getPassword()), HttpStatus.OK);
	
	}
	
	@GetMapping("/list")
	public List<Courses> getCoursesList(){
		System.out.println("In the getCoursesList");
		return courService.getAllCourses();
	}
	@GetMapping("/moduleList")
	public List<Modules> getAllModule(){
		
	return modServ.getModuleList();
	}
	@GetMapping("/moduleListByCourse/{courseName}")
	public List<Modules> getModules(@PathVariable String courseName){
		
	return modServ.getModuleByCourse(courseName);
	}
	
	@PostMapping("/{course}")
	public Modules addModule(@RequestBody Modules mod, @PathVariable String course){
		
	return modServ.addModule(mod, course);
	
	}
	@PostMapping("/addFaculty/{modName}")
	public Faculty addNewFaculty(@RequestBody Faculty fac, @PathVariable String modName) {
		return facService.addFaculty(fac, modName);
	}
	
	@GetMapping("/getFacultyById/{id}")
	public Faculty getFaculty( @PathVariable Integer id) {
		return facService.getFacultyById(id);
	}
	@GetMapping("/getFacultyListByCourse/{name}")
	public List<Faculty> getFacultyList( @PathVariable String name) {
		return facService.getFacultyListByCourse(name);
	}
	
	@PostMapping("/updateFaculty")
	public Faculty updateFaculty(@RequestBody Faculty fac) {
		return facService.editFaculty(fac);
	}
	
	
	@PostMapping("/addAnnouncement/{couNane}")
	public Announcements addAnnouncement(@RequestBody Announcements anoun, @PathVariable String couNane){
		System.out.println("In AdminCont");
		return annoServ.addAnnouncement(anoun, couNane);
	}
	
	@GetMapping("/getAnnou/{name}")
	public List<Announcements> getByCourseName(@PathVariable String name){
		return annoServ.getAnnouncementsByCourse(name);
	}
	
	@DeleteMapping("/anncDelete/{anncId}")
	public ResponseEntity<?> deleteAnnouncement(@PathVariable Integer anncId)
	{
		return new ResponseEntity<>(annoServ.deleteAnnouncement(anncId), HttpStatus.OK);
	}
	@PostMapping("/addClassLink/{name}")
	public ClassLink addClassLink(@RequestBody ClassLink  link, @PathVariable String name){
		return classService.addClassLink(link, name);
	}
	
	@GetMapping("/getClassLink/{name}")
	public List<ClassLink> getClassLink(@PathVariable String name){
		return classService.getClassLinkByCourse(name);
	}
	
	@PostMapping("/editClassLink")
	public ClassLink addClassLink(@RequestBody ClassLink  link){
		return classService.editLink(link);
	}
	
			@DeleteMapping("/linkDelete/{linkId}")
			public ResponseEntity<?> deleteClassLink(@PathVariable Integer linkId)
			{
				return new ResponseEntity<>(classService.deleteClassLink(linkId), HttpStatus.OK);
			}
	
		
			@PostMapping("/editMarks/{moduleName}/{studentId}")
			public ResponseEntity<?> updateMarks(@RequestBody Marks marks, @PathVariable String moduleName, @PathVariable Integer studentId)
			{
				return new ResponseEntity<>(marksService.updateMarks(marks, moduleName, studentId), HttpStatus.OK);
			}
			
			@GetMapping("/getMarks/{studentId}")
			public List<Marks> getMarks(@PathVariable Integer studentId)
			{
				return marksService.getMarksByStudentId(studentId);
			}
		
		

}
