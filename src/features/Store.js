import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-named-as-default
import  CountrySlice  from './Country';


// eslint-disable-next-line import/prefer-default-export
export const Store = configureStore({
  reducer: {
   country:CountrySlice,
  },
});
