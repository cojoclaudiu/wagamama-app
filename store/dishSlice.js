import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: null,
};

export const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {
    setId: (state, action) => {
      const data = action.payload;
      state.id = data.id;
    },
  },
});

export const {setId} = dishSlice.actions;

export default dishSlice.reducer;
