import { configureStore } from '@reduxjs/toolkit';
import accommodationsReducer from '../features/accommodationsSlice';
import reservationsReducer from '../features/reservationsSlice';
import authReducer from '../features/authSlice'; 

export const store = configureStore({
  reducer: {
    accommodations: accommodationsReducer,
    reservations: reservationsReducer,
    auth: authReducer, 
  },
});
