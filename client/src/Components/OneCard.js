import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './images/body.jpg';
import styled from 'styled-components';

function OneCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../assets/calendly.png" />
        <Card.Body>
          <Card.Title>1-ON-1</Card.Title>
          <Card.Text>
            Need some guidance on getting started? We got you covered. Book a 1-on-1 to learn how to navigate all of our available resources!
          </Card.Text>
          <Button variant="primary" href="https://calendly.com/martabiedes/30min">Book Now! </Button>
        </Card.Body>
      </Card>
    );
  }

  export default OneCard;