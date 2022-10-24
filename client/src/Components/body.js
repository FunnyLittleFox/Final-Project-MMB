//marta - links attached.
import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import './App.css';
import img from './assets/body.PNG';
const Body = () => {
    // console.log(myData)
  return (
    
     <div className='container'>
        <div className="grid grid-two-column">
            <div className="body-section-data">
            <p className="intro-data">Welcome!</p>
                <h1></h1>
                <p>As a small business owner you already do so much on your own, let us help you out! 
                Check out our resources, blog posts, and more!</p>
            </div>
            <div >
         <figure>
            <img className="body-section-image" src={img} alt="body-section-photo"/>
         </figure>
            </div>
        </div>
     </div>
    
  )
} 
export default Body;