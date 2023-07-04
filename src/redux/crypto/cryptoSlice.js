import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/globals";

const initialState = {
  cryptos: [],
  stats: {},
  title: "Crypto Trend",
  isLoading: true,
  error: "",
  active: null,
};

export const fetchCrypto = createAsyncThunk("crypto/fetchCrypto", async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setActiveCoin: (state, action) => {
      state.active = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cryptos = action.payload.coins;
        state.stats = action.payload.stats;
        state.error = "";
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});

export const { setTitle, setActiveCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
