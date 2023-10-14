/* eslint-disable no-console */

import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../apiSingleton";

const fetchStoryData = async (storyId) => {
  try {
    const response = await api.stories.getTop(storyId);
    return response;
  } catch (error) {
    console.error(`fetchStoryData ${storyId} error: ${error}`);

    throw error;
  }
};

const initTopStories = createAsyncThunk("stories/initTopStories", async () => {
  try {
    const response = await api.stories.listTop();
    const storyIdsToFetch = response.slice(0, 9);
    const storyPromises = storyIdsToFetch.map((storyId) =>
      fetchStoryData(storyId),
    );

    const storiesData = await Promise.all(storyPromises);

    return storiesData;
  } catch (error) {
    console.error(`initTopStories error: ${error}`);
    throw error;
  }
});

export default initTopStories;
