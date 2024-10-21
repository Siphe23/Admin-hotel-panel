import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAccommodation } from '../features/accommodationsSlice';

const AccommodationForm = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    capacity: '',
    price: '',
    availability: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccommodation(formData));
    // Here you can also add logic to add the accommodation to Firebase
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Room Type</label>
      <input type="text" name="roomType" value={formData.roomType} onChange={handleChange} />
      
      <label>Capacity</label>
      <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
      
      <label>Price</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} />
      
      <label>Availability</label>
      <input type="checkbox" name="availability" checked={formData.availability} onChange={handleChange} />
      
      <button type="submit">Add Accommodation</button>
    </form>
  );
};

export default AccommodationForm;
