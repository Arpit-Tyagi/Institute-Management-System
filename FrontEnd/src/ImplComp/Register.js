import React from 'react';
import {Redirect} from 'react-router-dom'
 
import './Register.css'
import { useEffect, useState } from 'react'


const Register =() => {
 
    const [student, setStudent] = useState({ name: "" , email: "",  password: "", regDate: "" });
    const [message, setMessage] = useState("Hello");
    let name, value;
    const handleChange = (e) =>{
        name= e.target.name;
        value = e.target.value;

        setStudent({ ... student, [name]:value})

    }


    const handleClick=(e)=>{
        e.preventDefault()
        console.log(student)

    }

        return(
            <div>

  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    
    <label for="name"><b>Name</b></label>
    <input type="text"  placeholder="Full Name" value={student.name}  name="name" onChange={handleChange} required />

    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" value={student.email} name="email" onChange={handleChange} required />
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" value={student.password} name="password" onChange={handleChange} required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password"  required />

    <label for="date"><b>Registeration Date</b></label><br></br><br></br>
    <input type="date" value={student.regDate} onChange={handleChange} name="regDate" required />

    <h1>{student.name}</h1>
    <h1>{student.email}</h1>
    <h1>{student.password}</h1>
    <h1>{student.regDate}</h1>
    
    <br></br><br></br>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <br></br><br></br>

    <button type="submit" class="registerbtn" onClick={handleClick} >Register</button>

        <h1>{message}</h1>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</div>

        );
    }

export default Register;