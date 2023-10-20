import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i._id === item._id);
      //se o item já tiver no carrinho:
      if (existItem) {
        state.cartItems = state.cartItems.map(
          (i) => (i._id === existItem._id ? item : i) //mantém o item no carrrinho e não o substitui
        );
      } else {
        //se o item não estiver no carrinho ainda:
        state.cartItems = [...state.cartItems, item]; //adiciona o item
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i._id !== action.payload);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
