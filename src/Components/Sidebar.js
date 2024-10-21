import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/add-accommodation">Add Accommodation</Link></li>
        <li><Link to="/manage-reservations">Manage Reservations</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
