import { configureStore } from "@reduxjs/toolkit";
import stacksReducer from "../features/stacks/stacksSlice";
export const store = configureStore({
  reducer: {
    stacks: stacksReducer,
  },
});
