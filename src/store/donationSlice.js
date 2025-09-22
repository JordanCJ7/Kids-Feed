import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalDonations: 0,
  donationGoal: 5000,
  recentDonations: [],
  loading: false,
  error: null,
};

export const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    addDonation: (state, action) => {
      state.totalDonations += action.payload.amount;
      state.recentDonations.unshift(action.payload);
      if (state.recentDonations.length > 10) {
        state.recentDonations.pop();
      }
    },
    setTotalDonations: (state, action) => {
      state.totalDonations = action.payload;
    },
    setDonationGoal: (state, action) => {
      state.donationGoal = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addDonation, setTotalDonations, setDonationGoal, setLoading, setError } = donationSlice.actions;

export default donationSlice.reducer;