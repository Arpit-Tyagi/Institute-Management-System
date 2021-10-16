import {React} from 'react';
import { useState, useEffect } from 'react';
import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';
import ApiService from '../../services/ApiService';

const FacultyList  = () => {

    const history = useHistory();
    const[facultyList, setFacultyList] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
    if(!adminDetail){
        return( <Redirect to='/AdminLogin'/>
        );
    };


const editFaculty = (id) =>  {
    window.localStorage.setItem("facultyId", id);
    window.localStorage.removeItem("courseName");
    history.push('/adminPortal/EditFaculty');
};



const FacultyDetails = () => {

    if(!facultyList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminFacultyById(window.localStorage.getItem("Id")).then(resp => {
            console.log(resp.data);
            setFacultyList(resp.data);
            window.localStorage.removeItem("Id");
            console.log(facultyList);
      }).catch( err=>{
        alert(err.response.data.message);             
        history.push('/adminPortal/FacultyDetails');
    })
    }
    if(facultyList){
    return( 
        <table className="table table-striped general-table">
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mob Number</th>
                          <th>Address</th>
                          <th>Salary</th>
                          <th>Module Name</th>
                      </tr>
                  </thead>
                  <tbody>
                
              <tr key={facultyList.id}>
                <td>{facultyList.id}</td>
              <td>{facultyList.name}</td>
              <td>{facultyList.email}</td>
              <td>{facultyList.contactNo}</td>
              <td>{facultyList.address}</td>
              <td>{facultyList.salary}</td>
              <td>{facultyList.facModule.name}</td>
              <td>
                  <button className=" btn-success" onClick={() => editFaculty(facultyList.id)} > Edit Details</button>
              </td>
          </tr>
               </tbody>
              </table>

        );


        }

};


    return (
            
        <div className="general-container general-content-right" style={{margin:"250px auto"}}><div>{FacultyDetails()}</div></div>
        
      );




}
export default FacultyList;