import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { modalIsShown: false },
  reducers: {
    modalOn(state) {
      state.modalIsShown = true;
    },
    modalOff(state) {
      state.modalIsShown = false;
    },
  },
});
export default checkoutSlice;
