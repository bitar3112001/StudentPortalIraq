<template>
  <div class="col-lg-3 theiaStickySidebar">
    <div class="settings-sidebar">
      <div>
        <h6 class="mb-3">Main Menu</h6>
        <ul class="mb-3 pb-1">
          <li>
            <router-link
              to="/students/student-dashboard"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-grid-35 me-2"></i>Dashboard</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-profile"
              class="d-inline-flex align-items-center"
              ><i class="fa-solid fa-user me-2"></i>My Profile</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-courses"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-teacher5 me-2"></i>Enrolled Courses</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-certificates"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-note-215 me-2"></i>My Certificates</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-wishlist"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-heart5 me-2"></i>Wishlist</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-reviews"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-star5 me-2"></i>Reviews</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-quiz"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-award5 me-2"></i>My Quiz Attempts</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-order-history"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-shopping-cart5 me-2"></i>Order History</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-referral"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-tag-user5 me-2"></i>Referrals</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-messages"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-messages-35 me-2"></i>Messages</router-link
            >
          </li>
          <li>
            <router-link
              to="/students/student-tickets"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-ticket5 me-2"></i>Support Tickets</router-link
            >
          </li>
        </ul>
        <hr />
        <h6 class="mb-3">Account Settings</h6>
        <ul>
          <li>
            <router-link
              :to="dynamicRoute"
              class="d-inline-flex align-items-center"
              :class="{ active: isActiveRoute }"
            >
              <i class="isax isax-setting-25 me-2"></i>Settings
            </router-link>
          </li>
          <li>
            <router-link to="/" class="d-inline-flex align-items-center"
              ><i class="isax isax-logout5 me-2"></i>Logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeRoutes: [
        "/students/student-settings",
        "/students/student-change-password",
        "/students/student-social-profile",
        "/students/student-linked-accounts",
        "/students/student-notifications",
        "/students/student-billing-address",
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
};
</script>
