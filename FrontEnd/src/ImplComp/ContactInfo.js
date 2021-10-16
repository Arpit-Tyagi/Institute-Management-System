import React from 'react';
import './ContactInfo.css';
import {Card} from 'react-bootstrap';

import institute1 from './components/institute1.jpg'
import institute2 from './components/institute2.jpg'
import institute3 from './components/institute3.jpg'

class ContactInfo extends React.Component{
    render(){
        
        return(
            <div className=' FContactUs '>
                 <h3 className='FAboutUsHeading'>Contact Info</h3>
                 <br></br>
                
                <div className='container FContactUs'>
                            <div className='row'>
                                <div className='col-md-6 col-lg-4'>
                     <Card style={{ width: '22rem' }} border="info" >
                        <Card.Img variant="top" src={institute1} />
                            <Card.Body className='CardBody '>
                                <Card.Title><h5 className='FContactUsText'><i className='fas fa-university'> </i>&nbsp;Study Box Pune</h5></Card.Title>
                                <Card.Text>
                                <p className='FContactUsText'>"Institute IT Park",  Phase 2 of Rajiv Gandhi Infotech Park,  Hinjawadi, Pune - 411057, MH-INDIA</p>

                                <div className='FContactUsText'>
                          <i class="fa fa-phone" aria-hidden="true"></i> +91 8447901102 / 08068944544 
                          </div>
                          <div class='FContactUsText'>
                          <a href="#" className='FContactUsText'><i class="fa fa-envelope" aria-hidden="true"></i> abcdef@Studybox.com</a>
                          </div>  </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                     <Card style={{ width: '22rem' }} border="info" >
                        <Card.Img variant="top" src={institute2} />
                            <Card.Body className='CardBody '>
                                <Card.Title><h5 className='FContactUsText'><i className='fas fa-university'> </i>&nbsp;Study Box Mumbai</h5></Card.Title>
                                <Card.Text>
                                <p className='FContactUsText'>"Gulmohar IT Park", Ground Floor, Cross Rd Number 9 JVPD Scheme,  Juhu, Mumbai - 400049, MH-INDIA</p>

                                <div className='FContactUsText'>
                          <i class="fa fa-phone" aria-hidden="true"></i> +91 8447901238 / 08068947891
                          </div>
                          <div class='FContactUsText'>
                          <a href="#" className='FContactUsText'><i class="fa fa-envelope" aria-hidden="true"></i> abcdef@Studybox.com</a>
                          </div>  </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                     <Card style={{ width: '22rem' }}  border="info">
                        <Card.Img variant="top"  src={institute3} />
                            <Card.Body className='CardBody '>
                                <Card.Title><h5 className='FContactUsText'><i className='fas fa-university'> </i>&nbsp;Study Box Pune</h5></Card.Title>
                                <Card.Text>
                                <p className='FContactUsText'>"IT Institute", C-56/1, Anusandhan Bhawan, Institutional Area Villapur, Noida - 201307, UP-INDIA</p>

                                <div className='FContactUsText'>
                          <i class="fa fa-phone" aria-hidden="true"></i> +91 8487904802 / 08089574544 
                          </div>
                          <div class='FContactUsText'>
                          <a href="#" className='FContactUsText'><i class="fa fa-envelope" aria-hidden="true"></i> abcdef@Studybox.com</a>
                          </div>  </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        </div>
                        </div>
                </div>
                
        );
    }


}
export default ContactInfo;