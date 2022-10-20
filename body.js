import React from 'react'
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/Button'
import styled from 'styled-components';
const BodySection = ({myData}) => {
    // console.log(myData)
    const {name}=myData;
  return (
    <Wrapper>
     <div className='container'>
        <div className="grid grid-two-column">
            <div className="body-section-data">
            <p className="intro-data">Welcome to </p>
                <h1>{name}</h1>
                <p>As a small business owner you already do so much on your own, let us help you out! 
                Check out our resources, blog posts, and more!</p>
             <NavLink>
                <Button>Shop Now</Button>
             </NavLink>
            </div>
            <div className="body-section-image">
         <figure>
            <img src="images/body.jpg" alt="body-section-photo" className="img-style"/>
         </figure>
            </div>
        </div>
     </div>
    </Wrapper>
  )
} 
function InfoCard() {
   return (
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>Blog</Card.Title>
         <Card.Text>
           Bloggers.org's top Business Blogs of 2022! Get all the tips and tricks you need from the best blogs!
         </Card.Text>
         <Button variant="primary">Access Now</Button>
       </Card.Body>
     </Card>
   );
 }

 function InfoCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Suppliers</Card.Title>
        <Card.Text>
          All the time you would spend researching suppliers cut down in one place, just for you! find the best suppliers now!
        </Card.Text>
        <Button variant="primary">Access Suppliers</Button>
      </Card.Body>
    </Card>
  );
}
 
 export default BasicExample;