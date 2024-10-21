import React from 'react';
import AccommodationForm from '../components/AccommodationForm';
import Sidebar from '../components/Sidebar';

const AddAccommodation = () => {
  return (
    <div className="add-accommodation">
      <Sidebar />
      <div className="add-accommodation-content">
        <h1>Add Accommodation</h1>
        <AccommodationForm />
      </div>
    </div>
  );
};

export default AddAccommodation;

