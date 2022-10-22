import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Logo from "./assets/calendly.PNG";

//Info Card - User Option - marta
function OneCard() {
    return (
      <div className='One'>
        
          <Card style={{ width: '18rem' }}>
            <Card.Img className= "image"variant="top" src={Logo}/>
            <div className='border'>
            <Card.Body>
            
              <Card.Title>1-ON-1</Card.Title>
              <Card.Text>
                Need some guidance on getting started? We got you covered. Book a 1-on-1 to learn how to navigate all of our available resources!
              </Card.Text>
              <Button className= "button" variant="primary" href="https://calendly.com/martabiedes/30min">Book Now! </Button>
            </Card.Body>
            </div>
          </Card>
        
      </div>
    );
  }

  export default OneCard;
