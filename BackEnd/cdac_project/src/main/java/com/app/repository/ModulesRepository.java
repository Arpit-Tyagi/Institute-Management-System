package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Modules;

public interface ModulesRepository extends JpaRepository<Modules, Integer> {
	Optional<Modules> findByName(String name);
	List<Modules> findByModCourseName(String name);
	Optional<Modules> findById(Integer id);
}
