import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';

const Student  = () => {

    const history = useHistory();
    const[stdDetails, setStdDetails] = useState();

const editStudent = (id) =>  {
    window.localStorage.setItem("userId", id);
    window.localStorage.removeItem("studentId")
    history.push('/adminPortal/EditStudent'); 
};



const studentDetails = () => {
    if(!stdDetails){
        ApiService.adminStudentById(window.localStorage.getItem("studentId")).then(resp => {
            console.log(resp.data);
            setStdDetails(resp.data);
      }).catch( err=>{
            alert(err.response.data.message);             
            history.push('/adminPortal/StudentDetails');
        })
    };
    if(stdDetails){
    return( 
        <table className="table table-striped List-table ">
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
          
              <tr key={stdDetails.id}>
                <td>{stdDetails.id}</td>
              <td>{stdDetails.studentsName}</td>
              <td>{stdDetails.email}</td>
              <td>{stdDetails.hscMarks}</td>
              <td>{stdDetails.sscMarks}</td>
              <td>{stdDetails.gradMarks}</td>
              <td>{stdDetails.contactNum}</td>
              <td>{stdDetails.stdAddress}</td>
              <td>{stdDetails.dateOfBirth}</td>
              <td>
                  <button className=" btn-success" > Delete</button>
                  &nbsp; &nbsp; 
                  <button className=" btn-success" onClick={() => editStudent(stdDetails.id)} > Edit</button>
              </td>
          </tr>
               </tbody>
              </table>

        );
        }
};


    return (
             <div className="List-container List-content-right" style={{margin:"250px auto"}} >{studentDetails()}</div>
       
        
      );




}
export default Student;