import { TOKEN_KEY, USER_KEY } from "@/constants";
import { login, create } from "@/api/user";

export default {
  state: {
    user: JSON.parse(localStorage.getItem(USER_KEY) || "{}"),
    token: localStorage.getItem(TOKEN_KEY)
  },
  actions: {
    create({ commit }, userData) {
      create(userData).then(userData => commit("setUser", userData));
    },
    login({ commit }, userData) {
      return login(userData).then(user => {
        commit("setUser", user);
        localStorage.setItem(TOKEN_KEY, user.token) || {};
        localStorage.setItem(USER_KEY, JSON.stringify(user.user)) || "";
      });
    },
    logout({ commit }) {
      commit("logoutUser");
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  },
  mutations: {
    setUser(state, { user, token }) {
      state.user = user;
      state.token = token;
    },
    logoutUser(state) {
      state.user = {};
      state.token = "";
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.token;
    },
    userName(state) {
      return state.user.username;
    },
    userId(state) {
      return state.user.pk;
    }
  }
};
