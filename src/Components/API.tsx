import axios from "axios";

const api = axios.create({
  baseURL: "",
  params: {
    api_key: ""
  }
});

export const mapApi = {
  getMap: () => api.get(""),
  zoomIn: () => api.get(""),
  zoomOut: () => api.get(""),
  currentLocation: () => api.get("")
};
