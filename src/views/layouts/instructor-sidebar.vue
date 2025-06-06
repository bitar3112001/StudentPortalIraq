<template>
  <div class="col-lg-3 theiaStickySidebar">
    <div class="settings-sidebar mb-lg-0">
      <div>
        <h6 class="mb-3">القائمة الرئيسية</h6>
        <ul class="mb-3 pb-1">
          <li>
            <router-link to="/instructor/instructor-dashboard" class="d-inline-flex align-items-center"><i
                class="isax isax-grid-35 me-2"></i>الرئيسية</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-profile" class="d-inline-flex align-items-center"><i
                class="fa-solid fa-user me-2"></i>الملف الشخصي</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-course" class="d-inline-flex align-items-center"><i
                class="isax isax-teacher5 me-2"></i>الدورات</router-link>
          </li>
          <li>
            <router-link to="/instructor/course-categories" class="d-inline-flex align-items-center"><i
                class="isax isax-category5 me-2"></i>التصنيفات</router-link>
          </li>
          <li>
            <router-link to="/instructor/course-levels" class="d-inline-flex align-items-center"><i
                class="isax isax-level5 me-2"></i>المستويات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-announcements" class="d-inline-flex align-items-center"><i
                class="isax isax-volume-high5 me-2"></i>الإعلانات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-assignment" class="d-inline-flex align-items-center"><i
                class="isax isax-clipboard-text5 me-2"></i>المهام</router-link>
          </li>
          <li>
            <router-link to="/instructor-students/student-list" class="d-inline-flex align-items-center"><i
                class="isax isax-profile-2user5 me-2"></i>الطلاب</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-quiz" class="d-inline-flex align-items-center"><i
                class="isax isax-award5 me-2"></i>الاختبارات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-quiz-results" class="d-inline-flex align-items-center"><i
                class="isax isax-medal-star5 me-2"></i>نتائج الاختبارات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-certificate" class="d-inline-flex align-items-center"><i
                class="isax isax-note-215 me-2"></i>الشهادات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-earnings" class="d-inline-flex align-items-center"><i
                class="isax isax-wallet-add5 me-2"></i>الأرباح</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-payout" class="d-inline-flex align-items-center"><i
                class="isax isax-coin-15 me-2"></i>السحب</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-statements" class="d-inline-flex align-items-center"><i
                class="isax isax-shopping-cart5 me-2"></i>البيانات</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-message" class="d-inline-flex align-items-center"><i
                class="isax isax-messages-35 me-2"></i>الرسائل</router-link>
          </li>
          <li>
            <router-link to="/instructor/instructor-tickets" class="d-inline-flex align-items-center"><i
                class="isax isax-ticket5 me-2"></i>الدعم</router-link>
          </li>
        </ul>
        <hr />
        <h6 class="mb-3">إعدادات الحساب</h6>
        <ul>
          <li>
            <router-link :to="dynamicRoute" class="d-inline-flex align-items-center" :class="{ active: isActiveRoute }">
              <i class="isax isax-setting-25 me-2"></i>الإعدادات
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleLogout" class="d-inline-flex align-items-center"><i
                class="isax isax-logout5 me-2"></i>تسجيل الخروج</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { authService } from "@/services/api";
import Swal from 'sweetalert2';
import { router } from "@/router";

export default {
  data() {
    return {
      activeRoutes: [
        "/instructor/instructor-settings",
        "/instructor/instructor-change-password",
        "/instructor/instructor-plans",
        "/instructor/instructor-social-profiles",
        "/instructor/instructor-linked-accounts",
        "/instructor/instructor-notifications",
        "/instructor/instructor-integrations",
      ],
    };
  },
  computed: {
    isActiveRoute() {
      return this.activeRoutes.includes(this.$route.path);
    },
    dynamicRoute() {
      return this.activeRoutes[0];
    },
  },
  methods: {
    async handleLogout() {
      try {
        const result = await Swal.fire({
          title: 'تأكيد تسجيل الخروج',
          text: 'هل أنت متأكد أنك تريد تسجيل الخروج؟',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'نعم، سجل الخروج',
          cancelButtonText: 'إلغاء',
          reverseButtons: true
        });

        if (result.isConfirmed) {
          authService.logout();
          await Swal.fire({
            icon: 'success',
            title: 'تم تسجيل الخروج بنجاح',
            timer: 1500,
            showConfirmButton: false
          });
          router.push('/login');
        }
      } catch (error) {
        console.error('Logout error:', error);
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: 'حدث خطأ أثناء تسجيل الخروج'
        });
      }
    }
  }
};
</script>
