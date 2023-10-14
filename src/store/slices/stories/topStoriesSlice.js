/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";

import initTopStories from "../../services/stories";

const storiesSlice = createSlice({
  name: "stories",
  initialState: { stories: null, isLoading: true, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initTopStories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(initTopStories.fulfilled, (state, action) => {
      state.stories = action.payload;
      state.isLoading = false;
    });

    builder.addCase(initTopStories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUser } = storiesSlice.actions;
export default storiesSlice.reducer;
