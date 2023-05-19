import { createSlice } from "@reduxjs/toolkit";

export const stateArray = createSlice({
  name: "arrayTest",
  initialState: {
    cart: [],
  },
  reducers: {
    addData(state, action) {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { addData } = stateArray.actions;
export default stateArray.reducer;
