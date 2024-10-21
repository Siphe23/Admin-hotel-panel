import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

// Async thunk to fetch reservations
export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async () => {
  const snapshot = await getDocs(collection(db, 'reservations'));
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: { reservations: [], status: 'idle', error: null },
  reducers: {
    approveReservation(state, action) {
      const index = state.reservations.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.reservations[index].status = 'approved';
      }
    },
    cancelReservation(state, action) {
      state.reservations = state.reservations.filter(r => r.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { approveReservation, cancelReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
