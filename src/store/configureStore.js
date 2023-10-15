import { configureStore } from "@reduxjs/toolkit";

import topStoriesSlice from "./slices/stories/topStoriesSlice";
import toastSlice from "./slices/toastSlice";

const store = configureStore({
  reducer: {
    topStories: topStoriesSlice,
    toast: toastSlice,
  },
});

export default store;
