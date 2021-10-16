export default function validateInfo(student) {
  let errors = {};

  if (!student.studentsName.trim()) {
    errors.studentsName = 'studentsName required';
  }
  // else if (!/^[A-Za-z]+/.test(student.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!student.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(student.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!student.password) {
    errors.password = 'Password is required';
  } else if (student.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!student.hscMarks) {
    errors.hscMarks = '10th % is required';
  } else if (student.hscMarks < 60) {
    errors.hscMarks = '10th % should be greater than 60';
  }
  if (!student.sscMarks) {
    errors.sscMarks = '12th % is required';
  } else if (student.sscMarks < 55) {
    errors.sscMarks = '12th % should be greater than 55';
  }
  if (!student.gradMarks) {
    errors.gradMarks = 'gradMarks % is required';
  } else if (student.gradMarks < 55) {
    errors.gradMarks = 'gradMarks % should be greater than 55';
  }

  return errors;
}
