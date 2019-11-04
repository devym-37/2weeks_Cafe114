import axios from "axios";

const api = axios.create({
  baseURL: "http://13.209.4.48:3000/",
  headers: {
    "content-type": "application/json"
  }
});

interface ILogin {
  email: string;
  password: string;
}

const Data = { email: "joeun@gmail.com", password: "1234" };
const url = "http://13.209.4.48:3000/signin";

export const serverApi = {
  getAllCafes: () => api.get("cafe"),
  login: (email: string, password: string) => {
    return api.post("signin", {
      email,
      password
    });
  },
  getCafeInfobyId: (id: number) => api.get(`cafe/${id}`),
  checkEmail: (email: string) => api.post("signup/email", { email }),
  signup: (email: string, password: string) =>
    api.post("signup", { email, password }),
  zoomIn: () => api.get(""),
  zoomOut: () => api.get(""),
  currentLocation: () => api.get(""),
  search: (term: string) => api.get("")
};
