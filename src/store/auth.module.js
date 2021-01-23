import authService from "@/services/auth.service";
import router from "@/router";

const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = user
  ? { status: { loggedIn: true }, user, token }
  : { status: { loggedIn: false }, user: null, token: null };

export const auth = {
  namespaced: true,
  state: {
    ...initialState,
    error: false,
  },
  actions: {
    LOGIN({ commit }, payload) {
      return authService
        .login(payload)
        .then((response) => {
          commit("LOGIN_SUCCESS", response);
          router.push({ name: "Home" });
        })
        .catch(() => commit("LOGIN_FAILURE"));
    },
    LOGOUT({ commit }) {
      return authService.logout().then(() => {
        commit("LOGOUT");
        router.push({ name: "Home" });
      });
    },
  },
  mutations: {
    LOGIN_SUCCESS(state, payload) {
      state.status = { loggedIn: true };
      state.user = payload.user;
      state.token = payload.token;
      state.error = false;
    },
    LOGIN_FAILURE(state) {
      state.status = {};
      state.user = null;
      state.error = true;
    },
    LOGOUT(state) {
      state.status = {};
      state.user = null;
    },
  },
};
