import {configureStore} from '@reduxjs/toolkit';
import dishReducer from '../store/dishSlice';

export const store = configureStore({
  reducer: {
    dishId: dishReducer,
  },
});
