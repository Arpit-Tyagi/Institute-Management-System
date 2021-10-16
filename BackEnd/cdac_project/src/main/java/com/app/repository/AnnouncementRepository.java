package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Announcements;

public interface AnnouncementRepository extends JpaRepository<Announcements, Integer> {

	List<Announcements> findByCoursesAnouName(String name);
	
}
