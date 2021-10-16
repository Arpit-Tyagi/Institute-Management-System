import  {React} from 'react';
import {useState} from 'react';
import {useHistory} from "react-router";
import './Login.css';
import ApiService from '../services/ApiService'

const AdminLogin = ()=> {

    const history = useHistory();
    const [admin, setAdmin] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setAdmin({
          ...admin,
          [name]: value
        });
      };

      const handleSubmit = (e) =>{
          e.preventDefault();
        ApiService.adminlogin(admin)
        .then(resp => {
            console.log(resp.data);//actual response data sent by back end
            //this.setState({message : 'User added successfully.'});
           localStorage.setItem("admin", JSON.stringify(resp.data));
            history.push('/adminPortal');
        }).catch( err=>{
            alert(err.response.data.message);             
            history.push('/adminlogin');
        })

      }

    return (
            <div className="login-form-container login-form-content-right">
                <form  onSubmit={handleSubmit} className='login-form'>
                    <h1>Admin login</h1><br></br>
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
                        value={admin.email}
                        onChange={handleChange}/>
                    </div>
                    <div className='login-form-inputs'>
                    <label className='login-form-label'>Password</label>
                        <input
                         type="password" 
                        placeholder="password" 
                        className='login-form-input'
                        name='password'
                        value={admin.password}
                        onChange={handleChange}/>
                        </div>
                        <br></br><br></br>
                            <input type="submit" className='login-form-input-btn' value="login"/>
                          <br></br>
                            </form>
                           
                            </div>
        );


}

export default AdminLogin;