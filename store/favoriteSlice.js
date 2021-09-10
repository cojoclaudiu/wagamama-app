import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  totalItems: 0,
  favItems: [],
};

/**
   {
      id: null,
      name: null,
      image: null,
      category: null,
      price: null,
    },
 */

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    // add item to favorite
    addToFavorite: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.favItems.find(
        item => item.id === itemToAdd.id,
      );

      // if the item doesn't exit we push it
      if (!existingItem) {
        state.favItems.push({
          id: itemToAdd.id,
          name: itemToAdd.name,
          image: itemToAdd.imageUrl,
          price: itemToAdd.price,
        });

        state.totalItems += 1;
      }
    },
  },
});

export const {addToFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
