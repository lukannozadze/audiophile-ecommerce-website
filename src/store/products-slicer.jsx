import { createSlice } from "@reduxjs/toolkit";
import h1ImgPath from "../assets/First Model Headphone Images/xx992-tablet.png";
import h2ImgPath from "../assets/Second Model Headphone Images/xx9-mark-one.png";
import h3ImgPath from "../assets/Third Model Headphone Images/xx59.png";
import s1ImgPath from "../assets/First Model Speaker Images/zx9.png";
import s2ImgPath from "../assets/Second Model Speaker Images/zx7.png";
import e1ImgPath from "../assets/First Model Earphone Images/yx1.png";
const initialState =
  localStorage.getItem("cartItems") !== null
    ? {
        productsArr: JSON.parse(localStorage.getItem("cartItems")),
        totalPrice: parseInt(localStorage.getItem("totalPrice")),
      }
    : {
        productsArr: [
          {
            id: "h1",
            productShortName: "XX99 MK II",
            imgPath: h1ImgPath,
            price: 2999,
            quantity: 0,
          },
          {
            id: "h2",
            productShortName: "XX99 MK I",
            imgPath: h2ImgPath,
            price: 1750,
            quantity: 0,
          },
          {
            id: "h3",
            productShortName: "XX59",
            imgPath: h3ImgPath,
            price: 899,
            quantity: 0,
          },
          {
            id: "s1",
            productShortName: "ZX9",
            imgPath: s1ImgPath,
            price: 4500,
            quantity: 0,
          },
          {
            id: "s2",
            productShortName: "ZX7",
            imgPath: s2ImgPath,
            price: 3500,
            quantity: 0,
          },
          {
            id: "e1",
            productShortName: "YX1",
            imgPath: e1ImgPath,

            price: 599,
            quantity: 0,
          },
        ],
        totalPrice: 0,
      };
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const cartItemsArr = state.productsArr.slice();
      const newItem = action.payload;
      cartItemsArr.forEach((item) => {
        if (item.id === newItem.id) {
          item.quantity = item.quantity + newItem.quantity;
          state.totalPrice = state.totalPrice + item.quantity * item.price;
        }
      });
      state.productsArr = cartItemsArr;
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
    },
    deleteAllItems(state) {
      const cartItemsArr = state.productsArr.slice();
      cartItemsArr.forEach((item) => {
        item.quantity = 0;
      });
      state.productsArr = cartItemsArr;
      state.totalPrice = 0;
      localStorage.removeItem("cartItems");
    },

    incrementQuantity(state, action) {
      const cartItemsArr = state.productsArr.slice();
      const newItemId = action.payload;
      cartItemsArr.forEach((item) => {
        if (item.id === newItemId) {
          item.quantity = item.quantity + 1;
          state.totalPrice = state.totalPrice + item.price;
        }
      });
      state.productsArr = cartItemsArr;
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
    },
    decrementQuantity(state, action) {
      const cartItemsArr = state.productsArr.slice();
      const newItemId = action.payload;
      cartItemsArr.forEach((item) => {
        if (item.id === newItemId) {
          item.quantity = item.quantity - 1;
          state.totalPrice = state.totalPrice - item.price;
        }
      });
      state.productsArr = cartItemsArr;
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("cartItems", JSON.stringify(cartItemsArr));
    },
  },
});
export default productsSlice;
