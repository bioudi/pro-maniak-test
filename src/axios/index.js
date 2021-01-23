import axios from "axios";

axios.defaults.baseURL = "http://ctb2.promaniak.com/api/";

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("user") && localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
