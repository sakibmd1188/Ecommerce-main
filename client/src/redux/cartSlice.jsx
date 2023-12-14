import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    recentClickedProduct: null,
  },
  reducers: {
    addtoCart: (state, action) => {
      const productToAdd = action.payload;
      state.recentClickedProduct = productToAdd;
      // console.log(productToAdd);

      const existingProduct = state.cart.find(
        (item) => item.pro_id === productToAdd.pro_id
      );
      if (existingProduct) {
        existingProduct.quantity += productToAdd.quantity;
        existingProduct.totalAmount +=
          existingProduct.price * productToAdd.quantity;
      } else {
        productToAdd.totalAmount = productToAdd.price * productToAdd.quantity;
        state.cart.push(productToAdd);
      }
    },
    update: (state, action) => {
      const { pro_id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.pro_id === pro_id);
      console.log(quantity);
      if (existingProduct) {
        existingProduct.quantity = quantity;
        existingProduct.totalAmount = existingProduct.price * quantity;
      }
    },
    removeFromCart: (state, action) => {
      const pro_idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.pro_id !== pro_idToRemove);
    },
  },
});

export const selectTotalAmount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalAmount, 0);

export default cartSlice.reducer;
export const { addtoCart, update, removeFromCart, increment, setDisplayValue } =
  cartSlice.actions;
