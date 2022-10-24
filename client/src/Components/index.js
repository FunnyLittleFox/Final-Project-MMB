//marta
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Components/App.css';
import App from './App';
import Login from './login';
//import
import Navigation from './navbar';
import Footer from './footer';
import reportWebVitals from '../reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //call upon
 <React.StrictMode>
    <div className='eh'>
      <Navigation/> 
      <Login/>
    </div>

  <div>
    <Body/>
    <BlogCard/>
    <OneCard/>
    <SuppliersCard/>
  </div>
    
    <Footer/>
  </React.StrictMode>
);


reportWebVitals();
