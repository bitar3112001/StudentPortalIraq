<template>
  <!-- Featured Courses Five-->
  <section class="featured-section-five">
    <div class="container">
      <div class="section-header section-header-six text-center" data-aos="fade-down">
        <h2>Popular Courses</h2>
        <p>
          Discover our featured courses, specially curated to help you gain in-demand
          skills
        </p>
      </div>
      <div class="row">
        <div class="featured-courses-five-tab">
          <div class="tab-content">
            <div class="ux-design-five">
              <div class="row">
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-40.jpg"
                        />
                      </router-link>
                      <div class="price">
                        <h3>$200 <span>$990.00</span></h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-21.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >Nicole Brown</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <a href="#" class="fav-icon"
                          ><i class="fa-regular fa-heart"></i
                        ></a>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >Information About UI/UX Design Degree</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>12+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>9hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.0</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-02.jpg"
                        />
                      </router-link>
                      <div class="price">
                        <h3>$156</h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-22.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >Jenis R.</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <a href="#" class="fav-icon"
                          ><i class="fa-regular fa-heart"></i
                        ></a>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >Wordpress for Beginners - Master Wordpress Quickly</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>11+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>6hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.3</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-03.jpg"
                        />
                      </router-link>
                      <div class="price combo">
                        <h3>FREE</h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-25.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >Jesse Stevens</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <a href="#" class="fav-icon"
                          ><i class="fa-regular fa-heart"></i
                        ></a>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >Sketch from A to Z (2022): Become an app designer</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>16+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>12hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.5</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-04.jpg"
                        />
                      </router-link>
                      <div class="price">
                        <h3>$145</h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-24.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >Nicole Brown</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <div
                          class="course-share d-flex align-items-center justify-content-center"
                        >
                          <a href="#"><i class="fa-regular fa-heart"></i></a>
                        </div>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >Learn Angular Fundamentals From beginning to advance
                          lavel</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>10+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>8hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.2</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-13.jpg"
                        />
                      </router-link>
                      <div class="price combo">
                        <h3>Free</h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-23.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >John Smith</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <a href="#" class="fav-icon"
                          ><i class="fa-regular fa-heart"></i
                        ></a>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >Build Responsive Real World Websites with HTML5 and
                          CSS3</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>13+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>10hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.0</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex">
                  <div
                    class="course-item course-item-three mx-0 flex-fill aos"
                    data-aos="fade-up"
                  >
                    <div class="course-img">
                      <router-link to="/details/course-details-1">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/course/course-44.jpg"
                        />
                      </router-link>
                      <div class="price combo">
                        <h3>$200 <span>$990.00</span></h3>
                      </div>
                    </div>
                    <div class="course-content">
                      <div class="course-user">
                        <div class="course-user-img">
                          <router-link to="/instructor/instructor-profile"
                            ><img
                              src="@/assets/img/avatar/avatar-26.jpg"
                              alt="Img"
                              class="img-fluid"
                          /></router-link>
                          <div class="course-name">
                            <h4>
                              <router-link to="/instructor/instructor-profile"
                                >Stella Johnson</router-link
                              >
                            </h4>
                            <p>Instructor</p>
                          </div>
                        </div>
                        <a href="#" class="fav-icon"
                          ><i class="fa-regular fa-heart"></i
                        ></a>
                      </div>
                      <h3 class="title">
                        <router-link to="/details/course-details-1"
                          >C# Developers Double Your Coding Speed with Visual
                          Studio</router-link
                        >
                      </h3>
                      <div class="course-info d-flex align-items-center">
                        <div class="course-lesson d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-3.svg" alt="Img" />
                          <p>7+ Lesson</p>
                        </div>
                        <div class="course-time d-flex align-items-center">
                          <img src="@/assets/img/icons/icon-4.svg" alt="Img" />
                          <p>7hr 30min</p>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <div class="rating m-0">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star"></i>
                          <span class="d-inline-block average-rating"
                            ><span>4.6</span> (15)</span
                          >
                        </div>
                        <router-link
                          to="/courses/checkout"
                          class="btn btn-primary btn-xl d-inline-flex align-items-center flex-shrink-0"
                          ><i class="isax isax-shopping-cart5 me-2"></i>Buy
                          Now</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <a href="course-grid.html" class="btn btn-xl btn-primary mt-2" data-aos="fade-up"
          >See More Courses</a
        >
      </div>
    </div>
  </section>
  <!-- /Featured Courses Five-->
</template>
