<template>
  <div class="login-content">
    <div class="row">
      <!-- Login Banner -->
      <div class="col-md-6 login-bg d-none d-lg-flex">
        <div class="login-carousel">
          <div>
            <div class="login-carousel-section mb-3">
              <div class="login-banner">
                <img src="@/assets/img/auth/auth-1.svg" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h3 class="mb-2">
                  Welcome to <br />Dreams<span class="text-secondary">LMS</span> Courses.
                </h3>
                <p>
                  Platform designed to help organizations, educators, and learners manage,
                  deliver, and track learning and training activities.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="login-carousel-section mb-3">
              <div class="login-banner">
                <img src="@/assets/img/auth/auth-1.svg" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h3 class="mb-2">
                  Welcome to <br />Dreams<span class="text-secondary">LMS</span> Courses.
                </h3>
                <p>
                  Platform designed to help organizations, educators, and learners manage,
                  deliver, and track learning and training activities.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="login-carousel-section mb-3">
              <div class="login-banner">
                <img src="@/assets/img/auth/auth-1.svg" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h3 class="mb-2">
                  Welcome to <br />Dreams<span class="text-secondary">LMS</span> Courses.
                </h3>
                <p>
                  Platform designed to help organizations, educators, and learners manage,
                  deliver, and track learning and training activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Login Banner -->

      <div class="col-md-6 login-wrap-bg">
        <!-- Login -->
        <div class="login-wrapper">
          <div class="loginbox">
            <div class="w-100">
              <div class="d-flex align-items-center justify-content-between login-header">
                <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                <router-link to="/home/" class="link-1">Back to Home</router-link>
              </div>
              <div class="topic">
                <h1 class="fs-32 fw-bold">Set Password</h1>
                <p class="fw-normal fs-14 mb-0">
                  Your new password must be different from previous password
                </p>
              </div>
              <form @submit.prevent="submitForm" class="mb-3 pb-3">
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >New Password <span class="text-danger"> *</span></label
                  >
                  <div class="position-relative" id="passwordInput">
                    <input
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      :class="{ 'password-error': validationError }"
                      v-model="password"
                      @input="handlePasswordChange"
                    />
                    <span
                      @click="toggleShow"
                      class="isax toggle-passworda text-gray-7 fs-14"
                      :class="showPassword ? 'isax-eye' : 'isax-eye-slash'"
                    >
                    </span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                  <div
                    v-if="password"
                    id="passwordStrength"
                    style="display: flex"
                    :class="[
                      'password-strength',
                      strength === 'poor' ? 'poor-active' : '',
                      strength === 'weak' ? 'avg-active' : '',
                      strength === 'strong' ? 'strong-active' : '',
                      strength === 'heavy' ? 'heavy-active' : '',
                    ]"
                  >
                    <span
                      id="poor"
                      class="active"
                      :class="{ active: strength === 'poor' }"
                    ></span>
                    <span
                      id="weak"
                      class="active"
                      :class="{ active: strength === 'weak' }"
                    ></span>
                    <span
                      id="strong"
                      class="active"
                      :class="{ active: strength === 'strong' }"
                    ></span>
                    <span
                      id="heavy"
                      class="active"
                      :class="{ active: strength === 'heavy' }"
                    ></span>
                  </div>
                  <div class="mt-2" v-if="password" id="passwordInfo">
                    <span v-if="validationError === 1"></span>
                    <span v-else-if="validationError === 2" style="color: red"
                      >😠 Weak. Must contain at least 8 characters</span
                    >
                    <span v-else-if="validationError === 3" style="color: orange"
                      >😲 Average. Must contain at least 1 letter or number</span
                    >
                    <span v-else-if="validationError === 4" style="color: blue"
                      >🙂 Almost. Must contain a special symbol</span
                    >
                    <span v-else-if="validationError === 5" style="color: green"
                      >😊 Awesome! You have a secure password.</span
                    >
                  </div>
                </div>
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >Confirm Password <span class="text-danger"> *</span></label
                  >
                  <div class="position-relative">
                    <input
                      :type="showPasswordOne ? 'text' : 'password'"
                      class="pass-inputa form-control form-control-lg"
                    />
                    <span
                      @click="togglePasswordOne"
                      class="isax toggle-passworda text-gray-7 fs-14"
                      :class="showPasswordOne ? 'isax-eye' : 'isax-eye-slash'"
                    >
                    </span>
                  </div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-secondary btn-lg" type="submit">
                    Reset Password <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
export default {
  data() {
    return {
      password: "",
      showPassword: false,
      showPasswordOne: false,
      validationError: 0,
      strength: "",
      errors: {
        password: "",
      },
    };
  },
  components: {
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel() {
      return this.showPasswordOne ? "Hide" : "Show";
    },
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-dashboard");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    handlePasswordChange() {
      let passwordValue = this.password;
      let passwordLength = passwordValue.length;
      let poorPassword = /[a-z]/.test(passwordValue);
      let weakPassword = /(?=.*?[0-9])/.test(passwordValue);
      let strongPassword = /(?=.*?[#?!@$%^&*-])/.test(passwordValue);
      let whitespace = /^\s*$/.test(passwordValue);

      if (passwordValue !== "") {
        if (whitespace) {
          this.errors.password = "whitespaces are not allowed";
        } else {
          this.errors.password = "";
          this.poorPasswordStrength(
            passwordLength,
            poorPassword,
            weakPassword,
            strongPassword
          );
          this.weakPasswordStrength(
            passwordLength,
            poorPassword,
            weakPassword,
            strongPassword
          );
          this.strongPasswordStrength(
            passwordLength,
            poorPassword,
            weakPassword,
            strongPassword
          );
          this.heavyPasswordStrength(
            passwordLength,
            poorPassword,
            weakPassword,
            strongPassword
          );
        }
      } else {
        this.errors.password = "";
        this.validationError = 0;
        this.strength = "";
      }
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },

    poorPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
      if (passwordLength < 8) {
        this.validationError = 2;
        this.strength = "poor";
      }
    },

    weakPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
      if (passwordLength >= 8 && (poorPassword || weakPassword || strongPassword)) {
        this.validationError = 3;
        this.strength = "weak";
      }
    },

    strongPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
      if (passwordLength >= 8 && poorPassword && (weakPassword || strongPassword)) {
        this.validationError = 4;
        this.strength = "strong";
      }
    },

    heavyPasswordStrength(passwordLength, poorPassword, weakPassword, strongPassword) {
      if (passwordLength >= 8 && poorPassword && weakPassword && strongPassword) {
        this.validationError = 5;
        this.strength = "heavy";
      }
    },
  },
};
</script>
