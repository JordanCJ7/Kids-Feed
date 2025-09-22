import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mealsServed: 0,
  totalMealsNeeded: 1000,
  mealDistribution: [],
  loading: false,
  error: null,
};

export const mealSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMealsServed: (state, action) => {
      state.mealsServed = action.payload;
    },
    updateMealDistribution: (state, action) => {
      state.mealDistribution = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMealsServed, updateMealDistribution, setLoading, setError } = mealSlice.actions;

export default mealSlice.reducer;