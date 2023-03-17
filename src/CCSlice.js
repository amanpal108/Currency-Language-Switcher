import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCurrency: 'usd',
  selectedLocale: 'en-US',
};

const currencyCountrySlice = createSlice({
  name: 'currencyCountry',
  initialState,
  reducers: {
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
    setSelectedLocale: (state, action) => {
      state.selectedLocale = action.payload;
    },
  },
});

export const { setSelectedCurrency, setSelectedLocale } = currencyCountrySlice.actions;

export default currencyCountrySlice.reducer;
