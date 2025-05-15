<template>
  <div class="instructor-profile">
    <div class="instructor-profile-bg">
      <img src="@/assets/img/bg/card-bg-01.png" class="instructor-profile-bg-1" alt="" />
    </div>
    <div class="row align-items-center row-gap-3">
      <div class="col-md-6">
        <div class="d-flex align-items-center">
          <span
            class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative"
          >
            <img src="@/assets/img/user/user-01.jpg" alt="img" />
            <span class="verify-tick"><i class="isax isax-verify5"></i></span>
          </span>
          <div>
            <h5 class="mb-1 text-white d-inline-flex align-items-center">
              Eugene Andre<router-link
                to="/instructor/instructor-profile"
                class="link-light fs-16 ms-2"
                ><i class="isax isax-edit-2"></i
              ></router-link>
            </h5>
            <p class="text-light">Instructor</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
          <router-link to="/courses/add-course" class="btn btn-white rounded-pill"
            >Add New Course</router-link
          >
          <router-link
            to="/students/student-dashboard"
            class="btn btn-secondary rounded-pill"
            >Student Dashboard</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
