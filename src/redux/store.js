import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/cryptoSlice';
import { REDUX_DEVTOOLS } from '../config/globals';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  devTools: REDUX_DEVTOOLS || false,
});

export default store;
