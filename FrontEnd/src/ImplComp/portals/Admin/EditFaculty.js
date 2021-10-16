import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import {Redirect} from 'react-router-dom';
import './EditFaculty.css';



const EditFaculty = () => {

    const history = useHistory();
    const[faculty, setFaculty] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
    if(!adminDetail){
        return( <Redirect to='/AdminLogin'/>
        );
    }



const handleChange = e => {
    const { name, value } = e.target;
    setFaculty({
      ...faculty,
      [name]: value
    });
};


const updateFaculty = () =>  {
    ApiService.adminEditFaculty(faculty)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Faculty Details successfully Updated ");
                window.localStorage.removeItem("facultyId");
                history.push('/adminPortal/FacultyDetails'); 
            }).catch( err=>{
                alert("Editing Details Failed");
            })
};




const editForm = ()=>{
  if(!faculty){
    ApiService.adminFacultyById(window.localStorage.getItem("facultyId")).then(resp => {
        console.log(resp.data);
        setFaculty(resp.data);
        console.log(faculty);
  })
};

    if(faculty ){
      
    return(
        <div className="EditFaculty-container EditFaculty-content-right" >
        <form  className="Editform">
        
            <div className="EditFaculty-form-item"> 
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Full Name</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='name'
            placeholder='Enter your username'
            value={faculty.name}
            onChange={handleChange}
          />
          
        </div>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Password</label>
          <input
            className='EditFaculty-form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={faculty.password}
            onChange={handleChange}
          />

        </div>
        </div>
        <div className='EditFaculty-form-item'>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Contact Number</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='contactNo'
            placeholder='Enter contact number'
            value={faculty.contactNo}
            onChange={handleChange}
          />
        </div>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Address</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='address'
            placeholder='Enter Your Address'
            value={faculty.address}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='EditFaculty-form-item'>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Salary</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='salary'
            placeholder='Enter Your Graduation %'
            value={faculty.salary}
            onChange={handleChange}
          />

        </div>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Module</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            placeholder='Enter Your Graduation %'
            value={faculty.facModule.name}
            readonly
          />

        </div>
        </div>
        <button className='EditFaculty-form-input-btn'type='button' onClick={updateFaculty}>
          Submit
        </button>
        <br></br><br></br>
        
      </form>
    </div>
    
         );
        }

        if(!faculty){
            return(
                <h1>faculty Not Found</h1>
            );
        }

    }



    return(
        <div> 
             <>{editForm()}</>

        </div>
    );

}

export default EditFaculty;