import React from 'react';
import ReservationList from '../components/ReservationList';
import Sidebar from '../components/Sidebar';

const ManageReservations = () => {
  return (
    <div className="manage-reservations">
      <Sidebar />
      <div className="manage-reservations-content">
        <h1>Manage Reservations</h1>
        <ReservationList />
      </div>
    </div>
  );
};

export default ManageReservations;
