// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHotel, FaUser, FaSignInAlt, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import '../assets/navbar.css';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="icon">
        <h1>HotelHub</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/adminhome"><FaHome /> Home</Link></li>
        <li><Link to="/admindashboard"><FaHotel /> Dashboard</Link></li>
        <li><Link to="/adminprofile"><FaUser /> Profile</Link></li>
        {isAuthenticated ? (
          <li><Link to="/adminlogout"><FaSignOutAlt /> Logout</Link></li>
        ) : (
          <>
            <li><Link to="/adminlogin"><FaSignInAlt /> Login</Link></li>
            <li><Link to="/adminsignup"><FaUserPlus /> Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
