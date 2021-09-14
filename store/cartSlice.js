import {createSlice} from '@reduxjs/toolkit';
import floatCalc from '../utilis/floatPrice';

const initialState = {
  totalCartAmount: 0,
  totalCartItems: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add to cart
    addItemToCart: (state, action) => {
      const addedItem = action.payload;

      const existingItem = state.cartItems.find(
        item => item.id === addedItem.id,
      );
      state.totalCartItems += 1;

      if (!existingItem) {
        state.cartItems.push({
          id: addedItem.id,
          inCart: true,
          category: addedItem.category,
          name: addedItem.name,
          price: addedItem.price,
          image: addedItem.image,
          quantity: 1,
          totalProductPrice: Number(addedItem.price),
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalProductPrice = Number(
          floatCalc(
            Number(existingItem.totalProductPrice) + Number(addedItem.price),
          ),
        );
      }
      state.totalCartAmount = state.cartItems.reduce(
        (prev, current) => prev + current.totalProductPrice,
        0,
      );
    },

    // remove from cart

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      state.totalCartItems -= 1;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
        state.totalCartAmount = Number(
          floatCalc(Number(state.totalCartAmount) - Number(existingItem.price)),
        );
      } else {
        existingItem.quantity -= 1;
        existingItem.totalProductPrice = Number(
          floatCalc(
            Number(existingItem.totalProductPrice) - Number(existingItem.price),
          ),
        );
        state.totalCartAmount = Number(
          floatCalc(Number(state.totalCartAmount) - Number(existingItem.price)),
        );
      }
    },

    removeCompletely: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      state.totalCartAmount =
        state.totalCartAmount - existingItem.totalProductPrice;

      state.cartItems = state.cartItems.filter(item => item.id !== id);
      console.log(state.cartItems);
    },
  },
});

export const {addItemToCart, removeItemFromCart, removeCompletely} =
  cartSlice.actions;
export default cartSlice.reducer;
