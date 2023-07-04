import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./crypto/cryptoSlice";
const REDUX_DEVTOOLS = true;

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  devTools: REDUX_DEVTOOLS || false,
});

export default store;
