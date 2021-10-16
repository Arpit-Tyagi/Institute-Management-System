import {React} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import StudentSidebar from './Student/StudentSidebar';
import './adminPortal.css';
import { Redirect } from 'react-router-dom';

import Course from './Student/Course';
import Notice from './Student/Notice';
import ClassLink from './Student/ClassLink';
import ViewMarks from './Student/ViewMarks';

const studentPortal  = ()=> {
const studentDetail = JSON.parse(localStorage.getItem("studentLogin"));
   
if(!studentDetail){
    return( <Redirect to='/StudentLogin'/>
  );
}


return(
   <div style={{display: "flex"}}>
      <Router >
      <StudentSidebar></StudentSidebar>
          <Switch>
            <Route path='/studentPortal/Course'  component={Course} />
            <Route path='/studentPortal/Notice'  component={Notice} />
            <Route path='/studentPortal/ClassLink'  component={ClassLink} />
            <Route path='/studentPortal/ViewMarks'  component={ViewMarks} />
          </Switch>
      </Router>
      </div>


);

}


export default studentPortal;