import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccommodations } from '../features/accommodationsSlice';
import { fetchReservations } from '../features/reservationsSlice';
import { toast } from 'react-toastify';
import { db } from '../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';

const AdminHome = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const accommodations = useSelector((state) => state.accommodations.accommodationsList || []);
  const reservations = useSelector((state) => state.reservations.reservationsList || []);

  // Fetch accommodations and reservations when component mounts
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // Fetch accommodations from Firestore
        const accommodationsCollection = collection(db, 'accommodations');
        const accommodationsSnapshot = await getDocs(accommodationsCollection);
        const accommodationsData = accommodationsSnapshot.docs.map((doc) => doc.data());

        dispatch(fetchAccommodations(accommodationsData));

        // Fetch reservations from Firestore
        const reservationsCollection = collection(db, 'reservations');
        const reservationsSnapshot = await getDocs(reservationsCollection);
        const reservationsData = reservationsSnapshot.docs.map((doc) => doc.data());

        dispatch(fetchReservations(reservationsData));

        toast.success('Data successfully loaded!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        toast.error('Error fetching data from Firestore.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error('Error fetching data from Firestore: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="admin-home">
      <h1>Welcome to Admin Home</h1>
      <p>This is the home page for the admin panel. Here you can manage accommodations, reservations, and other hotel-related activities.</p>
      
      <div className="accommodations-list">
        <h2>Accommodations</h2>
        {accommodations.length ? (
          accommodations.map((accommodation, index) => (
            <div key={index}>
              <p>Room Type: {accommodation.roomType}</p>
              <p>Price: ${accommodation.price}</p>
              <p>Availability: {accommodation.availability}</p>
            </div>
          ))
        ) : (
          <p>No accommodations available.</p>
        )}
      </div>

      <div className="reservations-list">
        <h2>Reservations</h2>
        {reservations.length ? (
          reservations.map((reservation, index) => (
            <div key={index}>
              <p>Guest Name: {reservation.guestName}</p>
              <p>Room Type: {reservation.roomType}</p>
              <p>Check-in Date: {reservation.checkIn}</p>
              <p>Check-out Date: {reservation.checkOut}</p>
            </div>
          ))
        ) : (
          <p>No reservations available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminHome;

