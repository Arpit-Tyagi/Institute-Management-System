package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="modules")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Modules extends BaseEntity  {
	
	@Column(length=50, unique= true)
	private String name;
	
	@Column(length=30)
	private String time;
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="course_id")
	@JsonIgnoreProperties({"couModules", "students", "ancmentList" ,"classLink"})
	private Courses modCourse;

	@OneToOne(mappedBy = "facModule", cascade = CascadeType.ALL)
	@JsonIgnoreProperties({"facModule"})
	private Faculty faculty;
	
	// ^^^^^^^^^^^ Extra for marks association ^^^^^^^^^^^^^
		@OneToOne(fetch = FetchType.EAGER)
		@JsonIgnoreProperties({"module", "student"})
		private Marks marks;
	
	public Modules(String name, String time) {
		super();
		this.name = name;
		this.time = time;
	}
	
	

}
