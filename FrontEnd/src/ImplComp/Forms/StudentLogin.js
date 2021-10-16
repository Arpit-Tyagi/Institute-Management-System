import  {React} from 'react';
import { useState } from 'react';
import { useHistory } from "react-router";
import './Login.css';
import ApiService from '../../ImplComp/services/ApiService'

const StudentLogin = ()=> {

    const history = useHistory();
    const [student, setStudent] = useState({});


    const handleChange = e => {
        const { name, value } = e.target;
        setStudent({
          ...student,
          [name]: value
        });
      };

      const handleSubmit = (e) =>{
          e.preventDefault();
        ApiService.studentlogin(student)
        .then(resp => {
            console.log(resp.data);//actual response data sent by back end
            window.localStorage.setItem("studentLogin", JSON.stringify(resp.data));
            history.push('/studentPortal');
        }).catch( err=>{
            alert(err.response.data.message);             
           history.push('/StudentLogin');
        })

      }

    return (
            <div className="login-form-container form-content-right">
                <form  onSubmit={handleSubmit} className='login-form'>
                    <h1>Student login</h1>
                    <br></br>
                    <div className='login-form-inputs'>
                     <label className='login-form-label'>Email</label>
                    <input
                     type="email"
                      placeholder="email"
                       className='login-form-input'
                       pattern=".+@gmail\.com" 
                       size="30"
                        required
                       name='email'
                        value={student.email}
                        onChange={handleChange}/>
                    </div>
                    <div className='login-form-inputs'>
                    <label className='login-form-label'>Password</label>
                        <input
                         type="password" 
                        placeholder="password" 
                        className='login-form-input'
                        name='password'
                        value={student.password}
                        onChange={handleChange}/>
                        </div>
                        <br></br><br></br>
                            <input type="submit" className='login-form-input-btn' value="login"/>
                            <br></br>
                            </form>
                           
                            </div>
        );


}

export default StudentLogin;


