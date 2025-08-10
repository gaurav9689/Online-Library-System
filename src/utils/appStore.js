import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

// You can add middleware or devTools options here if needed
const appStore = configureStore({
  reducer: {
    book: bookReducer,
  },
  // Optional: Enable Redux DevTools only in development
  devTools: process.env.NODE_ENV !== "production",
});

export default appStore;
