// import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

// import NavSidebar from "./NavSideBar";

function Header() {


  return (
    <header className="header">
      <span className="logo">
        <img src={process.env.PUBLIC_URL + '/Images/Libra Serif Modern.png'} alt="Culture Logo" />
      </span>
      <div className="quote-box">
      <p className="quote">“A nation's culture resides in the hearts and in the soul of its people” by Mahatma Gandhi.</p>
      </div>
      
      {/* <div>
      <ul className= 'menu'>
        <li className='menu'><Link to="/Events">Events</Link></li>
        <li className='menu'><Link to="/Events/Sports">Sports</Link></li>
        <li className='menu'><Link to="/Events/Festivals">Festivals</Link></li>
        <li className='menu'><Link to="/Events/Business">Business</Link></li> 
         <li className='menu'><Link to="/About">Culture</Link></li>
        <li className='menu'><Link to="/Events/Form">EventForm</Link></li>
      </ul>
    </div> */}
      
    </header>
  );
};

export default Header;
