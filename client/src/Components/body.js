//marta - Next steps: add image next to text. underneath three info cards with links attatched.
import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import './App.css';

const Body = () => {
    // console.log(myData)
    
  return (
    
     <div className='container'>
        <div className="grid grid-two-column">
            <div className="body-section-data">
            <p className="intro-data">Welcome to </p>
                <h1></h1>
                <p>As a small business owner you already do so much on your own, let us help you out! 
                Check out our resources, blog posts, and more!</p>
            </div>
            <div className="body-section-image">
         <figure>
            <img src="./images/body.JPG" alt="body-section-photo" className="img-style"/>
         </figure>
            </div>
        </div>
     </div>
    
  )
} 
export default Body;