import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//not sure if this right. 
import Card from 'react-bootstrap/Card';

const BodySection = ({myData}) => {
    // console.log(myDat
    let Wrapper;

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
             <button type="button"> b </button>              
             <Button>Shop Now</Button>
            </div>
            <div className="body-section-image">
         <figure>
            <img src="images/body.jpg" alt="body-section-photo" className="img-style"/>
         </figure>
            </div>
        </div>
     </div>
 
     </Wrapper>  
     );

function Card() {
   return (
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>Book a consulatation</Card.Title>
         <Card.Text>
           Book a 1 on 1 and learn how to start your own business with little capital from an expert! 
         </Card.Text>
         <Button variant="primary">Book Now</Button>
       </Card.Body>
     </Card>
   );
 }
 
 function Card() {
   return (
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>Find a Supplier</Card.Title>
         <Card.Text>
           Why spend hours on hours looking for a supplier when we've done it for you? You're just one click away! 
         </Card.Text>
         <Button variant="primary">Find Suppliers Now</Button>
       </Card.Body>
     </Card>
   );
 }

 function Card() {
   return (
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>Blog</Card.Title>
         <Card.Text>
           All the tips and tricks to build your business in one place! 
         </Card.Text>
         <Button variant="primary">Read the Blog</Button>
       </Card.Body>
     </Card>
   );
 }

export default Card;
  
export default BodySection;

} 
export default Body;
