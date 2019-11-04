import axios from "axios";
// axios.defaults.headers.common["Content-Type"] =
//   "application/x-www-form-urlencoded";
const api = axios.create({
  baseURL: "http://13.209.4.48:3000/",
  headers: {
    // "X-Requested-With": "XMLHttpRequest",
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
    // console.log(email, typeof password);
    return api.post("signin", {
      email: email,
      password: password
    });
  },
  getCafeInfobyId: (id: number) => api.get(`cafe/${id}`),
  zoomIn: () => api.get(""),
  zoomOut: () => api.get(""),
  currentLocation: () => api.get(""),
  search: (term: string) => api.get("")
};
