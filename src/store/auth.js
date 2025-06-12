// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null,
//     token: localStorage.getItem('auth_token') || null,
//     roles: null,
//     permissions: [],
//     isInitialized: false,
//     isLoading: false,
//     user_id: null,
//     employee_id: null,
//     type_id: null,
//   }),

//   actions: {
//     setUser(userData, token) {
//       this.user = userData;
//       this.token = token;
//       this.roles = userData.role;
//       this.permissions = userData.permissions || [];
//       this.user_id = userData.user.id;
//       this.employee_id = userData.employee_id || null;
//       this.type_id = userData.user.type_id || null;
      
//       localStorage.setItem('auth_token', token);
//       localStorage.setItem('user_id', userData.user.id.toString());
//       if (userData.employee_id) {
//         localStorage.setItem('employee_id', userData.employee_id.toString());
//       }
//     },

//     logout() {
//       this.user = null;
//       this.token = null;
//       this.roles = null;
//       this.permissions = [];
//       this.isInitialized = false;
//       this.isLoading = false;
//       localStorage.removeItem('auth_token');
//       localStorage.removeItem('user_permissions');
//       localStorage.removeItem('user_id');
//       localStorage.removeItem('employee_id');
//     },

//     async initialize() {
//       if (this.isInitialized || this.isLoading) {
//         return;
//       }

//       const savedToken = localStorage.getItem('auth_token');
//       const savedPermissions = localStorage.getItem('user_permissions');

//       if (savedToken) {
//         this.isLoading = true;
//         try {
//           this.token = savedToken;

//           if (savedPermissions) {
//             this.permissions = JSON.parse(savedPermissions);
//           }

//           await this.fetchUserData();
//           this.isInitialized = true;
//         } catch (error) {
//           this.logout();
//           throw error;
//         } finally {
//           this.isLoading = false;
//         }
//       }
//     },

//     async fetchUserData() {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/user', {
//           headers: {
//             Authorization: `Bearer ${this.token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         const userData = response.data;
//         this.user = userData;
//         this.roles = userData.role;
//         this.permissions = userData.permissions || [];
//         this.employee_id = userData.employee_id || null;
//         this.type_id = userData.user.type_id || null;

//         localStorage.setItem('user_id', userData.user.id.toString());
//         if (userData.employee_id) {
//           localStorage.setItem('employee_id', userData.employee_id.toString());
//         }

//         return userData;
//       } catch (error) {
//         this.logout();
//         throw error;
//       }
//     }
//   },

//   getters: {
//     isAuthenticated: (state) => !!state.token && state.isInitialized,
//     role: (state) => state.roles?.name ?? "لا شيئ",
//     hasPermission: (state) => (permissionName) => {
//       return state.permissions && state.permissions.some(permission => permission.name === permissionName);
//     },
//     isLoaded: (state) => state.isInitialized && !state.isLoading,
//     hasAnyPermissions: (state) => state.permissions && state.permissions.length > 0,
//     user_type: (state) => state.type_id
//   }
// }); 