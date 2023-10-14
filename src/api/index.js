import ApiClient from "./ApiClient";
import StoriesAPI from "./Stories";

export default function apiConstruct({ apiUrl, apiPrefix, onError }) {
  if (!apiUrl) {
    throw new Error("[apiUrl] required");
  }

  const apiClient = new ApiClient({
    apiUrl,
    apiPrefix,
    onError,
  });

  return {
    apiClient,
    stories: new StoriesAPI({ apiClient }),
  };
}
