import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";

const store = configureStore({
  reducer: {
    value: counterSlice.reducer,
  },
});
export { store };
