import {React} from 'react';
import { useState, useEffect } from 'react';
import ApiService from '../../services/ApiService';
import './admin.css'
import './ClassLinkDetails.css'
import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';

const ClassLinkDetails= () => {
    
    const history = useHistory();
    const [courses, setCourses] = useState();

    const [courseDetails, setCourseDetails] = useState({});
    const[cousName, setCourName] = useState();
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
        history.push('/adminPortal/ClassLinkList');
      };

      const onSubmitTwo = () =>{
        window.localStorage.setItem("cousName", cousName);
        history.push('/adminPortal/AddClassLink');
      };


    return(
      <>
        <div className="classlink-container classlink-content-right  ">

            <h3>Add Class Link For Course </h3>
        <select className="inputId classlink-drop" id = "dropdown"  onChange={e => setCourName(e.target.value)}>
           <option >Select Course</option>
           {coursesList()}
           </select>

        <button  className='btn bttn classlink-click' type='submit' onClick={onSubmitTwo}>
          Add Link
        </button>

            <h3>View Class Links List</h3>
           <select className="inputId classlink-drop" id = "dropdown"  onChange={e => setCourseDetails(e.target.value)}>
           <option >Select Course</option>
           {coursesList()}
           </select>
             
           <button  className='btn bttn classlink-click' type='submit' onClick={onSubmitOne}>
          View List
        </button>
        </div>
        </>
          );


}
export default ClassLinkDetails;