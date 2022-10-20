import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function SuppliersCard() {
    return (
        <div className='One'>
            <div className='border'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/Suppliers.png" />
                <Card.Body>
                <Card.Title>Suppliers</Card.Title>
                <Card.Text>
                    All the time you would spend researching suppliers cut down in one place, just for you! find the best suppliers now!
                </Card.Text>
                <Button className='button' variant="primary">Access Suppliers</Button>
                </Card.Body>
            </Card>
        </div>
      </div>
    );
  }

  export default SuppliersCard;