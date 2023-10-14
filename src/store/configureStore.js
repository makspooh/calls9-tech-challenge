import { configureStore } from "@reduxjs/toolkit";

import topStoriesSlice from "./slices/stories/topStoriesSlice";

const store = configureStore({
  reducer: {
    topStories: topStoriesSlice,
  },
});

export default store;
