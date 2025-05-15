<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Settings</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <!-- profile box -->
      <student-header></student-header>
      <!-- profile box -->
      <div class="row">
        <!-- sidebar -->
        <student-sidebar></student-sidebar>
        <!-- sidebar -->
        <div class="col-lg-9">
          <div class="mb-3">
            <h5>Settings</h5>
          </div>

          <student-settings-sidebar></student-settings-sidebar>
          <div class="card mb-0">
            <div class="card-body">
              <div class="border-bottom mb-4 pb-4">
                <div class="row">
                  <div class="col-md-8">
                    <div class="mb-3">
                      <h5 class="mb-1 fs-18">Change Password</h5>
                      <p>
                        Can't remember your current password? <a
                          href="#"
                          class="text-decoration-underline"
                          >Reset your password via email</a
                        >
                      </p>
                    </div>
                    <form @submit.prevent="submitForm">
                      <div class="mb-3 position-relative">
                        <label class="form-label"
                          >Current Password <span class="text-danger"> *</span></label
                        >
                        <div class="position-relative">
                          <input
                            :type="showPasswordOne ? 'text' : 'password'"
                            class="pass-inputa form-control"
                          />
                          <span
                            @click="togglePasswordOne"
                            class="isax toggle-passworda text-gray-7 fs-14"
                            :class="showPasswordOne ? 'isax-eye' : 'isax-eye-slash'"
                          >
                          </span>
                        </div>
                      </div>
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
                            :type="showPasswordTwo ? 'text' : 'password'"
                            class="pass-inputa form-control form-control-lg"
                          />
                          <span
                            @click="togglePasswordTwo"
                            class="isax toggle-passworda text-gray-7 fs-14"
                            :class="showPasswordTwo ? 'isax-eye' : 'isax-eye-slash'"
                          >
                          </span>
                        </div>
                      </div>
                      <div>
                        <button class="btn btn-secondary" type="submit">
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div class="mb-3">
                    <h5 class="mb-1 fs-18">Change Email</h5>
                    <p>
                      Your current email address is <a href="#" class="fw-semibold"
                        >richard@example.com</a
                      >
                    </p>
                  </div>
                  <form @submit.prevent="submitForm">
                    <div class="mb-3">
                      <label class="form-label"
                        >New Email Address <span class="text-danger"> *</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                    <div>
                      <button class="btn btn-secondary" type="submit">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-light rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Remove All</h4>
            <p class="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="#"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="#" class="btn btn-secondary rounded-pill">Yes, Remove All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import { Form, Field } from "vee-validate";
export default {
  data() {
    return {
      password: "",
      showPassword: false,
      showPasswordOne: false,
      showPasswordTwo: false,
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
    buttonLabel() {
      return this.showPasswordTwo ? "Hide" : "Show";
    },
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-change-password");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordOne() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    togglePasswordTwo() {
      this.showPasswordTwo = !this.showPasswordTwo;
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
