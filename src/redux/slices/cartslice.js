import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice += newItem.price;
      }

      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    deleteItem: (state, action) => {
      const id = action.payload; // Extract the id from the action payload

      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== id); // Use !== instead of === to remove the item
        state.totalQuantity -= existingItem.quantity; // Subtract the quantity of the deleted item from totalQuantity
      }

      state.totalAmount = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  }
  //import {auth} from './firebase.config'
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
