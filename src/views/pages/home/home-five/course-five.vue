<template>
  <!-- Courses -->
  <section class="home-five-courses">
    <div class="container">
      <div class="favourite-course-sec">
        <div class="row">
          <div class="home-five-head section-header-title" data-aos="fade-up">
            <div class="row align-items-center d-flex justify-content-between row-gap-4">
              <div class="col-md-6">
                <h2>Featured Courses</h2>
              </div>
              <div class="col-md-6">
                <div class="see-all text-end">
                  <router-link to="/course/course-grid"
                    >View All<i class="fas fa-arrow-right ms-2"></i
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="all-corses-main">
            <div class="tab-content">
              <div class="nav tablist-three" role="tablist">
                <a
                  class="nav-tab active me-3"
                  data-bs-toggle="tab"
                  href="#alltab"
                  role="tab"
                  >All</a
                >
                <a
                  class="nav-tab me-3"
                  data-bs-toggle="tab"
                  href="#mostpopulartab"
                  role="tab"
                  >Most popular</a
                >

                <a
                  class="nav-tab me-3"
                  data-bs-toggle="tab"
                  href="#businesstab"
                  role="tab"
                  >Business</a
                >

                <a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab"
                  >Design</a
                >

                <a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab"
                  >Music</a
                >

                <a
                  class="nav-tab me-3"
                  data-bs-toggle="tab"
                  href="#programmingtab"
                  role="tab"
                  >Programming</a
                >

                <a
                  class="nav-tab me-3"
                  data-bs-toggle="tab"
                  href="#databasetab"
                  role="tab"
                  >Database</a
                >
              </div>

              <div class="tab-content">
                <!-- All -->
                <div class="tab-pane fade active show" id="alltab" role="tabpanel">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-35.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-02.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Pyhton Development</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >The Complete Web Developer PHP Course</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">500 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$650 <span>$99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-34.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-01.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Web Design</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >Build Responsive Websites with HTML</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">450 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$650 <span>$99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-28.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-03.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Business Management</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >The Complete Business Management Course</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">400 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$300 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-29.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-04.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Creative Arts & media</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >Build Creative Arts & media Course
                                  Completed</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">250 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$700 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-30.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-05.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Personalized Learning</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >Build Responsive Websites with HTML</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">400 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$650 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-31.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-06.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Pyhton Development</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >The Complete Pyhton Development Course</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">400 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$650 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-32.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-07.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Business Management</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >Build Websites with HTML5 CSS3 Javascript</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">400 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$650 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-item course-item-five">
                          <div class="course-img">
                            <router-link to="/instructor/instructor-profile"
                              ><img
                                src="@/assets/img/course/course-33.jpg"
                                alt="Img"
                                class="img-fluid"
                            /></router-link>
                          </div>
                          <div class="course-content">
                            <div class="course-user-img">
                              <router-link to="/instructor/instructor-profile"
                                ><img
                                  src="@/assets/img/user/user-08.jpg"
                                  alt="Img"
                                  class="img-fluid"
                              /></router-link>
                            </div>
                            <div class="course-three-text">
                              <p>Creative Arts & media</p>
                              <h3 class="title instructor-text">
                                <router-link to="/details/course-details-1"
                                  >Build Responsive Websites with HTML</router-link
                                >
                              </h3>
                            </div>
                            <div class="student-counts-info d-flex align-items-center">
                              <img src="@/assets/img/icon/student.svg" alt="Img" />
                              <p class="ms-2">300 Students</p>
                            </div>
                            <div
                              class="d-flex align-items-center justify-content-between"
                            >
                              <div class="course-price">
                                <h3>$550 <span> $99.00</span></h3>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="fa-regular fa-clock me-2"></i>
                                <span>6hr 30min</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /All -->

                <!-- Most popular -->
                <div class="tab-pane fade" id="mostpopulartab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Most popular -->

                <!-- Business -->
                <div class="tab-pane fade" id="businesstab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Business -->

                <!-- Design -->
                <div class="tab-pane fade" id="designtab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Design -->

                <!-- Music -->
                <div class="tab-pane fade" id="musictab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Music -->

                <!-- Programmiing -->
                <div class="tab-pane fade" id="programmingtab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Programmiing -->

                <!-- Database -->
                <div class="tab-pane fade" id="databasetab">
                  <div class="all-course">
                    <div class="row">
                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-34.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-01.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Web Design</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>450 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-35.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-02.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Web Developer PHP Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>500 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-28.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-03.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Business Management Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-29.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-04.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Creative Arts & media Course
                                    Completed</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>250 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$700 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-30.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-05.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Personalized Learning</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-31.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-06.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Pyhton Development</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >The Complete Pyhton Development Course</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>Free</h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-32.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-07.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Business Management</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Websites with HTML5 CSS3
                                    Javascript</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$650 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->

                      <!-- Col -->
                      <div class="col-xl-3 col-lg-6 col-md-6 col-12" data-aos="fade-up">
                        <div class="course-box-three">
                          <div class="course-three-item">
                            <div class="course-three-img">
                              <router-link to="/details/course-details-1">
                                <img
                                  class="img-fluid"
                                  alt="Img"
                                  src="@/assets/img/course/course-33.jpg"
                                />
                              </router-link>
                              <div class="heart-three">
                                <a href="#"><i class="fa-regular fa-heart"></i></a>
                              </div>
                            </div>
                            <div class="course-three-content">
                              <div class="course-group-three">
                                <div class="group-three-img">
                                  <router-link to="/instructor/instructor-profile"
                                    ><img
                                      src="@/assets/img/user/user-08.jpg"
                                      alt="Img"
                                      class="img-fluid"
                                  /></router-link>
                                </div>
                              </div>

                              <div class="course-three-text">
                                <p>Creative Arts & media</p>
                                <h3 class="title instructor-text">
                                  <router-link to="/details/course-details-1"
                                    >Build Responsive Websites with HTML</router-link
                                  >
                                </h3>
                              </div>

                              <div class="student-counts-info d-flex align-items-center">
                                <div
                                  class="students-three-counts d-flex align-items-center"
                                >
                                  <img src="@/assets/img/icon/student.svg" alt="Img" />
                                  <p>400 Students</p>
                                </div>
                              </div>

                              <div
                                class="price-three-group d-flex align-items-center justify-content-between"
                              >
                                <div class="price-three-view d-flex align-items-center">
                                  <div class="course-price-three">
                                    <h3>$300 <span>$99.00</span></h3>
                                  </div>
                                </div>
                                <div
                                  class="price-three-time d-inline-flex align-items-center"
                                >
                                  <i class="fa-regular fa-clock me-2"></i>
                                  <span>6hr 30min</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Col -->
                    </div>
                  </div>
                </div>
                <!-- /Database -->
              </div>
              <div class="text-center mt-3">
                <router-link to="/course/course-grid" class="btn btn-secondary"
                  >View all Courses</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Courses -->
</template>
