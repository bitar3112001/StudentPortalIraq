<template>
  <div class="login-content">
    <div class="row">
      <!-- Login Banner -->
      <login-banner></login-banner>
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
              <h1 class="fs-32 fw-bold topic">Sign into Your Account</h1>
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
                class="mb-3 pb-3"
              >
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >Email<span class="text-danger ms-1">*</span></label
                  >
                  <Field
                    name="email"
                    type="text"
                    value="example@example.com"
                    class="form-control"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger mt-2" id="email"></div>
                  <span><i class="isax isax-sms input-icon text-gray-7 fs-14 mt-3"></i></span>
                </div>
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >Password <span class="text-danger"> *</span></label
                  >
                  <div class="position-relative">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      value="123456"
                      class="pass-inputa form-control"
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
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="remember-me d-flex align-items-center">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label ms-2" for="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                  <div class="">
                    <router-link to="forgot-password" class="link-2">
                      Forgot Password ?
                    </router-link>
                  </div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-secondary btn-lg" type="submit">
                    Login <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </Form>

              <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">
                Or
              </div>

              <div class="d-flex align-items-center justify-content-center mb-3">
                <a href="javascript:void(0);" class="btn btn-light me-2"
                  ><img
                    src="@/assets/img/icons/google.svg"
                    alt="img"
                    class="me-2"
                  />Google</a
                >
                <a href="javascript:void(0);" class="btn btn-light"
                  ><img
                    src="@/assets/img/icons/facebook.svg"
                    alt="img"
                    class="me-2"
                  />Facebook</a
                >
              </div>

              <div
                class="fs-14 fw-normal d-flex align-items-center justify-content-center"
              >
                Don't you have an account?<router-link to="/register" class="link-2 ms-1">
                  Sign up</router-link
                >
              </div>

              <!-- /Login -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { router } from "@/router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@example.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    const onSubmit = (values) => {
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push("/home/");
        } else {
          document.getElementById("password").innerHTML = "Incorrect password";
        }
      } else {
        document.getElementById("email").innerHTML = "Email is not valid";
      }
    };
    return {
      schema,
      onSubmit,
      checked: ref(false),
    };
  },
};
</script>
