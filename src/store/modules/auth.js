import axios from 'axios';

export default {
  namespaced: true,
  
  state: () => ({
    user: null,
    token: localStorage.getItem('auth_token') || null,
    roles: null,
    permissions: [],
    isInitialized: false,
    isLoading: false,
    user_id: null,
    employee_id: null,
    type_id: null,
    is_instructor_online: false
  }),

  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      state.roles = userData.role;
      state.permissions = userData.permissions || [];
      state.user_id = userData.user.id;
      state.employee_id = userData.employee_id || null;
      state.type_id = userData.user.type_id || null;
      state.is_instructor_online = userData.user.is_online_instrunctor == 1 ? true : false;
      state.isInitialized = true;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('auth_token', token);
    },
    SET_INITIALIZED(state, value) {
      state.isInitialized = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    CLEAR_AUTH(state) {
      state.user = null;
      state.token = null;
      state.roles = null;
      state.permissions = [];
      state.isInitialized = false;
      state.isLoading = false;
      state.user_id = null;
      state.is_instructor_online = false;
      state.employee_id = null;
      state.type_id = null;
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      localStorage.removeItem('permissions');
      localStorage.removeItem('user_id');
      localStorage.removeItem('employee_id');
    }
  },

  actions: {
    setUser({ commit }, { userData, token }) {
      commit('SET_USER', userData);
      commit('SET_TOKEN', token);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('role', JSON.stringify(userData.role));
      localStorage.setItem('permissions', JSON.stringify(userData.permissions || []));
      localStorage.setItem('user_id', userData.user.id.toString());
      if (userData.employee_id) {
        localStorage.setItem('employee_id', userData.employee_id.toString());
      }
    },

    logout({ commit }) {
      commit('CLEAR_AUTH');
    },

    async initialize({ commit, state, dispatch }) {
      if (state.isInitialized || state.isLoading) {
        return;
      }

      const savedToken = localStorage.getItem('auth_token');
      const savedUser = localStorage.getItem('user');

      if (savedToken) {
        commit('SET_LOADING', true);
        try {
          commit('SET_TOKEN', savedToken);

          if (savedUser) {
            commit('SET_USER', JSON.parse(savedUser));
          }

          await dispatch('fetchUserData');
        } catch (error) {
          console.error('Error initializing auth:', error);
          dispatch('logout');
          throw error;
        } finally {
          commit('SET_LOADING', false);
        }
      }
    },

    async fetchUserData({ commit, state }) {
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          throw new Error('No auth token found');
        }
       
        const response = await axios.get('http://127.0.0.1:8000/user', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const userData = response.data;
        commit('SET_USER', userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('role', JSON.stringify(userData.role));
        localStorage.setItem('permissions', JSON.stringify(userData.permissions || []));
        localStorage.setItem('user_id', userData.user.id.toString());
        if (userData.employee_id) {
          localStorage.setItem('employee_id', userData.employee_id.toString());
        }

        return userData;
      } catch (error) {
        console.error('Error fetching user data:', error);
        commit('CLEAR_AUTH');
        throw error;
      }
    }
  },

  getters: {
    isAuthenticated: state => !!state.token && state.isInitialized && !!state.user,
    currentUser: state => state.user,
    role: state => state.roles?.name ?? "لا شيئ",
    hasPermission: state => permissionName => {
      return state.permissions && state.permissions.some(permission => permission.name === permissionName);
    },
    isLoaded: state => state.isInitialized && !state.isLoading,
    hasAnyPermissions: state => state.permissions && state.permissions.length > 0,
    user_type: state => state.type_id,
    is_online: state => state.is_instructor_online,
  }
}; 