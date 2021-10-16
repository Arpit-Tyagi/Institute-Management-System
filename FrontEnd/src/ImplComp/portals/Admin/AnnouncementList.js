import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import {Redirect} from 'react-router-dom';

const AnnouncementList  = () => {

    const history = useHistory();
    const[annoumcementList, setAnnoumcementList] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
if(!adminDetail){
    return( <Redirect to='/AdminLogin'/>
    );
}

const deleteAnnouncement = (id) =>  {
    ApiService.adminDeleteAnnoumcement(id).then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Announcement Details Deleted Successfully ");
                history.push('/adminPortal/AnnouncementDetails');
            }).catch( err=>{
                alert("Deleting Announcement Details Failed");
            })
};



const listDetails = () => {

    if(!annoumcementList){
        console.log(window.localStorage.getItem("courseName"));
        ApiService.adminGetAnnoumcementList(window.localStorage.getItem("courseName")).then(resp => {
            console.log(resp.data);
            setAnnoumcementList(resp.data);
            console.log(annoumcementList);
            window.localStorage.removeItem("courseName");
      })
    }
    if(annoumcementList){
    return( 
        <table className="table table-striped ">
                  <thead>
                      <tr>
                          <th className="hidden">Id</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Date </th>
                          <th>Course</th>
                      </tr>
                  </thead>
                  <tbody>
                  {
                            annoumcementList.map(
                        user =>
              <tr key={user.id}>
                <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.description}</td>
              <td>{user.date}</td>
              <td>{user.coursesAnou.name}</td>
              <td>
                 
                  <button className=" btn-success" onClick={() => deleteAnnouncement(user.id)} > Delete</button>
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
            
             <div className="List-container List-content-right" style={{margin:"45px"}}>{listDetails()}</div>
        
      );




}
export default AnnouncementList;