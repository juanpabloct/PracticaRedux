import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counter";

const store = configureStore({
  reducer: {
    value: counterSlice.reducer,
  },
});
export { store };
