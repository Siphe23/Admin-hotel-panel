import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../Firebase/firebase';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

// Async thunk to fetch accommodations
export const fetchAccommodations = createAsyncThunk('accommodations/fetchAccommodations', async () => {
  const snapshot = await getDocs(collection(db, 'accommodations'));
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
});

const accommodationsSlice = createSlice({
  name: 'accommodations',
  initialState: { accommodations: [], status: 'idle', error: null },
  reducers: {
    addAccommodation(state, action) {
      state.accommodations.push(action.payload);
    },
    updateAccommodation(state, action) {
      const index = state.accommodations.findIndex(a => a.id === action.payload.id);
      state.accommodations[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccommodations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accommodations = action.payload;
      })
      .addCase(fetchAccommodations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addAccommodation, updateAccommodation } = accommodationsSlice.actions;
export default accommodationsSlice.reducer;

