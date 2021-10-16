import {React} from 'react';
import { useState } from 'react';
import {Redirect} from "react-router-dom";
import ApiService from '../../services/ApiService';
import './course.css'


const Course  = ()=> {
    const [modules, setModules] = useState();
const studentDetails = JSON.parse(localStorage.getItem("studentLogin"));
   
if(!studentDetails){
    return( <Redirect to='/StudentLogin'/>
    );
}


const list=()=>{

    if(!modules){
        
            ApiService.adminGetModuleByCourse(studentDetails.course.name).then(resp => {
                console.log(resp.data);//actual response data sent by back end
                setModules(resp.data);
            })
        
    }

    if(modules){
    return(
        <table className="table notice-table  table-striped text-center" >
    <thead>
        <tr>
         <th className="hidden">Id</th>
         <th>Module Name</th>
         <th>Time</th>
         <th>Faculty Name</th>
         <th>Faculty Contact</th>
        </tr>
        </thead>
        <tbody>
        {
           modules.map(
       user =>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                    <td>{user.time}</td>
                            <td>{user.faculty.name}</td>
                               <td>{user.faculty.contactNo}</td>
                               </tr>
           )}
</tbody>
</table>
    );
           }
}


return(
<div className="course-container course-content-right">
<h3 style={{marginTop:"15px",marginBottom:"15px" ,textAlign:"center"}}>Student's Course Details</h3>
{list()}  
</div>

);

}


export default Course;