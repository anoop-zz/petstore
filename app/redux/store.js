import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "./stateArray";
export default configureStore({
  reducer: { array: arrayReducer },
});
