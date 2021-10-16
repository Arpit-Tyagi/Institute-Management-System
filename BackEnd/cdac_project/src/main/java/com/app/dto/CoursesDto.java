package com.app.dto;

import java.util.List;

import com.app.pojos.Courses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CoursesDto {
	private List<Courses> courList;
	

}
