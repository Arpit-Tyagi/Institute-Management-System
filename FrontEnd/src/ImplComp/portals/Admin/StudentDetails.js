import {React} from 'react';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import './admin.css'
import './studentDetals.css'
import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';


const StudentDetails = () => {
    
    const history = useHistory();
    const [courses, setCourses] = useState();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
  

    const [courseDetails, setCourseDetails] = useState({});


    const [std, setStd] = useState('');

    if(!adminDetail){
      return( <Redirect to='/AdminLogin'/>
      );
  };


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

      const onSubmitOne = () => {
        window.localStorage.setItem("studentId", std);
        history.push('/adminPortal/Student');
      };


      const onSubmitTwo = () =>{
        window.localStorage.setItem("courseName", courseDetails);
        history.push('/adminPortal/StudentList');
      };


    return(
      <>
        <div className="announ-container  std-content-right">

            <h3>View List Of Students</h3>
           <select className="inputId std-drop" id = "dropdown" value={courseDetails} onChange={e => setCourseDetails(e.target.value)}>
           <option >Select Course</option>
           {coursesList()}
           </select>
             
           <button  className='btn std-click' style={{fontWeight: "bold"}} type='submit' onClick={onSubmitTwo}>
          View List
        </button>
           <h3>Search Student By Id</h3>

           <input
            className='inputId std-drop'
            type='number'
            value={std}
            placeholder='Student ID'
            onChange={e => setStd(e.target.value)}
          />
          <button  className='btn bttn  std-click' style={{marginLeft:"43%"}} type='submit' onClick={onSubmitOne}>
          Search
        </button>
        </div>
        </>
          );


}
export default StudentDetails;