package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ClassLink;

public interface ClassLinkRepository extends JpaRepository<ClassLink , Integer> {

	List<ClassLink> findByCoursesLinkName(String name);

}
