import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "toggle",
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
export default dropdownSlice;
