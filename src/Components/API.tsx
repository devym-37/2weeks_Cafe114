import axios from "axios";

const api = axios.create({
  baseURL: "http://13.209.4.48:3000/",
  // baseURL: "http://127.0.0.1:3000/",
  headers: {
    "content-type": "application/json"
  },
  withCredentials: true
});

export const serverApi = {
  getAllCafes: () => api.get("cafe"),
  login: (email: string, password: string) => {
    return api.post("signin", {
      email,
      password
    });
  },
  getCafeInfobyId: (id: number) => api.get(`cafe/${id}`),
  validateEmail: (email: string) => api.post("signup/email", { email }),
  signup: (email: string, password: string, name: string, gender: number) =>
    api.post("signup", { email, password, name, sex: gender }),
  signout: () => api.get("signout"),
  getUserInfo: () => api.get("user/mypage"),
  loginkakao: (id: number) => api.post("signin/kakao", { kakao: { id } })
};
