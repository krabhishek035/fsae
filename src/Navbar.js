import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Sponsors</a></li>
        <li className="nav-item"><a href="#">Acheivements</a></li>
        <li className="nav-item"><a href="#">Team Members</a></li>
        <li className="nav-item"><a href="#">Blog Page</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;