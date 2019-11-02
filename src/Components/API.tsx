import axios from "axios";
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
const api = axios.create({
  baseURL: "http://13.209.4.48:3000/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "content-type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": [
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS"
    ],
    "Access-Control-Allow-Headers": ["Origin", "Content-Type", "X-Auth-Token"]
  }
});

export const serverApi = {
  getAdress: () => api.get("cafe"),
  getMap: () => api.get(""),
  zoomIn: () => api.get(""),
  zoomOut: () => api.get(""),
  currentLocation: () => api.get(""),
  search: (term: string) => api.get("")
};
