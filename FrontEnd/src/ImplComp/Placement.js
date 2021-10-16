import React from 'react'
import './Placement.css'
import Chart from './components/Chart'

import ADOBE from './PlacementImages/ADOBE.jpg'
import AshokLeyland from './PlacementImages/AshokLeyland.jpg'
import CalvinKlein from './PlacementImages/CalvinKlein.jpg'
import Bosch from './PlacementImages/Bosch.jpg'
import Capgemini from './PlacementImages/Capgemini.jpg'
import Cognizant from './PlacementImages/Cognizant.jpg'
import Collabera from './PlacementImages/Collabera.jpg'
import daffodil from './PlacementImages/daffodil.jpg'
import wipro from './PlacementImages/wipro.jpg'
import HCL from './PlacementImages/HCL.jpg'
import INDIANAIRFORCE from './PlacementImages/INDIANAIRFORCE.jpg'
import INDIANNAVY from './PlacementImages/INDIANNAVY.jpg'






class Placement extends React.Component{

    render(){

        return(
            <div className='PlacementBody'><br></br><br></br>
            
            <h1 className='PlacementHeading'> PLACEMENT </h1>

            <p className='PlacementText'>At STUDY BOX, the mission is not only to deliver the course effectively but also to shape 
                our trainees into software professionals readily deployable in the industry. We see our
                 responsibility as that of facilitates and guides, guiding the student through the 
                 prequalifying exam, the actual DAC course and also in the industry.</p>
                 <p className='PlacementText'>Keeping in mind the industry expectations, we supplement the technical contents of the 
                     course with many extra curricular activities like workshop, regular aptitude tests etc.
                      Our placement cell works around the year to arrange for placement interviews and job 
                      opportunities for our students.</p>
                      
                      <p className='PlacementText'>Many leading industries have visited our campus in the past and the list is 
                          ever increasing. The dedicated work of our placement teams provides a platform
                           for our student to showcase their skills and the efforts they have put in during 
                           the course to secure for themselves a bright future in the software industry.</p>





            <br></br><br></br>


            <h1 className='PlacementHeading'>About Placement Cell</h1>
            <br></br>
            <p className='PlacementText'>The college has an efficiently functioning Placement Cell headed by Director, Training & Corporate 
                Relations, Mr. Samarth Shukla.</p>

                <p className='PlacementText'>  Senior Placement coordinator, Mr. Manoj Rastogi has several years of industry experience 
                and good placement record of students to his credit.
                    Placement & Training activities are coordinated by faculty members from each department
                     and students.</p>
                    <p className='PlacementText'>The Cell also coordinates summer training, projects, industrial visits and industrial 
                    interactions through workshops & guest lectures. Liaisoning with industry & other 
                    departments is managed by the placement cell for campus selection and drives.
                    The Placement Steering Committee provides necessary guidance and support to the Placement
                    Cell. Students actively participate in the placement activities of the college and get 
                    top-notch placements.</p>
                    <p className='PlacementText'>The Placement Cell has the patronage of the college management and the college 
                    advisory body which hails from institutions like IITs, IIMs and universities of high 
                    repute along with various multinationals. The Placement Cell has excellent contact with 
                    industries and corporate houses which provides cutting edge to its students at the time
                     of their placement in leading industries.</p>


                     <br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br>
                        <div style={{marginLeft:"120px"}}><Chart></Chart></div>
                        
                     
                        <br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br>
                        <h3 className='PlacementHeading'>RECRUITERS</h3>
                        <br></br>
                        <br></br><br></br>
                    

                        <div className='container'>
                        <br></br>
                            <div className='row'>
                            
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={ADOBE}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={INDIANNAVY}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={INDIANAIRFORCE}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={wipro}></img>
                                
                                </div>

                                
                            </div>
                            <br></br><br></br>

                            <div className='row'>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={AshokLeyland}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={CalvinKlein}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={Bosch}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={Capgemini}></img>
                                
                                </div>

                                
                            </div>
                            <br></br><br></br>
                            <div className='row'>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={Cognizant}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={Collabera}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={daffodil}></img>
                                <br></br><br></br>
                                </div>
                                <div className='col-sm-6 col-md-3 col-lg-3'>
                                    
                                <img className='img-thumbnail border-3 border-secondary' src={HCL}></img>
                                
                                </div>

                                
                            </div>
                            

                        </div>
                        <br></br><br></br>


                        </div>

                        

                       
        );
    }


}

export default Placement;