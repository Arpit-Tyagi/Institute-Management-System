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
@Table(name="class_links")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ClassLink extends BaseEntity  {
	
	@Column
	private String title;
	@Column
	private String modName;
	
	@Column
	private String classlink;
	
	@Column
	private Date date;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="course_id")
	@JsonIgnoreProperties({"students","couModules", "ancmentList", "classLink"})
	private Courses coursesLink;

	public ClassLink(String title, String modName, String classlink, Date date) {
		super();
		this.title = title;
		this.modName = modName;
		this.classlink = classlink;
		this.date = date;
	}

	


	
}
