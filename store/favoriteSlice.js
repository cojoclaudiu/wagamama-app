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
          isFavorite: itemToAdd.isFavorite,
          id: itemToAdd.id,
          category: itemToAdd.category,
          name: itemToAdd.name,
          image: itemToAdd.image,
          price: itemToAdd.price,
        });
        state.isFavorite = true;
        state.totalItems += 1;
      }
    },

    // remove from favorite
    removeFromFavorite: (state, action) => {
      const id = action.payload;
      const newItemList = state.favItems.filter(item => item.id !== id);

      state.favItems = newItemList;
      state.isFavorite = false;
      state.totalItems -= 1;
    },
  },
});

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
