import {configureStore} from '@reduxjs/toolkit';
import dishReducer from '../store/dishSlice';
import categoryReducer from '../store/categorySlice';

export const store = configureStore({
  reducer: {
    dishId: dishReducer,
    category: categoryReducer,
  },
});
