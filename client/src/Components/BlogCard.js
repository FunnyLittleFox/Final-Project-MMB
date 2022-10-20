import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
//Info Card - User Option - marta
function BlogCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../assets/blog.png" />
        <Card.Body>
          <Card.Title>Blog</Card.Title>
          <Card.Text>
            Bloggers.org's top Business Blogs of 2022! Get all the tips and tricks you need from the best blogs!
          </Card.Text>
          <Button variant="primary" href="https://blogging.org/top-business-blogs/ ">Access Now</Button>
        </Card.Body>
      </Card>
    );
  }

  export default BlogCard;