import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Card} from 'react-bootstrap';


import image from './components/image.jpg';
import image5 from './components/image5.jpg';
import image2 from './components/image2.jpg';
import image3 from './components/image3.jpg';
import image4 from './components/image4.jpg';
import imagecard2 from './components/imagecard2.jpg'
import imagecard3 from './components/imagecard3.jpg'
import imagecard4 from './components/imagecard4.jpg'
import imagecard5 from './components/imagecard5.jpg'
import imagecard6 from './components/imagecard6.jpg'
import imagecard1 from './components/imagecard1.jpg'


import './Home.css'


class Home extends React.Component {

    render() {

        return (
            <div className='FrontImages'>

            <div className=' FAboutUs col-sm-12 col-md-12 col-lg-12' > 

            <div>
            <br></br><br></br><br></br><br></br>
            <h3 className='FAboutUsHeading'>ABOUT INSTITUTE</h3>
            <p  className='FAboutUsText '>
            At STUDY BOX we believe retaining a competitive edge is imperative for any individual in today's
             professional world. Companies are restructuring their organizations & reengineering their
              business processes. Not only have the challenges become more demanding, but also the rewards of 
              staying at the forefront seem to be promising.In this scenario, technical & personal skills which
               provide effective solutions & time critical support are of principal significance for the long term 
               growth of professionals. STUDY BOX's expertise in effectively delivering training, solutions & services 
               has made it a favored institution to many students & professionals focused on an aggressive career growth 
               strategy.</p>
               </div>
               </div>



                <br></br><br></br><br></br>
                   <h3 className='FrontHeader'>Gallery</h3>

                   <div className='container'>
                       <div className='row'>
                           <div className='col-sm-12 col-md-12 col-lg-12'>

                   <Carousel >
                      
                   <Carousel.Item>
                       <img src={image} className="img-fluid" width="1100" height="800" ></img>
                       <Carousel.Caption>
                            <h3 className='FrontText'>All time best placement track record</h3>
                        </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img src={image2} className="img-fluid" width="1100" height="800"></img>
                       <Carousel.Caption>
                            <h3 className='FrontText'>At Institute we believe retaining a competitive 
                            edge is imperative for any
                                 individual.</h3>
                        </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img src={image3} className="img-fluid" width="1100" height="800"></img>
                       <Carousel.Caption>
                            <h3 className='FrontText'>Alumni... Get Connected... Stay Connected</h3>
                        </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img src={image4} className="img-fluid" width="1100" height="800"></img>
                       <Carousel.Caption>
                            <h3 className='FrontText'>At Institute, we deliver the course effectively.</h3>
                        </Carousel.Caption>
                   </Carousel.Item>
                   <Carousel.Item>
                       <img src={image5} className="img-fluid" width="1100" height="800"></img>
                       <Carousel.Caption>
                            <h3 className='FrontText'>Social &amp; Cultural  Activities at Institute</h3>
                        </Carousel.Caption>
                   </Carousel.Item>
                

                   </Carousel>
                   </div>
                   </div>
                   </div>
                   <br></br><br></br><br></br>


                   <h3 className='FrontHeader'>TESTIMONIALS</h3>
                        
                        <br></br> <br></br>
                        <br></br>
                        <div className='container'>

                            <div className='row'>
                                <div className='col-md-6 col-lg-4'>
                     <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={imagecard2} />
                            <Card.Body className='CardBody '>
                                <Card.Title>Neha Banerjee</Card.Title>
                                <Card.Text>
                                STUDY BOX has laid the foundation to my successful career in IT. 
                                I remain grateful to Sarang Sir and the very capable team. Proud to remain associated
                                    </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagecard3}/>
                            <Card.Body className='CardBody'>
                                <Card.Title>Rajat Sharma</Card.Title>
                                <Card.Text>
                                We all hear that "practical knowledge is very important along with theory".
                                 The faculty is very good, masters in their respective fields. 
 
                                  </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagecard4} />
                            <Card.Body className='CardBody'>
                                <Card.Title>Preeti Verma</Card.Title>
                                <Card.Text>
                                STUDY BOX is an excellent institute for your career.
                                 I earned most precious knowledge here.
                                  Thanks a lot to the whole team of STUDY BOX. </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        
                        </div>

                        </div>
                        <br></br> <br></br> 

                        <div className='row'>
                                <div className='col-md-6 col-lg-4'>
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagecard5} />
                            <Card.Body className='CardBody'>
                                <Card.Title>Anjali Singh</Card.Title>
                                <Card.Text>
                                Great institute with excellent staff.
                                STUDY BOX has not only given technical knowledge but also helped 
                                 in self confidence. </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagecard6} />
                            <Card.Body className='CardBody'>
                                <Card.Title>Nitin Tripathi</Card.Title>
                                <Card.Text >
                                At STUDY BOX we are taught not just technologies but discipline and way of life. 
                                Great institute with excellent staff.
                                 Thank you so much.   </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        <br></br>
                        </div>
                        <div className='col-md-6 col-lg-4'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imagecard1} />
                            <Card.Body className='CardBody'>
                                <Card.Title>Srishti Tyagi</Card.Title>
                                <Card.Text>
                                STUDY BOX has laid the foundation to my successful career in IT. 
                                I remain grateful to Sarang Sir and the very capable team.
                                    </Card.Text>
                            
                            </Card.Body>
                        </Card>
                        </div>

                        </div>



                        </div>

                   </div>
        );
    }
}
export default Home;