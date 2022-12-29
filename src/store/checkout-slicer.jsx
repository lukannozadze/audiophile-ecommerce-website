import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { modalIsShown: false, isPermission: false },
  reducers: {
    modalOn(state) {
      state.modalIsShown = true;
    },
    modalOff(state) {
      state.modalIsShown = false;
    },
    setPermission(state) {
      state.isPermission = true;
    },
    removePermission(state) {
      state.isPermission = false;
    },
  },
});
export default checkoutSlice;
