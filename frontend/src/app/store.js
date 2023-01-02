import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from "../features/goals/goalSlice";

//Creates the Redux store and also automatically configures the Redux DevTools extension so that you can inspect the store while developing.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
  },
});
