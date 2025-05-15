<template>
  <div class="col-lg-3 theiaStickySidebar">
    <div class="settings-sidebar mb-lg-0">
      <div>
        <h6 class="mb-3">Main Menu</h6>
        <ul class="mb-3 pb-1">
          <li>
            <router-link
              to="/instructor/instructor-dashboard"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-grid-35 me-2"></i>Dashboard</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-profile"
              class="d-inline-flex align-items-center"
              ><i class="fa-solid fa-user me-2"></i>My Profile</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-course"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-teacher5 me-2"></i>Courses</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-announcements"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-volume-high5 me-2"></i>Announcements</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-assignment"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-clipboard-text5 me-2"></i>Assignments</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor-students/student-list"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-profile-2user5 me-2"></i>Students</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-quiz"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-award5 me-2"></i>Quiz</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-quiz-results"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-medal-star5 me-2"></i>Quiz Results</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-certificate"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-note-215 me-2"></i>Certificates</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-earnings"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-wallet-add5 me-2"></i>Earnings</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-payout"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-coin-15 me-2"></i>Payout</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-statements"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-shopping-cart5 me-2"></i>Statements</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-message"
              class="d-inline-flex align-items-center"
              ><i class="isax isax-messages-35 me-2"></i>Messages</router-link
            >
          </li>
          <li>
            <router-link
              to="/instructor/instructor-tickets"
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
};
</script>
