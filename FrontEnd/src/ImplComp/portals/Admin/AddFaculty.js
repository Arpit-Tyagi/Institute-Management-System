import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import './EditFaculty.css';



const AddFaculty = () => {

    const history = useHistory();
    const[faculty, setFaculty] = useState({
        name: '',
        email: '',
        password: '',
        contactNo: '',
        address: '',
        salary: '',
      });
    const[module, setModule] = useState();
    const [moduleDetails, setModuleDetails] = useState();



const handleChange = e => {
    const { name, value } = e.target;
    setFaculty({
      ...faculty,
      [name]: value
    });
};


const addFaculty = () =>  {
    ApiService.adminAddFaculty(faculty, module)
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Faculty Details Added successfully");
                history.push('/adminPortal/FacultyDetails'); 
            }).catch( err=>{
                alert("Editing Details Failed");
            })
};


const moduleList = () => {
    if(!moduleDetails){
      ApiService.adminModuleList().then(resp => {
          setModuleDetails(resp.data); 
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
        <div className="EditFaculty-container EditFaculty-content-right"  style={{width:"67%"}}>
        <form  className="Editform">
        
            <div className="EditFaculty-form-item"> 
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Full Name</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='name'
            placeholder='Enter Faculty Name'
            value={faculty.name}
            onChange={handleChange}
          />
          
        </div>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Password</label>
          <input
            className='EditFaculty-form-input'
            type='password'
            name='password'
            placeholder='Enter  Password'
            value={faculty.password}
            onChange={handleChange}
          />

        </div>
        </div>
        <div className='EditFaculty-form-item'>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Contact Number</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='contactNo'
            placeholder='Enter Contact Number'
            value={faculty.contactNo}
            onChange={handleChange}
          />
        </div>
        <div className='EditFaculty-form-inputs'>
          <label className='EditFaculty-form-label'>Address</label>
          <input
            className='EditFaculty-form-input'
            type='text'
            name='address'
            placeholder='Enter Address'
            value={faculty.address}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='EditFaculty-form-item'>
        <div className='EditFaculty-form-inputs' >
          <label className='EditFaculty-form-label' >Salary</label>
          <input
            className='EditFaculty-form-input'
            
            type='text'
            name='salary'
            placeholder='Enter Salary'
            value={faculty.salary}
            onChange={handleChange}
          />

        </div>
        <div className='EditFaculty-form-inputs'>
        <label className='EditFaculty-form-label' >Module</label>
        <select className="inputId drop "  style={{width:"350px"}} id = "dropdown"  value={module} onChange={e => setModule(e.target.value)}>
           <option >Select Module</option>
           {moduleList()}
           </select>

        </div>
        </div>
        <button className='EditFaculty-form-input-btn' type='button' onClick={addFaculty}>
          Submit
        </button>
        <br></br><br></br>
        
      </form>
    </div>

    );

}

export default AddFaculty;