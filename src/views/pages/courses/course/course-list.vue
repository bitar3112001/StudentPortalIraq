<template>
  <layouts-header></layouts-header>

  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Course List</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Course List</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- Course -->
  <section class="course-content course-list-content">
    <div class="container">
      <div class="row align-items-baseline">
        <course-sidebar></course-sidebar>
        <div class="col-lg-9">
          <!-- Filter -->
          <div class="showing-list mb-4">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <div class="show-result text-center text-lg-start">
                  <h6 class="fw-medium">Showing 1-9 of 50 results</h6>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="show-filter add-course-info">
                  <form action="#">
                    <div
                      class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0"
                    >
                      <div class="view-icons mb-2 mb-sm-0">
                        <router-link to="/course/course-grid" class="grid-view"
                          ><i class="feather-grid"></i
                        ></router-link>
                        <router-link to="/course/course-list" class="list-view active"
                          ><i class="isax isax-task"></i
                        ></router-link>
                      </div>
                      <select class="form-select">
                        <option>Newly Published</option>
                        <option>Trending Courses</option>
                        <option>Top Rated</option>
                        <option>Free Courses</option>
                      </select>
                      <div class="search-group">
                        <i class="isax isax-search-normal-1"></i>
                        <input type="text" class="form-control" placeholder="Search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Filter -->

          <div class="row course-list-wrap">
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1">
                      <img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-01.jpg"
                        alt="img"
                      />
                    </router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar1.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >David Benitez</router-link
                          >
                        </p>
                      </div>
                      <span><a class="tag-btn" href="#">Design</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Information About UI/UX Design Degree</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i> 4.9 (200
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Intermediate</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$120</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course
                        <i class="fs-8 fas fa-angle-right ms-2"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1"
                      ><img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-02.jpg"
                        alt="img"
                    /></router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar2.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >Ana Reyes</router-link
                          >
                        </p>
                      </div>
                      <span><a href="#" class="tag-btn">Wordpress</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Wordpress for Beginners - Master Wordpress Quickly</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (160
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Advanced</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$140</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course
                        <i class="fs-8 fas fa-angle-right ms-2"></i>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1"
                      ><img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-03.jpg"
                        alt="img"
                    /></router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar3.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >Andrew Pirtle</router-link
                          >
                        </p>
                      </div>
                      <span><a href="#" class="tag-btn">Design</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Sketch from A to Z (2024): Become an app designer</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.6 (170
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Basic</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$160</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course<i class="fs-8 fas fa-angle-right ms-2"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1"
                      ><img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-04.jpg"
                        alt="img"
                    /></router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar4.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >Christy Garner</router-link
                          >
                        </p>
                      </div>
                      <span><a href="#" class="tag-btn">Programming</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Build Responsive Real World Websites with Crash
                        Course</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.2 (220
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Advanced</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$200</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course<i class="fs-8 fas fa-angle-right ms-2"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1"
                      ><img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-05.jpg"
                        alt="img"
                    /></router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar5.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >Justin Gregory</router-link
                          >
                        </p>
                      </div>
                      <span><a href="#" class="tag-btn">Programming</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Learn JavaScript and Express to become a Expert</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.4 (180
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Intermediate</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$130</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course<i class="fs-8 fas fa-angle-right ms-2"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="courses-list-item">
                <div class="d-md-flex align-items-center">
                  <div class="position-relative overflow-hidden rounded-3 card-image">
                    <router-link to="/details/course-details-1"
                      ><img
                        class="img-fluid rounded-3"
                        src="@/assets/img/course/course-06.jpg"
                        alt="img"
                    /></router-link>
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                    >
                      <a href="javascript:void(0);" class="like"
                        ><i class="isax isax-heart"></i
                      ></a>
                    </div>
                  </div>
                  <div class="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                    <div
                      class="d-flex flex-wrap align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm rounded-circle">
                          <a href="#"
                            ><img
                              class="img-fluid rounded-circle"
                              src="@/assets/img/avatar/avatar6.jpg"
                              alt="img"
                          /></a>
                        </div>
                        <p class="ms-2">
                          <router-link to="/pages-instructor/instructor-details"
                            >Carolyn Hines</router-link
                          >
                        </p>
                      </div>
                      <span><a href="#" class="tag-btn">Programming</a></span>
                    </div>
                    <h4 class="mt-3 mb-2">
                      <router-link to="/details/course-details-1"
                        >Introduction to Python Programming</router-link
                      >
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fa-solid fa-star text-warning me-2"></i>4.7 (130
                        Reviews)
                      </p>
                      <span class="dot"></span>
                      <p>Expert</p>
                    </div>
                    <div class="d-flex justify-content-between mt-3 align-items-center">
                      <h5 class="text-secondary">$150</h5>
                      <router-link
                        to="/details/course-details-1"
                        class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >Get Course<i class="fs-8 fas fa-angle-right ms-2"></i
                      ></router-link>
                    </div>
                  </div>
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
  </section>
  <!-- /Course -->

  <footer-two></footer-two>
</template>
