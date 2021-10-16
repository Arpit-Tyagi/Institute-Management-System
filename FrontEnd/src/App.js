import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './ImplComp/Navbar';

import Home from './ImplComp/Home';
import FAboutUs from './ImplComp/FAboutUs';
import Placement from './ImplComp/Placement';
import Form from './ImplComp/Forms/Form';
import StudentLogin from './ImplComp/Forms/StudentLogin';
import adminlogin from './ImplComp/Forms/AdminLogin';
import ContactInfo from './ImplComp/ContactInfo';
import adminPortal from './ImplComp/portals/adminPortal';
import studentPortal from './ImplComp/portals/studentPortal';

import DAC from './ImplComp/CourseDetails/DAC';
import DAI from './ImplComp/CourseDetails/DAI'




class  App extends React.Component{
  render(){
    return(
      <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/FAboutUs' component={FAboutUs} />
            <Route path='/Placement' component={Placement} />
            <Route path='/Form' component={Form} />
            <Route path='/StudentLogin' component={StudentLogin} />
            <Route path='/adminlogin' component={adminlogin} />
            <Route path='/adminPortal' component={adminPortal}/>
            <Route path='/studentPortal' component={studentPortal}/>
            <Route path='/DAC' component={DAC} />
            <Route path='/DAI' component={DAI} />
          </Switch>
          
      </Router>
      <div className='FContactUs'>
      <br></br><br></br>
      <ContactInfo/>
      </div>
      </>
    
  );
  }
}
export default App;

