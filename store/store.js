import {configureStore} from '@reduxjs/toolkit';
import dishReducer from '../store/dishSlice';
import categoryReducer from '../store/categorySlice';
import favoriteReducer from '../store/favoriteSlice';

export const store = configureStore({
  reducer: {
    dishId: dishReducer,
    category: categoryReducer,
    favorite: favoriteReducer,
  },
});
