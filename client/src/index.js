import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/App.css';
import App from './Components/App';
import Login from './Components/login';

import OneCard from './Components/OneCard';
import SuppliersCard from './Components/SuppliersCard';
import BlogCard from './Components/BlogCard';
import Body from './Components/body';
import BlogCard from './Components/BlogCard';
import OneCard from './Components/OneCard';
import Navigation from './Components/navbar';
import Footer from './Components/footer';
import reportWebVitals from './reportWebVitals';
import SuppliersCard from './Components/SuppliersCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Login/>
    
    <Body/>
    <BlogCard/>
    <OneCard/>
    <SuppliersCard/>
    <Footer/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
