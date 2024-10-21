// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import accommodationsReducer from '../features/accommodationsSlice';
import reservationsReducer from '../features/reservationsSlice';
import authReducer from '../features/authSlice'; 

const store = configureStore({
  reducer: {
    accommodations: accommodationsReducer,
    reservations: reservationsReducer,
    auth: authReducer, 
  },
});

export default store; // Make sure you're using default export here


