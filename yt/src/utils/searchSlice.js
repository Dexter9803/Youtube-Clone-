import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const {cacheResults} = searchSlice.actions;




/**
 * Cache:
 * time complexity in array is 0(n)
 * time complexity in object is 0(1)
 */
