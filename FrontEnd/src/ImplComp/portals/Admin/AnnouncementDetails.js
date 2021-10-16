import {React} from 'react';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import './Announ.css'
import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';

const AnnoumcementDetails = () => {
    
    const history = useHistory();
    const [courses, setCourses] = useState();

    const [courseDetails, setCourseDetails] = useState({});

    const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
if(!adminDetail){
    return( <Redirect to='/AdminLogin'/>
    );
}



    const coursesList = () => {
      if(!courses){
        ApiService.adminCourseList().then(resp => {
            setCourses(resp.data); 
           
        })
    }
        if(courses){
        return( 
            courses.map(item  => 
                <option value={item.name}>{item.name}</option>
            )

        )
            }

    };


      const onSubmitOne = () =>{
        window.localStorage.setItem("courseName", courseDetails);
        history.push('/adminPortal/AnnouncementList');
      };

      const onSubmitTwo = () =>{
        history.push('/adminPortal/AddAnnouncement');
      };


    return(
        <div className="announ-container announ-content-right ">
          <h3>Add Announcement For Students </h3>
        <button className='btn bttn announ-click'  type='submit'onClick={onSubmitTwo}>
          Click here
        </button>
        <br></br>
        <h3>View Announcement List</h3><br></br>
           <select className="inputId announ-drop " id = "dropdown" value={courseDetails} onChange={e => setCourseDetails(e.target.value)}>
           <option >Select Course</option>
           {coursesList()}
           </select><br></br>
             
           <button  className='btn bttn announ-click'  type='submit' onClick={onSubmitOne}>
          Click here
        </button>
        </div>
     
      
          );


}
export default AnnoumcementDetails;