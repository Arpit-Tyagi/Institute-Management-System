import {React} from 'react';
import { useState } from 'react';
import {Redirect} from "react-router-dom";
import ApiService from '../../services/ApiService';
import "./Notice.css";

const NoticeList  = () => {
    const[noticeList, setNoticeList] = useState();

    const studentDetails = JSON.parse(localStorage.getItem("studentLogin"));
   
if(!studentDetails){
    return( <Redirect to='/StudentLogin'/>
    );
}



const listDetails = () => {

    if(!noticeList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminGetNotice(studentDetails.course.name).then(resp => {
            console.log(resp.data);
            setNoticeList(resp.data);
            console.log(noticeList);
      })
    }
    if(noticeList){
    return( 
        <div>
        <table className="table table-striped notice-table " >
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            noticeList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>{user.date}</td>
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
            
             <div className="notice-container  notice-content-right"><h3 style={{marginTop:"15px",textAlign:"center"}}>Important Notices</h3>{listDetails()}</div>
        
      );



}
export default NoticeList;