import { configureStore } from '@reduxjs/toolkit';
import mealReducer from './mealSlice';
import donationReducer from './donationSlice';

export const store = configureStore({
  reducer: {
    meals: mealReducer,
    donations: donationReducer,
  },
});