import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import ApiService from "../services/ApiService";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function submitForm(student , course) {
    console.log(student);
    console.log(course);
    ApiService.registerStudent(student, course)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                setIsSubmitted(true);
            }).catch( err=>{
               console.error(err);
               // console.error("in err ",err.response.data);
                //err.response.data => DTO on the server side : ErrorResponse
               // alert(err.response.data.message);
            })
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
