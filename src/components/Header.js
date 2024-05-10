import React, { useState } from "react";
import './Header.css'
import NavSidebar from "./NavSideBar";

function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header className="header">
      <span className="logo">
        <img src={process.env.PUBLIC_URL + '/Images/Libra Serif Modern.png'} alt="Culture Logo" />
      </span>

      <button className="toggle" onClick={toggleSidebar}></button>

      {/* Pass sidebarVisible state and toggleSidebar function to NavSidebar */}
      <NavSidebar isSidebarOpen={sidebarVisible} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
