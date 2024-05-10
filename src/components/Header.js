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

      {/* <button className="toggle" onClick={() => setSidebarVisible(true)}/> */}
       <NavSidebar isSidebarOpen={sidebarVisible} toggleSidebar={toggleSidebar} /> 
   <p1>“A nation's culture resides in the hearts and in the soul of its people” by Mahatma Gandhi.
</p1>
    </header>
  );
};

export default Header;
