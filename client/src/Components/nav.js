//NAVBAR 
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <ul>
              <li><a class="logo" href="#logo">Logo</a></li>
              <li><a href="#resorces">Resorces</a></li>
              <input class= "search" type="text" placeholder="Search.."></input>
              <li><a class="login" href="#Login">Login</a></li>
            </ul>
             
            </a> 
            <button
              className="navbar-toggler" 
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"               
              aria-expanded="false"
              aria-label="Toggle navigation"> 
              </button>
            </nav>

    )
}


export default Navbar;


//improved Navbar nvm let me see what i did wrong
