<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Enrolled Courses</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Enrolled Courses</li>
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
          <div
            class="page-title d-flex flex-wrap gap-3 align-items-center justify-content-between"
          >
            <h5>Enrolled Courses</h5>
            <div class="tab-list">
              <ul class="nav mb-0 gap-2" role="tablist">
                <li class="nav-item mb-0" role="presentation">
                  <a
                    href="javascript:void(0);"
                    class="active"
                    data-bs-toggle="tab"
                    data-bs-target="#enroll-courses"
                    aria-selected="true"
                    role="tab"
                    >Enrolled (09)</a
                  >
                </li>
                <li class="nav-item mb-0" role="presentation">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tab"
                    data-bs-target="#active-courses"
                    aria-selected="false"
                    role="tab"
                    class=""
                    tabindex="-1"
                    >Active (06)</a
                  >
                </li>
                <li class="nav-item mb-0" role="presentation">
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="tab"
                    data-bs-target="#complete-courses"
                    aria-selected="false"
                    role="tab"
                    class=""
                    tabindex="-1"
                    >Completed (03)</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade active show" id="enroll-courses" role="tabpanel">
              <div class="row">
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-01.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <div class="badge text-bg-danger">15% off</div>
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-29.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Brenda Slaton</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Information About UI/UX Design Degree</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.9 (200
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$120</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-02.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-30.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Ana Reyes</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Wordpress
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Wordpress for Beginners - Master Wordpress Quickly</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (160
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$140</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-03.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-31.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Andrew Pirtle</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Sketch from A to Z (2024): Become an app designer</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (160
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$140</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-04.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Christy Garner</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Build Responsive Real World Websites with Crash
                          Course</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.2 (220
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$200</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-05.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Justin Gregory</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Learn JavaScript and Express to become a Expert</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-06.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-33.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Carolyn Hines</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Introduction to Python Programming</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-07.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-34.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Rafael Miller</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Build Responsive Websites with HTML5 and CSS3</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$170</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-08.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-35.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Nancy Duarte</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Information About Photoshop Design Degree</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$170</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-09.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-36.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >James Kagan</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >C# Developers Double Your Coding with Visual
                          Studio</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$180</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="active-courses" role="tabpanel">
              <div class="row">
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-01.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <div class="badge text-bg-danger">15% off</div>
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-29.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Brenda Slaton</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Information About UI/UX Design Degree</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.9 (200
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$120</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-02.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-30.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Ana Reyes</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Wordpress
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Wordpress for Beginners - Master Wordpress Quickly</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (160
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$140</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-03.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-31.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Andrew Pirtle</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Design
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Sketch from A to Z (2024): Become an app designer</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (160
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$140</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-04.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Christy Garner</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Build Responsive Real World Websites with Crash
                          Course</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.2 (220
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$200</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-05.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Justin Gregory</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Learn JavaScript and Express to become a Expert</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-06.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-33.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Carolyn Hines</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Introduction to Python Programming</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="complete-courses" role="tabpanel">
              <div class="row">
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-04.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Christy Garner</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Build Responsive Real World Websites with Crash
                          Course</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.2 (220
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$200</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-05.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-32.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Justin Gregory</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Learn JavaScript and Express to become a Expert</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6">
                  <div class="course-item-two course-item mx-0">
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          src="@/assets/img/course/course-06.jpg"
                          alt="img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                      >
                        <a href="javascript:void(0);" class="fav-icon ms-auto"
                          ><i class="isax isax-heart"></i
                        ></a>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <router-link
                            to="/pages-instructor/instructor-details"
                            class="avatar avatar-sm"
                          >
                            <img
                              src="@/assets/img/user/user-33.jpg"
                              alt="img"
                              class="img-fluid avatar avatar-sm rounded-circle"
                            />
                          </router-link>
                          <div class="ms-2">
                            <router-link
                              to="/pages-instructor/instructor-details"
                              class="link-default fs-14"
                              >Carolyn Hines</router-link
                            >
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                        >
                          Programming
                        </span>
                      </div>
                      <h6 class="title mb-2">
                        <router-link to="/details/course-details-1"
                          >Introduction to Python Programming</router-link
                        >
                      </h6>
                      <p class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-secondary mb-0">$130</h5>
                        <router-link
                          to="/details/course-details-1"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                          >View Course<i class="isax isax-arrow-right-3 ms-1"></i
                        ></router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /pagination -->
          <div class="row align-items-center mt-2">
            <div class="col-md-2">
              <p class="pagination-text">Page 1 of 2</p>
            </div>
            <div class="col-md-10">
              <ul
                class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0"
              >
                <li class="page-item prev">
                  <a class="page-link" href="javascript:void(0)" tabindex="-1"
                    ><i class="fas fa-angle-left"></i
                  ></a>
                </li>
                <li class="page-item first-page active">
                  <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0)">3</a>
                </li>
                <li class="page-item next">
                  <a class="page-link" href="javascript:void(0)"
                    ><i class="fas fa-angle-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /pagination -->
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
</template>
