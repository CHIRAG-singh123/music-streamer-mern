import { createSlice } from "@reduxjs/toolkit";

const additionalSlice = createSlice({
  name: "additional",
  initialState: {
    loading: true,
    expand: false,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
      return state;
    },
    setExpand: (state, { payload }) => {
      state.expand = payload;
      return state;
    },
  },
});

export const { setLoading, setExpand } = additionalSlice.actions;

export default additionalSlice.reducer;
