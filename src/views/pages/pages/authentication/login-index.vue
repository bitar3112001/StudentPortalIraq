<template>
  <div class="login-content" dir="rtl">
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
                <img src="@/assets/img/logo1.jpg" class="img-fluid" alt="Logo" width="60px" />
                <router-link to="/home/index-2" class="link-1">العودة للرئيسية</router-link>
              </div>
              <h1 class="fs-32 fw-bold topic">تسجيل الدخول إلى حسابك</h1>
              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="mb-3 pb-3">
                <div class="mb-3 position-relative">
                  <label class="form-label">البريد الإلكتروني<span class="text-danger ms-1">*</span></label>
                  <Field name="register_id" value="419300182" class="form-control" />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger mt-2" id="register_id"></div>
                  <span><i class="isax isax-sms input-icon text-gray-7 fs-14 mt-3"></i></span>
                </div>
                <div class="mb-3 position-relative">
                  <label class="form-label">كلمة المرور <span class="text-danger"> *</span></label>
                  <div class="position-relative">
                    <Field name="password" :type="showPassword ? 'text' : 'password'" value="123456"
                      class="pass-inputa form-control" />
                    <span @click="toggleShow" class="isax toggle-passworda text-gray-7 fs-14"
                      :class="showPassword ? 'isax-eye' : 'isax-eye-slash'">
                    </span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="remember-me d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label ms-2" for="flexCheckDefault">
                      تذكرني
                    </label>
                  </div>
                  <div class="">
                    <router-link to="forgot-password" class="link-2">
                      نسيت كلمة المرور؟
                    </router-link>
                  </div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-secondary btn-lg" type="submit" :disabled="isLoading">
                    <span v-if="isLoading">
                      <i class="fas fa-spinner fa-spin me-2"></i>
                      جاري تسجيل الدخول...
                    </span>
                    <span v-else>
                      تسجيل الدخول <i class="isax isax-arrow-right-3 ms-1"></i>
                    </span>
                  </button>
                </div>
              </Form>

              <div class="d-flex align-items-center justify-content-center or fs-14 mb-3">
                أو
              </div>

              <div class="d-flex align-items-center justify-content-center mb-3">
                <a href="javascript:void(0);" class="btn btn-light me-2"><img src="@/assets/img/icons/google.svg"
                    alt="img" class="me-2" />جوجل</a>
                <a href="javascript:void(0);" class="btn btn-light"><img src="@/assets/img/icons/facebook.svg" alt="img"
                    class="me-2" />فيسبوك</a>
              </div>

              <div class="fs-14 fw-normal d-flex align-items-center justify-content-center">
                ليس لديك حساب؟<router-link to="/register" class="link-2 ms-1">
                  سجل الآن</router-link>
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
import { authService } from "@/services/api";
import Swal from 'sweetalert2';
import { useStore } from 'vuex';
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
    };
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const schema = Yup.object().shape({
      register_id: Yup.string()
        .required("رقم التسجيل مطلوب"),
      password: Yup.string()
        .min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل")
        .required("كلمة المرور مطلوبة"),
    });

    const onSubmit = async (values) => {
      document.getElementById("register_id").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      isLoading.value = true;

      try {
        const loginData = {
          password: values.password,
          register_id: values.register_id
        };

        const response = await authService.login(loginData);

        if (response.token) {
          // Store user data in localStorage
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('role', JSON.stringify(response.role));
          localStorage.setItem('permissions', JSON.stringify(response.permissions));
          localStorage.setItem('auth_token', response.token);
          
          await store.dispatch('auth/fetchUserData');

          await Swal.fire({
            icon: 'success',
            title: 'تم تسجيل الدخول بنجاح',
            text: response.message || 'جاري تحويلك إلى الصفحة الرئيسية...',
            timer: 2000,
            showConfirmButton: false
          });
       
          try {
            await router.replace('/home/index-2');
          } catch (navError) {
            console.error('Navigation error:', navError);
            // Fallback navigation
            window.location.href = '/home/index-2';
          }
        }
      } catch (error) {
        let errorMessage = "حدث خطأ أثناء تسجيل الدخول";

        if (error.message === "Invalid credentials") {
          errorMessage = "رقم التسجيل أو كلمة المرور غير صحيحة";
        }

        await Swal.fire({
          icon: 'error',
          title: 'خطأ في تسجيل الدخول',
          text: errorMessage
        });
      } finally {
        isLoading.value = false;
      }
    };

    return {
      schema,
      onSubmit,
      isLoading
    };
  },
};
</script>
