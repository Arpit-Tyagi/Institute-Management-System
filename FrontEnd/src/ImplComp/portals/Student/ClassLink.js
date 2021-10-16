import {React} from 'react';
import { useState } from 'react';
import {Redirect} from "react-router-dom";
import ApiService from '../../services/ApiService';
import './ClassLink.css'

const LinkList  = () => {

    const[linkList, setLinkList] = useState();

    const studentDetails = JSON.parse(localStorage.getItem("studentLogin"));
   
if(!studentDetails){
    return( <Redirect to='/StudentLogin'/>
    );
}



const listDetails = () => {

    if(!linkList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminGetClassLinkList(studentDetails.course.name).then(resp => {
            console.log(resp.data);
            setLinkList(resp.data);
            console.log(linkList);
      })
    }
    if(linkList){
    return( 
        <table className="table table-striped link-table" >
                  <thead>
                      <tr>
                          <th>Module Name</th>
                          <th>Title</th>
                          <th>Link</th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            linkList.map(
                        user =>
              <tr key={user.id}>
                  <td>{user.modName}</td>
              <td>{user.title}</td>
              <td>{user.classlink}</td>
              <td>{user.date}</td>
          </tr>
                            )
                            }
               </tbody>
              </table>

        );
  }
}

    return (
            
             <div class="link-container link-content-right">
                 <h3 style={{marginTop:"15px",textAlign:"center"}}>Important Links For Students</h3>
                 {listDetails()}
                 </div>
        
      );



}
export default LinkList;