import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slicer";
import dropdownSlice from "./dropdownToggler";
const store = configureStore({
  reducer: { dropdown: dropdownSlice.reducer, cart: cartSlice.reducer },
});

export default store;
export const dropdownActions = dropdownSlice.actions;
export const cartActions = cartSlice.actions;
