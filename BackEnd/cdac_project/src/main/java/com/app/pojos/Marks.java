package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="marks")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Marks extends BaseEntity  {
	// done some changes in Modules and Students Pojos 
	// Please Check :)
	
	@Column(name = "obtained_marks")
	private double obtainedMarks;
	
	@Column(name = "total_marks")
	private double totalMarks;
	
	@Column
	private char grade;
	
	@Column
	private String status;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "module_id")
	@JsonIgnoreProperties({"modCourse", "faculty", "marks"})
	private Modules module;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "student_id")
	@JsonIgnoreProperties({"course", "marks"})
	private Student student;
	
	public Marks(double obtainedMarks, double totalMarks, char grade, String status) {
		super();
		this.obtainedMarks = obtainedMarks;
		this.totalMarks = totalMarks;
		this.grade = grade;
		this.status = status;
	}
}

