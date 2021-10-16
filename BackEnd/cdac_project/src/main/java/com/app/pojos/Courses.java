package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="course_record")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Courses extends BaseEntity  {
	
	@Column(length=25, unique= true, nullable=false)
	private String name;
	
	@Column(nullable=false)
	private float fees;
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
	@JsonIgnore
	@JsonIgnoreProperties({"course"})
	private List<Student> students = new ArrayList<>();
	
	@OneToMany(mappedBy = "modCourse", cascade = CascadeType.ALL)
	@JsonIgnore
	@JsonIgnoreProperties({"modCourse"})
	private List<Modules> couModules = new ArrayList<>();
	
	@OneToMany(mappedBy = "coursesAnou", cascade = CascadeType.ALL)
	@JsonIgnore
	@JsonIgnoreProperties({"coursesAnou"})
	private List<Announcements> ancmentList = new ArrayList<>();
	
	@OneToMany(mappedBy = "coursesLink", cascade = CascadeType.ALL)
	@JsonIgnore
	@JsonIgnoreProperties({"coursesLink"})
	private List<ClassLink> classLink = new ArrayList<>();

	public Courses(String name, float fees) {
		super();
		this.name = name;
		this.fees = fees;
	}



}
