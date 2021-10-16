import React, { Component } from "react";
import {Card,Button} from "react-bootstrap";
import { useState } from 'react';


const Testing =() =>{

  const[title , setTitle] = useState("JAVA");
  const[content , setContent] = useState("https://us02web.zoom.us/meeting/register/tZIuduGqqTwpG9QI9RtJSjGd-MLzaAfIgaD4");

  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);

        
  return (
            <>
  <Card className="text-center" >
  <Card.Header>Featured</Card.Header>
  <Card.Body >
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text >
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" >Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

            </>
        );

}

export default Testing;