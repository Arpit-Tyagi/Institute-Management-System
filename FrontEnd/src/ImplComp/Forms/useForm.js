import { useState, useEffect } from 'react';

const useForm = (callback, validate,course) => {
  const [student, setStudent] = useState({
    studentsName: '',
    email: '',
    password: '',
    hscMarks: '',
    sscMarks: '',
    gradMarks: '',
    contactNum: '',
    regAmount: '',
    dateOfBirth: '',
    stdAddress: ""

  });
 
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(student));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback(student, course);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, student, errors};
};

export default useForm;
