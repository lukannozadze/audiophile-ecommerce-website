import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "./dropdownToggler";
const store = configureStore({
  reducer: { dropdown: dropdownSlice.reducer },
});

export default store;
export const dropdownActions = dropdownSlice.actions;
