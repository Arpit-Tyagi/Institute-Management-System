import {React} from 'react';
import { useState } from 'react';
import ApiService from '../../services/ApiService';
import './admin.css'
import './studentDetals.css'
import {useHistory} from "react-router";
import {Redirect} from 'react-router-dom';


const StudentDetails = () => {
    
    const history = useHistory();
    const adminDetail = JSON.parse(localStorage.getItem("admin"));
  


    const [std, setStd] = useState('');

    if(!adminDetail){
      return( <Redirect to='/AdminLogin'/>
      );
  };


      const onSubmitOne = () => {
          ApiService.adminStudentById(std).then(resp => {
            window.localStorage.setItem("courseName",(resp.data).course.name);
         window.localStorage.setItem("studentId", std);
        history.push('/adminPortal/AddMarks'); 
          }).catch( err=>{
            alert(err.response.data.message);             
            history.push('/adminPortal/UploadMarks');
   
      })
};


    return(
      <>
        <div className="announ-container  std-content-right" style={{margin:"80px"}}>
           <h3>To Upload Marks Enter Student Id</h3>
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