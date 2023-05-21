import { createSlice } from "@reduxjs/toolkit";

export const stateArray = createSlice({
  name: "arrayTest",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart = [...state.cart, ...[action.payload]];
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteFromCart } = stateArray.actions;
export default stateArray.reducer;
