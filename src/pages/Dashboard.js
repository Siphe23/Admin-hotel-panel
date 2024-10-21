import React from 'react';
import ReservationList from '../Components/ReservationList';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <ReservationList />
      </div>
    </div>
  );
};

export default Dashboard;
