<template>
  <div class="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">
    <div class="profile-card-bg">
      <img src="@/assets/img/bg/card-bg-01.png" class="profile-card-bg-1" alt="" />
    </div>
    <div class="row align-items-center row-gap-3">
      <div class="col-lg-6">
        <div class="d-flex align-items-center">
          <span
            class="avatar avatar-xxl avatar-rounded me-3 border border-white border-2 position-relative"
          >
            <img src="@/assets/img/user/user-02.jpg" alt="" />
            <span class="verify-tick"><i class="isax isax-verify5"></i></span>
          </span>
          <div>
            <h5 class="mb-1 text-white d-inline-flex align-items-center">
              <router-link to="/instructor-students/student-details"
                >Ronald Richard</router-link
              ><router-link
                to="/instructor/instructor-profile"
                class="link-light fs-16 ms-2"
                ><i class="isax isax-edit-2"></i
              ></router-link>
            </h5>
            <p class="text-light">Student</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
          <router-link
            to="/pages/become-an-instructor"
            class="btn btn-white rounded-pill me-3"
            >Become an Instructor</router-link
          >
          <router-link
            to="/instructor/instructor-dashboard"
            class="btn btn-secondary rounded-pill"
            >Instructor Dashboard</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
