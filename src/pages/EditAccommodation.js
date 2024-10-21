import React from 'react';
import AccommodationForm from '../components/AccommodationForm';
import Sidebar from '../components/Sidebar';

const EditAccommodation = () => {
  // You can fetch the accommodation details here to populate the form
  return (
    <div className="edit-accommodation">
      <Sidebar />
      <div className="edit-accommodation-content">
        <h1>Edit Accommodation</h1>
        <AccommodationForm />
      </div>
    </div>
  );
};

export default EditAccommodation;