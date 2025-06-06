<template>
  <div class="instructor-profile">
    <div class="instructor-profile-bg">
      <img src="@/assets/img/bg/card-bg-01.png" class="instructor-profile-bg-1" alt="" />
    </div>
    <div class="row align-items-center row-gap-3">
      <div class="col-md-6">
        <div class="d-flex align-items-center">
          <span
            class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
            <img src="@/assets/img/user/user-01.jpg" alt="img" />
            <span class="verify-tick"><i class="isax isax-verify5"></i></span>
          </span>
          <div>
            <h5 class="mb-1 text-white d-inline-flex align-items-center">
              {{ userName }}<router-link to="/instructor/instructor-profile" class="link-light fs-16 ms-2"><i
                  class="isax isax-edit-2"></i></router-link>
            </h5>
            <p class="text-light">{{ userType }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
          <router-link to="/courses/add-course" class="btn btn-white rounded-pill">إضافة دورة جديدة</router-link>
          <router-link to="/students/student-dashboard" class="btn btn-secondary rounded-pill">لوحة التحكم</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.name || 'User 1';
      }
      return 'User 1';
    },
    userType() {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        // Get type name from the type relationship
        if (user.type && user.type.name) {
          return user.type.name;
        }
      }
      return 'User';
    }
  }
};
</script>
