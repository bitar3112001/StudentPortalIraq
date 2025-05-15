<template>
  <layouts-header></layouts-header>

  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Wishlist</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Wishlist</li>
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
          <div class="page-title d-flex align-items-center justify-content-between">
            <h5>Wishlist</h5>
            <a
              href="javascript:void(0);"
              class="fs-14 text-danger d-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#delete_modal"
            >
              <i class="isax isax-trash me-1"></i>Remove All
            </a>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-01.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle"
                          src="@/assets/img/avatar/avatar1.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >David Benitez</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Design</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Information About UI/UX Design Degree</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star text-warning fs-12"></i>
                  <p class="fs-14 ms-1">4.9 (200 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$120</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-02.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar2.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Ana Reyes</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Wordpress</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Wordpress for Beginners - Master Wordpress Quickly</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star text-warning fs-12"></i>
                  <p class="fs-14 ms-1">4.4 (160 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$140</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-03.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar3.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Andrew Pirtle</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Design</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Sketch from A to Z (2024): Become an app designer</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.6 (170 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$160</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-04.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar4.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Christy Garner</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Programming</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Sketch from A to Z (2024): Become an app designer</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.2 (220 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$200</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-05.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar5.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Justin Gregory</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Programming</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Learn JavaScript and Express to become a Expert</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.4 (180 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$130</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-06.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar6.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Carolyn Hines</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Programming</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Introduction to Python Programming</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.7 (130 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$150</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-07.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar7.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Rafael Miller</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Programming</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Build Responsive Websites with HTML5 and CSS3</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.1 (140 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$170</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-08.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar8.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >Nancy Duarte</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Deign</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >Information About Photoshop Design Degree</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.3 (190 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$110</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="course-item course-item-three">
                <div class="position-relative overflow-hidden rounded-3 mb-3">
                  <router-link to="/details/course-details-1"
                    ><img
                      class="img-fluid rounded-3"
                      src="@/assets/img/course/course-09.jpg"
                      alt="img"
                  /></router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a class="fav-icon like selected" href="javascript:void(0);">
                      <i class="isax isax-heart not-filled"></i
                      ><i class="isax isax-heart5 filled-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm rounded-circle">
                      <router-link to="/pages-instructor/instructor-details"
                        ><img
                          class="img-fluid rounded-circle object-fit-cover"
                          src="@/assets/img/avatar/avatar9.jpg"
                          alt="im"
                      /></router-link>
                    </div>
                    <p class="fs-14 ms-2">
                      <router-link to="/pages-instructor/instructor-details"
                        >James Kagan</router-link
                      >
                    </p>
                  </div>
                  <span class="tag-btn">Programming</span>
                </div>
                <h6 class="mt-3 mb-2">
                  <router-link to="/details/course-details-1"
                    >C# Developers Double Your Coding with Visual Studio</router-link
                  >
                </h6>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star fs-12 text-warning"></i>
                  <p class="fs-14 ms-1">4.8 (110 Reviews)</p>
                </div>
                <div class="d-flex justify-content-between mt-3 align-items-center">
                  <h5 class="text-secondary">$180</h5>
                  <router-link
                    to="/details/course-details-1"
                    class="btn btn-dark btn-sm d-inline-flex align-items-center"
                    >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- /pagination -->
          <div class="row align-items-center">
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

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Remove All</h4>
            <p class="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                >Yes, Remove All</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
