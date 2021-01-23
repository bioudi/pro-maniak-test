import axios from "axios";

export default {
  login(payload) {
    return axios
      .post("login", { email: payload.email, password: payload.password })
      .then((response) => {
        const user = response.data.data.user;
        const token = response.data.data.token;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        return { user, token };
      });
  },
  logout() {
    return axios
      .get("logout")
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      })
      .catch((error) => error);
  },
};
