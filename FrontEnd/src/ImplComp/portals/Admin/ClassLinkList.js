import {React} from 'react';
import { useState, useEffect } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import {Redirect} from 'react-router-dom';
import  './List.css'

const ClassLinkList  = () => {

    const history = useHistory();
    const[classLinkList, setClassLinkList] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
    if(!adminDetail){
        return( <Redirect to='/AdminLogin'/>
        );
    }


const deleteClassLink = (id) =>  {
    ApiService.adminDeleteClassLink(id).then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Class Link Details Deleted Successfully ");
                history.push('/adminPortal/ClassLinkDetails');
            }).catch( err=>{
                alert("Deleting Announcement Details Failed");
            })
};



const listDetails = () => {

    if(!classLinkList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminGetClassLinkList(window.localStorage.getItem("courseName")).then(resp => {
            console.log(resp.data);
            setClassLinkList(resp.data);
            console.log(classLinkList);
            window.localStorage.removeItem("courseName");
      })
    }
    if(classLinkList){
    return( 
        <div>
        <table className="table table-striped List-table ">
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>Title</th>
                          <th>ClassLink</th>
                          <th>Module </th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            classLinkList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.classlink}</td>
              <td>{user.modName}</td>
              <td>{user.date}</td>
              <td>
                 
                  <button className=" btn-success" onClick={() => deleteClassLink(user.id)} > Delete</button>
              </td>
          </tr>
                            )
                            }
               </tbody>
              </table>
              </div>

        );


        }

        if(!classLinkList){
            return(<h1>Error </h1>
            );
        }
};


    return (
             <div className=" List-container List-content-right">{listDetails()}</div>

        
      );




}
export default ClassLinkList;