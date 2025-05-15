<template>
  <div class="lock-screen">
    <div class="lock-wrapper">
      <div class="d-flex align-items-center justify-content-center lock-header">
        <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
      </div>
      <div class="topic">
        <h1 class="fs-32 fw-bold mb-3 text-center">Welcome Back</h1>
      </div>
      <div class="d-flex align-items-center justify-content-center mb-4">
        <div class="text-center">
          <div class="user-profile rounded-circle mb-3">
            <img
              src="@/assets/img/user/user-02.jpg"
              alt="img"
              class="img-fluid rounded-circle"
            />
          </div>
          <h6 class="mb-0">Ronald Richard</h6>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="mb-3 pb-3">
        <div class="mb-3 position-relative">
          <label class="form-label">Password <span class="text-danger"> *</span></label>
          <div class="position-relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              class="pass-inputa form-control"
            />
            <span
              @click="togglePassword"
              class="isax toggle-passworda text-gray-7 fs-14"
              :class="showPassword ? 'isax-eye' : 'isax-eye-slash'"
            >
            </span>
          </div>
        </div>
        <div class="d-grid">
          <button class="btn btn-secondary btn-lg" type="submit">
            Sign In<i class="isax isax-arrow-right-3 ms-1"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-dashboard");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
