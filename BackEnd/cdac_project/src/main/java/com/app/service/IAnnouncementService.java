package com.app.service;

import java.util.List;

import com.app.pojos.Announcements;

public interface IAnnouncementService {

	Announcements addAnnouncement(Announcements announ, String courName);
	
	List<Announcements> getAnnouncementsByCourse(String courName);
	String announcementDeleteById(Integer id);
	String deleteAnnouncement(Integer annId);


}
