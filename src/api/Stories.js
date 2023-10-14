import Base from "./Base";

export default class UsersAPI extends Base {
  listTop() {
    return this.apiClient.get("topstories.json");
  }

  getTop(id) {
    return this.apiClient.get(`item/${id}.json`);
  }
}
