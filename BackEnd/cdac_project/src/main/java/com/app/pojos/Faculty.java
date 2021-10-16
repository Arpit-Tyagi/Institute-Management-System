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
import lombok.ToString;

@Entity
@Table(name="faculty_record")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Faculty extends BaseEntity {
	
	@Column(length=20)
	private String name;
	
	@Column(length=50, unique = true)
	private String email;
	
	@Column(length=20)
	private String password;
	
	@Column(name="contact_no", unique = true)
	private Long contactNo;
	
	@Column
	private String address;
	
	@Column
	private float salary;
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "module_id")
	@JsonIgnoreProperties("faculty")
	private Modules facModule;

	public Faculty(String name, String email, String password, Long contactNo, String address, float salary) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
		this.address = address;
		this.salary = salary;
	}
	
	

}
