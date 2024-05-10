import React from 'react';
import { Link } from 'react-router-dom';

const NavSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      

      <ul className={`menu ${isSidebarOpen ? 'active' : ''}`}>
        <li><Link to="/Events">Events</Link></li>
        <li><Link to="/Events/Sports">Sports</Link></li>
        <li><Link to="/Events/Festivals">Festivals</Link></li>
        <li><Link to="/Events/Business">Business</Link></li>
        <li><Link to="/Events/Form">EventForm</Link></li>
      </ul>
    </div>
  );
};

export default NavSidebar;



