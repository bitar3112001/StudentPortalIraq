<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Notifications</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Notifications</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- Notifications -->
  <div class="content">
    <div class="container">
      <div class="notification-content">
        <div class="notification-head">
          <div class="row align-items-center row-gap-3">
            <div class="col-lg-8">
              <h2 class="fs-32 fw-bold">Notifications</h2>
              <p>
                Improve the way your work, discover a brand new tool and drop the hassle
                once and for all.
              </p>
            </div>
            <div class="col-lg-4">
              <div class="d-flex justify-content-end">
                <a
                  href="javascript:void(0);"
                  class="btn mark-all-btn btn-light rounded-pill me-2"
                  ><i class="isax isax-tick-square me-2"></i> Mark All as Read</a
                >
                <a
                  href="javascript:void(0);"
                  class="btn delete-all-btn btn-secondary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_all_modal"
                  ><i class="isax isax-trash me-2"></i>Delete All</a
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="">
            <h6 class="fs-18 fw-semibold mb-3">Today</h6>
            <div class="notification-item mb-3">
              <div class="row row-gap-3">
                <div class="col-md-10">
                  <div class="d-flex align-items-center">
                    <router-link to="/instructor-students/student-details" class="rounded-circle me-2">
                      <img
                        src="@/assets/img/user/user-11.jpg"
                        alt="img"
                        class="img-fluid rounded-circle"
                      />
                    </router-link>
                    <div>
                      <router-link to="/instructor-students/student-details" class="text-gray-5 fs-16 mb-0"
                        ><span class="name-highlight">Thompson Hicks</span> enroll a new
                        course on Programming</router-link
                      >
                      <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-delete-hidden rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash me-1"></i> Delete</a
                  >
                </div>
              </div>
            </div>
            <div class="notification-item mb-3">
              <div class="row">
                <div class="col-md-10">
                  <div class="d-flex align-items-center">
                    <router-link to="/instructor-students/student-details" class="rounded-circle me-2">
                      <img
                        src="@/assets/img/user/user-12.jpg"
                        alt="img"
                        class="img-fluid rounded-circle"
                      />
                    </router-link>
                    <div>
                      <router-link to="/instructor-students/student-details" class="text-gray-5 fs-16 mb-0"
                        ><span class="name-highlight">Jennifer Tovar</span> has submitted
                        their assignment for UI/UX Course.</router-link
                      >
                      <p class="text-gray-5 fs-16 mb-0">10 mins ago</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-delete-hidden rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash me-1"></i> Delete</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <h6 class="fs-18 fw-semibold mb-3">Yesterday</h6>
            <div class="notification-item mb-3">
              <div class="row">
                <div class="col-md-10">
                  <div class="d-flex align-items-center">
                    <router-link to="/instructor-students/student-details" class="rounded-circle me-2">
                      <img
                        src="@/assets/img/user/user-13.jpg"
                        alt="img"
                        class="img-fluid rounded-circle"
                      />
                    </router-link>
                    <div>
                      <router-link to="/instructor-students/student-details" class="text-gray-5 fs-16 mb-0"
                        ><span class="name-highlight">James Schulte </span>has requested
                        feedback for their assignment in WordPress Course</router-link
                      >
                      <p class="text-gray-5 fs-16 mb-0">20 Dec 2024</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-delete-hidden rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash me-1"></i> Delete</a
                  >
                </div>
              </div>
            </div>
            <div class="notification-item mb-3">
              <div class="row">
                <div class="col-md-10">
                  <div class="d-flex align-items-center">
                    <router-link to="/instructor-students/student-details" class="rounded-circle me-2">
                      <img
                        src="@/assets/img/user/user-14.jpg"
                        alt="img"
                        class="img-fluid rounded-circle"
                      />
                    </router-link>
                    <div>
                      <router-link to="/instructor-students/student-details" class="text-gray-5 fs-16 mb-0"
                        >You have a new message from
                        <span class="name-highlight">William Aragon</span> regarding HTML
                        Course.</router-link
                      >
                      <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-delete-hidden rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash me-1"></i> Delete</a
                  >
                </div>
              </div>
            </div>
            <div class="notification-item">
              <div class="row">
                <div class="col-md-10">
                  <div class="d-flex align-items-center">
                    <router-link to="/instructor-students/student-details" class="rounded-circle me-2">
                      <img
                        src="@/assets/img/user/user-15.jpg"
                        alt="img"
                        class="img-fluid rounded-circle"
                      />
                    </router-link>
                    <div>
                      <router-link to="/instructor-students/student-details" class="text-gray-5 fs-16 mb-0"
                        ><span class="name-highlight">Shirley Lis</span> has completed
                        Quiz in WordPress Course with a score of 80%</router-link
                      >
                      <p class="text-gray-5 fs-16 mb-0">05 mins ago</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-center justify-content-end">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-delete-hidden rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash me-1"></i> Delete</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Notifications -->
  <footer-two></footer-two>

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Notification</h4>
            <p class="mb-3">Are you sure you want to delete notification?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                >Yes, Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->

  <!-- Delete All Modal -->
  <div class="modal fade" id="delete_all_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete All Notifications</h4>
            <p class="mb-3">Are you sure you want to delete all notifications?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                >Yes, Delete All</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
