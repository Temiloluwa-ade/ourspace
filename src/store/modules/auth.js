import axios from "axios";
const state = {
  user: null
};

const getters = {
  isAuthenticated: state > !!state.user,
  StateUser: (state) => state.user,
};
const actions = {
  async Login({ commit }, user) {
    await axios.post("login", user);
    await commit("setUser", user.get("username"));
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  logou(state, user) {
    state.user = user;
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
}