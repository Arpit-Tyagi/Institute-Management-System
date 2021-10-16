import {React} from 'react';
import { Redirect } from 'react-router-dom';

const logout= () => {

    const logoff = () =>{
     
        localStorage.removeItem("admin")
        return(
            <Redirect to='/adminlogin'></Redirect>
        );

    }

    return(
    <div>{logoff()}</div>
    );

}

export default logout;