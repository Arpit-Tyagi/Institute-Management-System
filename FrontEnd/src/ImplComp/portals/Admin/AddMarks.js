import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import './EditStudent.css';



const AddMarks = () => {

    const history = useHistory();
    const[marks, setMarks] = useState({
        obtainedMarks: '',
        totalMarks: '',
        grade: '',
        status: ''
      });
    const[module, setModule] = useState();
    const [moduleDetails, setModuleDetails] = useState();



const handleChange = e => {
    const { name, value } = e.target;
    setMarks({
      ...marks,
      [name]: value
    });
};


const addmarks = () =>  {
    ApiService.adminAddMarks(marks, module, window.localStorage.getItem("studentId") )
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                window.localStorage.removeItem("studentId");
                alert("Marks Details Added successfully");
                history.push('/adminPortal/UploadMarks'); 
            }).catch( err=>{
                alert("Adding Details Failed");
            })
};


const moduleList = () => {
    if(!moduleDetails){
      ApiService.adminGetModuleByCourse(window.localStorage.getItem("courseName")).then(resp => {
          setModuleDetails(resp.data); 
          window.localStorage.removeItem("courseName")
      })
  }
      if(moduleDetails){
      return( 
        moduleDetails.map(item  => 
              <option value={item.name}>{item.name}</option>
          )

      )
          }

  };

      
    return(
        <div className="Hello-container content-right" style={{width:"70%"}}>
        <form  className="Editform" style={{marginTop:"30px"}}>
        
            <div className="Edit-form-item"> 
            <div className='Edit-form-inputs'>
            <label className='Edit-form-label'>Module</label>
            <select className="inputId drop Edit-form-input "  id = "dropdown" value={module} onChange={e => setModule(e.target.value)}>
           <option >Select Module</option>
           {moduleList()}
           </select>

        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Total Marks</label>
          <input
            className='Edit-form-input'
            type='number'
            name='totalMarks'
            placeholder='Enter Total Marks'
            value={marks.totalMarks}
            onChange={handleChange}
          />

        </div>
        </div>
        <div className='Edit-form-item'>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Obtained Marks</label>
          <input
            className='Edit-form-input'
            type='number'
            name='obtainedMarks'
            max='100'
            placeholder='Enter Obtained Marks'
            value={marks.obtainedMarks}
            onChange={handleChange}
          />
        </div>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label'>Grade</label>
          <input
            className='Edit-form-input'
            type='text'
            name='grade'
            placeholder='Enter Grade'
            value={marks.grade}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='Edit-form-item'>
        <div className='Edit-form-inputs'>
          <label className='Edit-form-label' >Status</label><br></br>
          <select className="inputId drop Edit-form-input" style={{width:"340px"}} id = "dropdown" name='status' value={marks.status}  onChange={handleChange}>
           <option>Select Status</option>
           <option vlaue="Pass">Pass</option>
           <option vale="Fail">Fail</option>
           </select>
        </div>
    
        </div>
        <button className='Edit-form-input-btn' type='button' onClick={addmarks}>
          Upload
        </button>
        <br></br><br></br>
        
      </form>
      </div>

    );

}

export default AddMarks;