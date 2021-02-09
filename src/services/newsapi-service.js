import axios from "axios";
import CONSTANTS from "../constants";

export default class NewsApiService {
  apiUrl = CONSTANTS.apiUrl;
  apiKey = CONSTANTS.apiKey;

  async topHeadlines(country = "us", category = "general") {
    const res = await axios.get(
      `${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`
    );
    return await res.data;
  }

  async everithing(query) {
    const res = await axios.get(
      `${this.apiUrl}/everything?q=${query}&apiKey=${this.apiKey}`
    );
    return await res.data;
  }
}
