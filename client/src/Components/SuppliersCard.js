//marta
import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Logo from "./assets/Suppliers.png";
function SuppliersCard() {
    return (
        <div className='One'>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img className="supImage" variant="top" src={Logo}/>
                <div className='border'>
                <Card.Body>
                <Card.Title>Suppliers</Card.Title>
                <Card.Text>
                    All the time you would spend researching suppliers cut down in one place, just for you! find the best suppliers now!
                </Card.Text>
                <Button className='button' variant="primary" href="">Access Suppliers</Button>
                </Card.Body>
                </div>
            </Card>
      </div>
    );
  }

  export default SuppliersCard;