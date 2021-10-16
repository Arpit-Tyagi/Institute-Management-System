package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="admin_record")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Admin extends BaseEntity {
	
	@Column(length = 20, nullable = false)
	private String name;
	@Column(length = 20, unique = true)
	private String email;
	@Column(length = 20, nullable = false)
	private String password;
	
	
}
