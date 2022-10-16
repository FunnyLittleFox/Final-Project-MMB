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