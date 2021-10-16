import {React} from 'react';
import { useState, useEffect } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';

const FacultyList  = () => {

    const history = useHistory();
    const[facultyList, setFacultyList] = useState();


const editFaculty = (id) =>  {
    window.localStorage.setItem("facultyId", id);
    window.localStorage.removeItem("courseName");
    history.push('/adminPortal/EditFaculty');
};



const listDetails = () => {

    if(!facultyList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminFacultyByCourse(window.localStorage.getItem("courseName")).then(resp => {
            console.log(resp.data);
            setFacultyList(resp.data);
            console.log(facultyList);
      })
    }
    if(facultyList){
    return(
        <table className="table table-striped general-table" >
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
                  {
                            facultyList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactNo}</td>
              <td>{user.address}</td>
              <td>{user.salary}</td>
              <td>{user.facModule.name}</td>
              <td>
              <button className=" btn-success" onClick={() => editFaculty(user.id)} > Edit Details</button>
                 
              </td>
          </tr>
                            )
                            }
               </tbody>
              </table>
            

        );


        }
};


    return (       
             <div className="general-container general-content-right" style={{margin:"0px"}}><h3>Faculty List</h3>{listDetails()}</div>
        
      );




}
export default FacultyList;