import { computed, watch, ref } from 'vue';
import { useStore } from 'vuex';

export function usePermissions() {
  const store = useStore();
  const isDataLoaded = ref(false);
  
  const isInstructorOnline = computed(() => store.getters['auth/is_online']);
  const userRole = computed(() => store.getters['auth/userRole']);
  const currentUser = computed(() => store.getters['auth/currentUser']);
  const user_type = computed(()=> store.getters['auth/user_type']);
  const is_instructor_online= computed(()=> store.getters['auth/is_online']);
  
  const hasPermission = (permission) => {
    if (permission === 'all') return true;    
    if (permission === 'instructor') return user_type.value == 1 && isInstructorOnline.value;
    if (permission === 'student') return user_type.value == 2;
    return true;
  };

 
  store.dispatch('auth/fetchUserData').then(() => {
    isDataLoaded.value = true;
    console.log('User Type:', user_type.value);
    console.log('Is Instructor Online:', is_instructor_online.value);
  }).catch(error => {
    console.error('Failed to fetch user data:', error);
  });


  watch([user_type, is_instructor_online], ([newUserType, newIsInstructorOnline]) => {
    if (isDataLoaded.value) {
      console.log('User Type Updated:', newUserType);
      console.log('Is Instructor Online Updated:', newIsInstructorOnline);
    }
  });

  return {
    hasPermission,
    isInstructorOnline,
    userRole,
    user_type,
    is_instructor_online,
    isDataLoaded
  };
} 