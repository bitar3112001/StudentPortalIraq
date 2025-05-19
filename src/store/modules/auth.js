export default {
  namespaced: true,
  
  state: () => ({
    token: null,
    user: null
  }),

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_AUTH(state) {
      state.token = null;
      state.user = null;
    }
  },

  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token);
    },
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
    clearAuth({ commit }) {
      commit('CLEAR_AUTH');
    }
  },

  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.user,
    token: state => state.token
  }
}; 