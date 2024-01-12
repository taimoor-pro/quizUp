  import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geospatials: null,
};

export const geospatialSlice = createSlice({
  name: "geospatial",
  initialState,
  reducers: {
    setGeospatials: (state, action) => {
      state.geospatials = action.payload;
      
    },
  },
});

export const { setGeospatials } = geospatialSlice.actions;

export default geospatialSlice.reducer;
