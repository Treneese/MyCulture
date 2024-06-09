import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function NavSidebar() {
  return (
    
      
    <div>
    <ul className= 'menu'>
      <li className='menu'><Link to="/Events">Events</Link></li>
      <li className='menu'><Link to="/Events/Sports">Sports</Link></li>
      <li className='menu'><Link to="/Events/Festivals">Festivals</Link></li>
      <li className='menu'><Link to="/Events/Concerts">Concerts</Link></li>
      <li className='menu'><Link to="/Events/Business">Business</Link></li> 
       <li className='menu'><Link to="/About">Culture</Link></li>
      <li className='menu'><Link to="/Events/Form">EventForm</Link></li>
    </ul>
  </div>
  );
};

export default NavSidebar;



