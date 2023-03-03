import axios from "axios";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

//Les données Axios sont toujours retournées dans data (response.data)
export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);

    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
    );
    console.log(response.data.results);
    return response.data.results;
  }
}
