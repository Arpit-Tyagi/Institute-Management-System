package com.app.pojos;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="course_announcements")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Announcements extends BaseEntity  {
	
	@Column
	private String title;
	
	@Column
	private String description;
	
	@Column
	private Date date;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="course_id")
	@JsonIgnoreProperties({"students","couModules", "ancmentList", "classLink"})
	private Courses coursesAnou;

	public Announcements(String title, String description, Date date) {
		super();
		this.title = title;
		this.description = description;
		this.date = date;
	}

}
