import {React} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Sidebar from './Admin/Sidebar';
import './adminPortal.css';
import StudentDetails from './Admin/StudentDetails';
import Student from './Admin/Student';
import EditStudent from './Admin/EditStudent';
import StudentList from './Admin/StudentList';
import FacultyDetails from './Admin/FacultyDetails';
import FacultyList from './Admin/FacultyList';
import EditFaculty from './Admin/EditFaculty';
import Faculty from './Admin/Faculty';
import AddFaculty from './Admin/AddFaculty';
import AnnouncementDetails from './Admin/AnnouncementDetails';
import AnnouncementList from './Admin/AnnouncementList';
import AddAnnouncement from './Admin/AddAnnouncement';
import ClassLinkDetails from './Admin/ClassLinkDetails';
import ClassLinkList from './Admin/ClassLinkList';
import AddClassLink from './Admin/AddClassLink';
import AddMarks from './Admin/AddMarks';
import UploadMarks from './Admin/UploadMarks';



const adminPortal  = ()=> {
const adminDetail = JSON.parse(localStorage.getItem("admin"));
   
if(!adminDetail){
    return( <Redirect to='/adminlogin'/>
    );
}


return(
         <div style={{display: "flex"}}>
      <Router>
      <Sidebar></Sidebar>
          <Switch>
            <Route path='/adminPortal/StudentDetails'  component={StudentDetails} />
            <Route path='/adminPortal/Student'  component={Student} />
            <Route path='/adminPortal/EditStudent'  component={EditStudent} />
            <Route path='/adminPortal/StudentList'  component={StudentList} />
            <Route path='/adminPortal/FacultyDetails'  component={FacultyDetails} />
            <Route path='/adminPortal/FacultyList'  component={FacultyList} />
            <Route path='/adminPortal/EditFaculty'  component={EditFaculty} />
            <Route path='/adminPortal/Faculty'  component={Faculty} />
            <Route path='/adminPortal/AddFaculty'  component={AddFaculty} />
            <Route path='/adminPortal/AnnouncementDetails'  component={AnnouncementDetails} />
            <Route path='/adminPortal/AnnouncementList'  component={AnnouncementList} />
            <Route path='/adminPortal/AddAnnouncement'  component={AddAnnouncement} />
            <Route path='/adminPortal/ClassLinkDetails'  component={ClassLinkDetails} />
            <Route path='/adminPortal/ClassLinkList'  component={ClassLinkList} />
            <Route path='/adminPortal/AddClassLink'  component={AddClassLink} />
            <Route path='/adminPortal/UploadMarks'  component={UploadMarks} />
            <Route path='/adminPortal/AddMarks'  component={AddMarks} />
          </Switch>
      </Router>
      </div>



);

}


export default adminPortal;