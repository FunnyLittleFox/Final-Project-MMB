import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

import './App.css'
//Info Card - User Option - marta
function BlogCard() {
    return (
      <div className='Blog'>
        <div className='border'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./assets/blog.PNG"/>
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Bloggers.org's top Business Blogs of 2022! Get all the tips and tricks you need from the best blogs!
              </Card.Text>
              <Button className='button' variant="primary" href="https://blogging.org/top-business-blogs/ ">Access Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }

  export default BlogCard;