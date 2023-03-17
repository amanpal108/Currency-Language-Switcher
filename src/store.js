import { configureStore } from '@reduxjs/toolkit';
import currencyCountryReducer from './CCSlice';

const store = configureStore({
  reducer: {
    currencyCountry: currencyCountryReducer,
  },
});

export default store;
