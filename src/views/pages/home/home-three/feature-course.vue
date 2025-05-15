<template>
  <!-- Feature Course -->
  <section class="section new-course">
    <div class="home-three-sec-bg">
      <img src="@/assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01" />
      <img src="@/assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02" />
    </div>
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-3 aos"
        data-aos="fade-up"
      >
        <div class="section-header">
          <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
            >What’s New</span
          >
          <h2 class="mb-0">Featured Courses</h2>
        </div>
        <div>
          <router-link to="/course/course-list" class="btn btn-secondary btn-xl"
            >View all Categories</router-link
          >
        </div>
      </div>
      <div class="course-feature">
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
                  <a href="#" class="fav-icon"><i class="fa-regular fa-heart"></i></a>
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now
                  </router-link>
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
                    src="@/assets/img/course/course-41.jpg"
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
                  <a href="#" class="fav-icon"><i class="fa-regular fa-heart"></i></a>
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now
                  </router-link>
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
                    src="@/assets/img/course/course-42.jpg"
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
                  <a href="#" class="fav-icon"><i class="fa-regular fa-heart"></i></a>
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now</router-link
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
                    src="@/assets/img/course/course-43.jpg"
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now</router-link
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
                    src="@/assets/img/course/course-45.jpg"
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
                  <a href="#" class="fav-icon"><i class="fa-regular fa-heart"></i></a>
                </div>
                <h3 class="title">
                  <router-link to="/details/course-details-1"
                    >Build Responsive Real World Websites with HTML5 and CSS3</router-link
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now</router-link
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
                  <a href="#" class="fav-icon"><i class="fa-regular fa-heart"></i></a>
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
                    class="btn btn-primary btn-xl d-inline-flex align-items-center"
                  >
                    <i class="isax isax-shopping-cart5 me-2"></i>Buy Now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Feature Course -->

  <!-- Master Skill -->
  <div class="section master-skill">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6 col-md-12">
          <div class="section-header aos" data-aos="fade-up">
            <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
              >What’s New</span
            >
            <h2>Master the skills to drive your career</h2>
            <p>
              Get certified, master modern tech skills, and level up your career — whether
              you’re starting out or a seasoned pro. 95% of eLearning learners report our
              hands-on content directly helped their careers.
            </p>
          </div>
          <div class="career-group aos" data-aos="fade-up">
            <div class="row row-gap-4">
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="certified-item d-flex align-items-center flex-fill">
                  <div class="certified-img">
                    <img
                      src="@/assets/img/icons/icon-22.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <p>Stay motivated with engaging instructors</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="certified-item d-flex align-items-center flex-fill">
                  <div class="certified-img">
                    <img
                      src="@/assets/img/icons/icon-17.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <p>Keep up with in the latest in cloud</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="certified-item d-flex align-items-center flex-fill">
                  <div class="certified-img">
                    <img
                      src="@/assets/img/icons/icon-23.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <p>Get certified with 100+ certification courses</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="certified-item d-flex align-items-center flex-fill">
                  <div class="certified-img">
                    <img
                      src="@/assets/img/icons/icon-16.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <p>Build skills your way, from labs to courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="career-img aos" data-aos="fade-up">
            <img src="@/assets/img/bg/bg-2.png" alt="Img" class="img-fluid master-bg" />
            <img
              src="@/assets/img/feature/feature-16.png"
              alt="Img"
              class="img-fluid girl-img"
            />
            <img
              src="@/assets/img/icons/icon-18.svg"
              alt="Img"
              class="img-fluid float-img-01"
            />
            <img
              src="@/assets/img/icons/icon-19.svg"
              alt="Img"
              class="img-fluid float-img-02"
            />
            <img
              src="@/assets/img/icons/icon-20.svg"
              alt="Img"
              class="img-fluid float-img-03"
            />
            <img
              src="@/assets/img/icons/icon-21.svg"
              alt="Img"
              class="img-fluid float-img-04"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Master Skill -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {};
  },

  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
