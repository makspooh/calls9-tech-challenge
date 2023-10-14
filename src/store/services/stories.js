/* eslint-disable no-console */

import { createAsyncThunk } from "@reduxjs/toolkit";

const initTopStories = createAsyncThunk("user/fetchUser", async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);

    console.log(response);
  } catch (error) {
    console.error(`initTopStories error: ${error}`);
  }
});

export default initTopStories;
