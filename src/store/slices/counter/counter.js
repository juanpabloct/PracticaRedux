import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0, time: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
      state.time++;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
    reduce: (state) => {
      state.value--;
      state.time++;
    },
    reset: (state) => {
      state.value = 0;
      state.time++;
    },
  },
});
export const { increment, reduce, reset, incrementBy } = counterSlice.actions;
export default counterSlice;
