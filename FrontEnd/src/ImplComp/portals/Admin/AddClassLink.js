import {React} from 'react';
import { useState } from 'react';
import {useHistory} from "react-router";
import ApiService from '../../services/ApiService';
import './AddClass.css';



const AddClassLink = () => {

    const history = useHistory();
    const[classlink, setClasslink] = useState({
        title: '',
        modName: '',
        classlink: '',
      });
    const [moduleDetails, setModuleDetails] = useState();



const handleChange = e => {
    const { name, value } = e.target;
    setClasslink({
      ...classlink,
      [name]: value
    });
};


const addClassLink = () =>  {
    ApiService.adminAddClassLink(classlink, window.localStorage.getItem("cousName"))
            .then(resp => {
                console.log(resp.data);//actual response data sent by back end
                alert("Class Link Details Added successfully");
                window.localStorage.removeItem("cousName");
                history.push('/adminPortal/ClassLinkDetails'); 
            }).catch( err=>{
                alert("Adding Class Link Failed");
            })
};


const moduleList = () => {
    if(!moduleDetails){
      ApiService.adminModuleList(window.localStorage.getItem("cousName")).then(resp => {
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
        <div className="AddClass-container AddClass-content-right" >
          
        <form  className="AddClass-form">
            <div className="AddClass-form-item"> 
        <div className='AddClass-form-inputs'>
          <label className='AddClass-form-label'>Title</label>
          <input
            className='AddClass-form-input'
            type='text'
            name='title'
            placeholder='Enter Title'
            value={classlink.title}
            onChange={handleChange}
          />
          </div>
         <div className='AddClass-form-inputs'>
          <label className='AddClass-form-label'>ClassLink</label>
          <input
            className='AddClass-form-input'
            type='text'
            name='classlink'
            placeholder='Enter Description'
            value={classlink.description}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className='AddClass-form-item'>
        <div className='AddClass-form-inputs' >
          <label className='AddClass-form-label'>Date</label>
          <input
            className='form-input'
            type='date'
            name='date'
            min="1980-01-01" 
            placeholder='Enter Date'
            value={classlink.date}
            onChange={handleChange}
          />
          
        </div>
        <div style={{marginLeft:"5%", marginRight: "3%"}}>
        <label className='AddClass-form-label'>Module</label>
        <select className="inputId drop AddClass-form-input"  id = "dropdown" name="modName"  onChange={handleChange}>
           <option>Select Course</option>
           {moduleList()}
           </select>

        </div>
        </div>
        <button className='AddClass-form-input-btn' type='button' onClick={addClassLink}>
          Add Class Link
        </button>
        <br></br><br></br>
        
      </form>
    </div>

    );

}

export default AddClassLink;