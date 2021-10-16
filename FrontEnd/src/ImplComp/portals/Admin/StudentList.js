import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import {Redirect} from 'react-router-dom';
import './table.css';

const StudentList  = () => {

    const history = useHistory();
    const[stdList, setStdlist] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
    if(!adminDetail){
        return( <Redirect to='/AdminLogin'/>
        );
    };


const editStudent = (id) =>  {
    window.localStorage.setItem("userId", id);
    history.push('/adminPortal/EditStudent');
    window.localStorage.removeItem("courseName")
};



const listDetails = () => {
    if(!stdList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminStudentListByCourse(window.localStorage.getItem("courseName")).then(resp => {
            console.log(resp.data);
            setStdlist(resp.data);
            console.log(stdList);
      })
    }
    if(stdList){
    return( 
        <div>
        <table className="table table-striped general-table ">
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>10th</th>
                          <th>12th</th>
                          <th>Graduation</th>
                          <th>Mob Number</th>
                          <th>Address</th>
                          <th>DOB</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            stdList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.studentsName}</td>
              <td>{user.email}</td>
              <td>{user.hscMarks}</td>
              <td>{user.sscMarks}</td>
              <td>{user.gradMarks}</td>
              <td>{user.contactNum}</td>
              <td>{user.stdAddress}</td>
              <td>{user.dateOfBirth}</td>
              <td>
                
                  <button className=" btn-success" onClick={() => editStudent(user.id)} > Edit Details</button>
              </td>
          </tr>
                            )
                            }
               </tbody>
              </table>
              </div>

        );


        }

};


    return (
            
             <div  className="general-container general-content-right" style={{margin:"0px"}}>{listDetails()}</div>
        
      );




}
export default StudentList;