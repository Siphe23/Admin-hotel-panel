import React from 'react';
import ReservationList from '../components/ReservationList';
import Sidebar from '../components/Sidebar';

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
