package com.app.pojos;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="students_Record")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Student extends BaseEntity {
	@Column(length=50)
	private String studentsName;
	@Column(length=50, unique= true)
	private String email;
	@Column(length=20, nullable= false)
	private String password;
	private double hscMarks;
	private double sscMarks;
	private double gradMarks;
	private Long contactNum;
	private String stdAddress;
	private double regAmount;
	private Date dateOfBirth;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="course_id")
	@JsonIgnoreProperties({"students", "couModules", "ancmentList", "classLink"})
	private Courses course;
	
	@OneToMany(fetch = FetchType.EAGER)
	@JsonIgnoreProperties({"module", "student"})
	private List<Marks> marks = new ArrayList<>();

	public Student(String studentsName, String email, String password, double hscMarks, double sscMarks,
			double gradMarks, Long contactNum, String stdAddress, double regAmount, Date dateOfBirth) {
		super();
		this.studentsName = studentsName;
		this.email = email;
		this.password = password;
		this.hscMarks = hscMarks;
		this.sscMarks = sscMarks;
		this.gradMarks = gradMarks;
		this.contactNum = contactNum;
		this.stdAddress = stdAddress;
		this.regAmount = regAmount;
		this.dateOfBirth = dateOfBirth;
	}

	
	
	
}
