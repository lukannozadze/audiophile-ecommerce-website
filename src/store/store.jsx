import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slicer";
import checkoutSlice from "./checkout-slicer";
import dropdownSlice from "./dropdownToggler";
import productsSlice from "./products-slicer";
const store = configureStore({
  reducer: {
    dropdown: dropdownSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
export const dropdownActions = dropdownSlice.actions;
export const cartActions = cartSlice.actions;
export const CheckoutActions = checkoutSlice.actions;
export const productsActions = productsSlice.actions;
