import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/login';
import Banner from './Components/banner';
import Body from './Components/body';
import Homepage from './Components/homepage';
import Searchbar from './Components/searchbar';
import Navbar from './Components/navbar';
import Footer from './Components/footer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
    <Navbar/>
    <Banner />
    
    <App/>
    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
