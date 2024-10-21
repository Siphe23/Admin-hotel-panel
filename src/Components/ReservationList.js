import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations } from '../features/reservationsSlice';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const status = useSelector((state) => state.reservations.status);
  const error = useSelector((state) => state.reservations.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Reservations</h2>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.guestName} - {reservation.roomType} - {reservation.checkInDate} to {reservation.checkOutDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
