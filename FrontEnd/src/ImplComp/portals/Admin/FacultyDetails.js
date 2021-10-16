import {React} from 'react';
import { useState, useEffect } from 'react';
import ApiService from '../../services/ApiService';
import './FacultyDetails.css'
import {useHistory} from "react-router";

const FacultyDetails = () => {
    
    const history = useHistory();
    const [courses, setCourses] = useState();

    const [courseDetails, setCourseDetails] = useState({});
     const[next, setNext] = useState();

    const [std, setStd] = useState('');



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
        window.localStorage.setItem("Id", std);
        history.push('/adminPortal/Faculty');
      };


      const onSubmitTwo = () =>{
        window.localStorage.setItem("courseName", courseDetails);
        history.push('/adminPortal/FacultyList');
      };

      const onSubmitThree= () =>{
        history.push('/adminPortal/AddFaculty');
      };


    return(
      <>
        <div className=" faculty-container faculty-content-right  ">

          <h3>Add New Faculty Details</h3>

        <button  className='btn bttn faculty-click' type='submit' onClick={onSubmitThree}>
          Click here  
        </button>

            <h3>Veiw Faculty List By Course</h3>
           <select className="inputId faculty-drop" id = "dropdown" value={courseDetails} onChange={e => setCourseDetails(e.target.value)}>
           <option >Select Course</option>
           {coursesList()}
           </select>
             
           <button  className='btn bttn faculty-click' type='submit' onClick={onSubmitTwo}>
          View List   
        </button>
           <h3>Search Faculty BY Id</h3>

           <input
            className='inputId faculty-drop'
            type='number'
            value={std}
            placeholder='Faculty ID'
            onChange={e => setStd(e.target.value)}
          />
          <button  className='btn bttn faculty-click' type='submit' onClick={onSubmitOne}>
          Search
        </button>
        </div>
        </>
          );


}
export default FacultyDetails;