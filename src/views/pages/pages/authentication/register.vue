<template>
  <div class="login-content">
    <div class="row">
      <!-- Login Banner -->
      <div class="col-md-6 login-bg d-none d-lg-flex">
        
          <div>
            <div class="login-carousel-section mb-3">
              <div class="login-banner">
                <img src="@/assets/img/auth/auth-1.svg" class="img-fluid" alt="Logo" />
              </div>
              <div class="mentor-course text-center">
                <h3 class="mb-2">
                  اهلا وسهلا<br />منصة احتراف <span class="text-secondary"></span> التعليمية.
                </h3>
            <p>منصة "احتراف" مصممة لمساعدة الطلاب والمؤسسات التعليمية في العراق على إدارة وتتبع الأنشطة التعليمية وتوفير تجربة تعليمية متكاملة وسهلة الوصول.</p>
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
                <div>
                  <img src="@/assets/img/logo1.jpg" class="img-fluid" alt="Logo" width="60px" />
                  <h3 >منصة احتراف</h3>
                </div>
                <router-link to="/home/index-2" class="link-1">العودة للرئيسية</router-link>
              </div>
              <h1 class="fs-32 fw-bold topic">تسجيل</h1>
              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >Full Name<span class="text-danger ms-1">*</span></label
                  >
                  <div class="position-relative">
                    <input type="text" class="form-control form-control-lg" />
                    <span
                      ><i class="isax isax-user input-icon text-gray-7 fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >Email<span class="text-danger ms-1">*</span></label
                  >
                  <div class="position-relative">
                    <Field
                      name="email"
                      type="text"
                      class="form-control mt-2"
                      placeholder="Email"
                    />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                    <span
                      ><i class="isax isax-sms input-icon text-gray-7 fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3 position-relative">
                  <label class="form-label"
                    >New Password <span class="text-danger"> *</span></label
                  >
                  <div class="position-relative" id="passwordInput">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      :class="{ 'password-error': validationError }"
                      placeholder="Password"
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
                    <Field
                      name="confirmpassword"
                      :type="showPasswordOne ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      placeholder="Confirm Password"
                    />
                    <span
                      @click="toggleShowOne"
                      class="isax toggle-passworda text-gray-7 fs-14"
                      :class="showPasswordOne ? 'isax-eye' : 'isax-eye-slash'"
                    >
                    </span>
                    <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                    <div class="emailshow text-danger" id="confirmpassword"></div>
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
                    <label
                      class="form-check-label mb-0 d-inline-flex remember-me fs-14"
                      for="flexCheckDefault"
                    >
                      I agree with
                      <a href="javascript:void(0);" class="link-2 mx-2"
                        >Terms of Service</a
                      >
                      and
                      <a href="javascript:void(0);" class="link-2 mx-2">Privacy Policy</a>
                    </label>
                  </div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-secondary btn-lg" type="submit">
                    Sign Up <i class="isax isax-arrow-right-3 ms-1"></i>
                  </button>
                </div>
              </Form>

              <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">
                Or
              </div>

        

              <div
                class="fs-14 fw-normal d-flex align-items-center justify-content-center"
              >
                Already you have an account?<router-link to="/register" class="link-2 ms-1">
                  Login</router-link
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
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
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
  setup() {
    // eslint-disable-next-line no-unused-vars
    const showPassword = ref(false);
    // eslint-disable-next-line no-unused-vars
    const emailError = ref("");
    // eslint-disable-next-line no-unused-vars
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };
    return {
      schema,
      onSubmit,
    };
  },
  methods: {
    toggleShowOne() {
      this.showPasswordOne = !this.showPasswordOne;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
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
