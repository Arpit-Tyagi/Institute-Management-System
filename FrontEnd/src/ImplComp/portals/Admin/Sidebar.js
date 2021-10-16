import {React, useState} from 'react';
import './Sidebar.css';


const Sidebar = () => {


  const logout = () =>{
    localStorage.removeItem("admin")
};




return(
<div style={{background:" rgb(189, 137, 173)"}}>
    <div class="sidebar ">
  <a  href="/adminPortal/StudentDetails">Student Details</a>
  <a href="/adminPortal/FacultyDetails"> Faculty</a>
  <a href="/adminPortal/AnnouncementDetails">Announcement </a>
  <a href="/adminPortal/ClassLinkDetails"> Class Link</a>

  <a href="/adminPortal/UploadMarks"> Upload Marks </a>
  
  <a href="#" onClick={logout} > Log Out</a>
</div>
</div>
);

}

export default Sidebar;