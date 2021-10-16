import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import {Redirect} from 'react-router-dom';
import './AddAnnoun.css';



const AddAnnouncement = () => {

  const adminDetail = JSON.parse(localStorage.getItem("admin"));

    const history = useHistory();
    const[announcement, setAnnouncement] = useState({
        title: '',
        description: '',
        date: '',
      });
    const[course, setCourse] = useState();
    const [courseDetails, setCourseDetails] = useState();


    if(!adminDetail){
      return( <Redirect to='/adminlogin'/>
      );
  };

const handleChange = e => {
    const { name, value } = e.target;
    setAnnouncement({
      ...announcement,
      [name]: value
    });
};


const addannouncement = () =>  {
    ApiService.adminAddannounmcement(announcement, course)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Announcement Details Added successfully");
                history.push('/adminPortal/AnnouncementDetails'); 
            }).catch( err=>{
                alert("Adding Announcement Failed");
            })
};


const courseList = () => {
    if(!courseDetails){
      ApiService.adminCourseList().then(resp => {
        setCourseDetails(resp.data); 
      })
  }
      if(courseDetails){
      return( 
        courseDetails.map(item  => 
              <option value={item.name}>{item.name}</option>
          )

      )
          }

  };

      
    return(
        <div className="AddAnnu-container AddAnnu-content-right" >
        <form  className="AddAnnu-form">
            <div className="AddAnnu-form-item"> 
        <div className='AddAnnu-form-inputs'>
          <label className='AddAnnu-form-label'>Title</label>
          <input
            className='AddAnnu-form-input'
            type='text'
            name='title'
            placeholder='Enter Title'
            value={announcement.title}
            onChange={handleChange}
          />
          </div>
         <div className='AddAnnu-form-inputs'>
          <label className='AddAnnu-form-label'>Description</label>
          <input
            className='AddAnnu-form-input'
            type='text'
            name='description'
            placeholder='Enter Description'
            value={announcement.description}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='AddAnnu-form-item'>
        <div className='AddAnnu-form-inputs' >
          <label className='AddAnnu-form-label'>Date</label>
          <input
            className='AddAnnu-form-input'
            style={{width:"301px"}}
            type='date'
            name='date'
            min="1980-01-01" 
            placeholder='Enter Date'
            value={announcement.date}
            onChange={handleChange}
          />
          
        </div>
        <div className='AddAnnu-form-inputs' >
        <label className='AddAnnu-form-label'>Course</label>
        <select className="  AddAnnu-form-input"  id = "dropdown" value={course} onChange={e => setCourse(e.target.value)}>
           <option>Select Course</option>{courseList()}
           </select>

        </div>
        </div>
        <button className='AddAnnu-form-input-btn' type='button' onClick={addannouncement}>
          Add Announcement
        </button>
        <br></br><br></br>
        
      </form>
    </div>

    );

}

export default AddAnnouncement;