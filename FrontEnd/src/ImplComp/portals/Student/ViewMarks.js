import {React} from 'react';
import { useState } from 'react';
import {Redirect} from "react-router-dom";
import ApiService from '../../services/ApiService';
import "./Notice.css";

const ViewMarks  = () => {
    const[marksList, setMarksList] = useState();

    const studentDetails = JSON.parse(localStorage.getItem("studentLogin"));
   
if(!studentDetails){
    return( <Redirect to='/StudentLogin'/>
    );
}



const listDetails = () => {

    if(!marksList){
        ApiService.adminGetMarks(studentDetails.id).then(resp => {
            console.log(resp.data);
            setMarksList(resp.data);
            console.log(marksList);
      })
    }
    if(marksList){
    return( 
        <div>
        <table className="table table-striped notice-table " >
                  <thead>
                      <tr>
                          <th>Module </th>
                          <th>Total Marks</th>
                          <th>Obtained Marks</th>
                          <th>Grade</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            marksList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.module.name}</td>
              <td>{user.totalMarks}</td>
              <td>{user.obtainedMarks}</td>
              <td>{user.grade}</td>
              <td>{user.status}</td>
          </tr>
                            )
                            }
               </tbody>
              </table>
              </div>

        );
  }
}

    return (
            
             <div className="notice-container  notice-content-right" style={{width:"70%"}}><h3 style={{marginTop:"15px",textAlign:"center"}}>Marks</h3>{listDetails()}</div>
        
      );



}
export default ViewMarks;