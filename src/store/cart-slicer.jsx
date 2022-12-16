import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { modalIsShown: false },
  reducers: {
    toggle(state) {
      state.modalIsShown = !state.modalIsShown;
    },
    modalOff(state) {
      state.modalIsShown = false;
    },
  },
});
export default cartSlice;
