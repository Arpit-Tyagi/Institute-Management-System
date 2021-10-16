import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import './EditStudent.css';



const EditStudent = () => {

    const history = useHistory();
    const[student, setStudent] = useState();


const handleChange = e => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
};


const updateStudent = () =>  {
    ApiService.addUser(student)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Student Details successfully Updated ");
                window.localStorage.removeItem("userId");
                history.push('/adminPortal/StudentDetails'); 
            }).catch( err=>{
                alert(err.response.data.message);
            })
};




const editForm = ()=>{
  if(!student){
    ApiService.adminStudentById(window.localStorage.getItem("userId")).then(resp => {
        console.log(resp.data);
        setStudent(resp.data);
        console.log(student);
  })
};

    if(student ){
      
    return(
        <div className="Hello-container content-right" >
        <form  className="Editform">
        
            <div className="Edit-form-item"> 
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Full Name</label>
          <input
            className='Edit-form-input'
            type='text'
            name='studentsName'
            placeholder='Enter your username'
            value={student.studentsName}
            onChange={handleChange}
          />
          
        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Password</label>
          <input
            className='Edit-form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={student.password}
            onChange={handleChange}
          />

        </div>
        </div>
        <div className='Edit-form-item'>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>10th Percentage</label>
          <input
            className='Edit-form-input'
            type='text'
            name='hscMarks'
            placeholder='Enter Your 10th %'
            value={student.hscMarks}
            onChange={handleChange}
          />
        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>12th Percentage</label>
          <input
            className='Edit-form-input'
            type='text'
            name='sscMarks'
            placeholder='Enter Your 12th %'
            value={student.sscMarks}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='Edit-form-item'>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Graduation Percentage</label>
          <input
            className='Edit-form-input'
            type='text'
            name='gradMarks'
            placeholder='Enter Your Graduation %'
            value={student.gradMarks}
            onChange={handleChange}
          />

        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Contact No.</label>
          <input
            className='Edit-form-input'
            type='text'
            name='contactNum'
            placeholder='Enter Your Contact Number'
            value={student.contactNum}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className='Edit-form-item'>
        
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Date Of Birth</label>
          <input
            className='Edit-form-input'
            type='date'
            name='dateOfBirth'
            min="1980-01-01" max="2005-12-31"
            placeholder='Enter Your Contact Number'
            value={student.dateOfBirth}
            onChange={handleChange}
          />
          
        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Address</label>
          <textarea
            className='Edit-form-input'
            type='text'
            name='stdAddress'
            placeholder='Enter Your Address'
            value={student.stdAddress}
            onChange={handleChange}
          />
          
        </div>
        </div>
        <button className='Edit-form-input-btn' type='button' onClick={updateStudent}>
          Submit
        </button>
        <br></br><br></br>
        
      </form>
    </div>
    
         );
        }

    }



    return(
        <div> 
             <>{editForm()}</>

        </div>
    );

}

export default EditStudent;