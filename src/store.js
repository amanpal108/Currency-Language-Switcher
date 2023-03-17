import { configureStore } from '@reduxjs/toolkit';
import currencyCountryReducer from './currencyCountrySlice';

const store = configureStore({
  reducer: {
    currencyCountry: currencyCountryReducer,
  },
});

export default store;
