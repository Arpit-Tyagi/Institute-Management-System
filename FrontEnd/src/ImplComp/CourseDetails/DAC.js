import React from 'react';
import './CourseDetails.css'; 
import { useHistory } from 'react-router-dom';






function DAC (){
	const history = useHistory();
	const HandleClick= () =>{
        
        history.push("/Form");

    }

    
		

        return(

          <div className='DAC'> 

          <div class="cdheader">

          <h1>Diploma in Advanced Computing</h1>
          <h4> Duration - 6 Months  </h4>
          </div>


          <div className="cdcontainer">
		  <div className='row'>
		  <div className='col-md-6 col-lg-4'>
		
		<div className="dealwrapper purple">
			
				<div class="list-group">
					<a href="#" class="list-group-item">
						<h4 class="cdheading">Concepts of Programming </h4>
						<p class="text">Getting Started, Variables & Methods, Operators, Conditional and Looping Statements, Objects, Arrays, Introduction to OS, Introduction to Linux, Shell Programming, Processes, Signals, Threads, Memory, management, Virtual Memory, Deadlock, Inter process communication</p>
					</a>
					
					<a href="#" class="list-group-item active">
						<h4 class="cdheading"> Java      </h4>
						<p class="text">Features of Java, JVM Architecture, Primitive data types, Object Oriented Programming Concepts, Interfaces, Arrays, Garbage collection, Wrapper Classes and String Class, Exception Handling, java.io & java.nio Package, Object Class & java.util Package, Collections, MultiThreading, Synchronization.</p>
					</a>
					
					<a href="#" class="list-group-item">
						<h4 class="cdheading">Advanced Data Structures  </h4>
						<p class="text"> Problem Solving & Computational Thinking, Algorithms & Data, Structures, Basic Data Structures, Linked List Data Structures, Recursion, Trees, Searching, Sorting Algorithms, Hash Functions and Hash Tables, Graph & Applications, Algorithm Designs, Analysis of different type of Algorithms.</p>
					</a>
				</div>
			​
		</div>
		</div>

		<div className='col-md-6 col-lg-4'>
		
		
			<div className="dealwrapper red">
			
				<div class="list-group">
					<a href="#" class="list-group-item">
						<h4 class="cdheading">Database Management System  </h4>
						<p class="text">DBMS, MySQL, Database Design, Entity-Relationship Diagram, Normalization, MySQL Data Types, Database Constraints, SQL Functions & Operators, Joins, Subquery, Views, Indexes, ACID Properties, Stored Procedures, Cursors, Triggers, Introduction to NoSQL, MongoDB, Introduction to Big Data </p>
					</a>
					
					<a href="#" class="list-group-item active">
						<h4 class="cdheading">Web Based Technologies </h4>
						<p class="text">Architecture of Web, HTML, Cascading Style Sheets (CSS), JavaScript, jQuery, JSON & Ajax, Node.js, Node.js Asynchronous Programming, Node.js Modules, Introduction to Express, React, Introduction to React-Redux, Responsive Web Design & Web Security</p>
					</a>
					
					<a href="#" class="list-group-item">
						<h4 class="cdheading">J2EE </h4>
						<p class="text"> J2EE Overview, Servlets, JSP, Sessions, JDBC & Transaction Management, Hibernate Framework, Spring Framework, Spring Boot, Spring Data Module, Spring AOP, Building REST Services with Spring, Testing in Spring, Securing Web Application with Spring Security</p>
					</a>
				</div>
			​
		</div>
		</div>

		<div className='col-md-6 col-lg-4'>
			<div className="dealwrapper blue">
			
				<div class="list-group">
					<a href="#" class="list-group-item">
						<h4 class="cdheading">Microsoft.Net Technologies </h4>
						<p class="text">Asp.Net MVC, MVC State Management, MVC Module, Data Management with ADO.NET, Understanding Routing & Request Life Cycle, Layouts, Bundle, Minification, MVC Security, Entity Framework, Understanding ASP.Net MVC Core, Windows Communication Foundation, Web APIs</p>
					</a>
					
					<a href="#" class="list-group-item active">
						<h4 class="cdheading">Software Engineering  </h4>
						<p class="text">Git, Software Engineering, Software Development Life Cycle,Containerization, Docker, YAML, Kubernetes, Software testing, Quality Assurance vs Quality Control vs Testing, STLC and V Model, Manual testing, Automation testing, Introduction to Cloud, Cloud architecture</p>
					</a>
					
					<a href="#" class="list-group-item">
						<h4 class="cdheading">Effective Communication </h4>
						<p class="text"> The Art of Communication, Personality Development, English Grammar, Correct Usage of English, Common Mistakes in English Communication, Listening Skills, Reading Skills, Writing Skills, Public Speaking, Presentation Skills, Group Discussions, Personal Interviews.</p>
					</a>
				</div>
				
			​
		</div>
	
 </div>
 
 
	</div>
 

	<div id = "cdbtn">

	<button type="submit" class="cdregisterbtn" onClick={HandleClick}>Register Now</button>
	 
	</div>

	​
</div>​
    </div>
      
        );
    }


export default DAC;