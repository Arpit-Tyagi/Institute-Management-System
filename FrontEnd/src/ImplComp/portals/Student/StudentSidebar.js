import {React} from 'react';
import './StudentSidebar.css';
import { Redirect } from 'react-router-dom';

const StudentSidebar = () => {

  const logout = () =>{
    localStorage.removeItem("studentLogin")
}


return(
<div  style={{background:" rgb(189, 137, 173)"}}>
    <div class="studentsidebar">
  <a href="/studentPortal/Course">Course</a>
  <a href="/studentPortal/ViewMarks"> Marks</a>
  <a href="/studentPortal/Notice">Notice</a>
  <a href="/studentPortal/ClassLink">Links</a>
  <a href="#" onClick={logout}>Log Out</a>
</div>

</div>
);



}

export default StudentSidebar;