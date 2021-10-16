import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import ApiService from '../services/ApiService';
import { useState } from 'react';

const FormSignup = ({ submitForm }) => {

  const [course, setCourse] = useState();
  const [courseDetails, setCourseDetails] = useState();
  const { handleChange, handleSubmit, student, errors } = useForm(
    submitForm,
    validate,
    course
  );

  const courseList = () => {
    if(!courseDetails){
      ApiService.adminCourseList().then(resp => {
        setCourseDetails(resp.data); 
      })
  }
      if(courseDetails){
      return( 
        courseDetails.map(item  => 
              <option value={item.name}>{item.name}</option>
          )

      )
          }

  };



  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='studentsName'
            placeholder='Enter your username'
            value={student.studentsName}
            onChange={handleChange}
          />
          {errors.studentsName && <p>{errors.studentsName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={student.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={student.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>10th Percentage</label>
          <input
            className='form-input'
            type='text'
            name='hscMarks'
            placeholder='Enter Your 10th %'
            value={student.hscMarks}
            onChange={handleChange}
          />
          {errors.hscMarks && <p>{errors.hscMarks}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>12th Percentage</label>
          <input
            className='form-input'
            type='text'
            name='sscMarks'
            placeholder='Enter Your 12th %'
            value={student.sscMarks}
            onChange={handleChange}
          />
          {errors.sscMarks && <p>{errors.sscMarks}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Graduation Percentage</label>
          <input
            className='form-input'
            type='text'
            name='gradMarks'
            placeholder='Enter Your Graduation %'
            value={student.gradMarks}
            onChange={handleChange}
          />
          {errors.gradMarks && <p>{errors.gradMarks}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contact No.</label>
          <input
            className='form-input'
            type='text'
            name='contactNum'
            placeholder='Enter Your Contact Number'
            value={student.contactNum}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Select Course</label>
          <select className="  AddAnnu-form-input"  id = "dropdown" value={course} onChange={e => setCourse(e.target.value)}>
           <option>Select Course</option>{courseList()}
           </select>
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Registration Amount</label>
          <input
            className='form-input'
            type='text'
            name='regAmount'
            placeholder='Enter Your Contact Number'
            value={student.regAmount}
            onChange={handleChange}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Date Of Birth</label>
          <input
            className='form-input'
            type='date'
            name='dateOfBirth'
            min="1980-01-01" max="2005-12-31"
            placeholder='Enter Your Contact Number'
            value={student.dateOfBirth}
            onChange={handleChange}
          />
          
        </div>

        <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <textarea
            className='form-input'
            type='text'
            name='stdAddress'
            placeholder='Enter Your Address'
            value={student.stdAddress}
            onChange={handleChange}
          />
          
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href="/StudentLogin">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
