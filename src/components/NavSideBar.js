import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const NavSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      
<div>
      <ul className={`menu ${isSidebarOpen ? 'active' : ''}`}>
        <li className='menu'><Link to="/Events">Events</Link></li>
        {/* <li className='menu'><Link to="/Events/Sports">Sports</Link></li>
        <li className='menu'><Link to="/Events/Festivals">Festivals</Link></li>
        <li className='menu'><Link to="/Events/Business">Business</Link></li> */}
         <li className='menu'><Link to="/About">About</Link></li>
        <li className='menu'><Link to="/Events/Form">EventForm</Link></li>
      </ul>
    </div>
    </div>
  );
};

export default NavSidebar;



