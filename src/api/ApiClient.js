/* eslint-disable no-console */

import queryString from "query-string";

const TIMEOUT_ERROR = 25000;

export default class ApiClient {
  constructor({ apiUrl = "", apiPrefix = "", onError = () => {} }) {
    if (!apiUrl) {
      throw new Error("[apiUrl] required");
    }

    this.apiUrl = apiUrl;
    this.apiPrefix = apiPrefix;
    this.onError = onError;
  }

  async get(url, params) {
    return this.request({
      url,
      params,
      method: "GET",
    });
  }

  async request({ url, method, params = {} }) {
    const query = Object.keys(params).length
      ? `?${queryString.stringify(params, { arrayFormat: "comma" })}`
      : "";
    const requestUrl = `${this.apiUrl}/${this.apiPrefix}/${url}${query}`;
    const controller = new AbortController();
    const { signal } = controller;

    const options = {
      method,
      signal,
    };

    setTimeout(() => controller.abort(), TIMEOUT_ERROR);

    try {
      const res = await fetch(requestUrl, options);
      const json = await res.json();

      if (json.status === 0) {
        throw json;
      }

      return json;
    } catch (error) {
      this.handleServerError(error);

      throw error;
    }
  }

  handleServerError(error) {
    console.log("Server error: ", error);

    this.onError(error);
  }
}
