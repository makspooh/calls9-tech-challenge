/* eslint-disable no-console */

import apiFactory from "./api";

const api = apiFactory({
  apiUrl: process.env.REACT_APP_API_URL,
  apiPrefix: process.env.REACT_APP_API_PREFIX,
  onError: (error) => console.error("Connection error: ", error),
});

export default api;
