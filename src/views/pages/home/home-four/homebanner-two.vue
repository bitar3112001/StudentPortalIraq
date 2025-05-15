<template>
  <!-- Home Banner -->
  <section class="banner-section-four d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12" data-aos="fade-up">
          <div class="home-slide-face">
            <div class="banner-content">
              <h6>The Leader in Online Learning</h6>
              <h1>Engaging & Accessible Online Courses For All</h1>
              <p>
                Our specialized online courses are designed to bring the classroom
                experience to you, no matter where you are.
              </p>
            </div>
            <div class="banner-form">
              <form
                class="form"
                name="store"
                id="store"
                method="post"
                @submit.prevent="submitForm"
              >
                <div class="form-inner1">
                  <div class="input-group">
                    <span class="drop-detail">
                      <vue-select :options="Category" placeholder="Select Category" />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for Courses, Instructors"
                    />
                    <button class="btn btn-secondary sub-btn1" type="submit">
                      <i class="fa-solid fa-magnifying-glass me-2"></i>Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="trust-user">
              <p>Trusted by over 15K Users worldwide since 2024</p>
              <div class="rating">
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <i class="fas fa-star filled"></i>
                <span>4.9 / 200 Review</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="banner-image">
            <div class="row position-relative">
              <div class="logo-cover">
                <img
                  src="@/assets/img/icons/icon-30.svg"
                  alt="img"
                  class="img-fluid img-05 d-none d-xl-flex aos"
                  data-aos="zoom-in"
                />
              </div>
              <div class="col-md-6 d-flex">
                <div class="flex-fill">
                  <img
                    src="@/assets/img/hero/hero-3.jpg"
                    alt="img"
                    class="img-fluid h-100 flex-fill img-01 aos"
                    data-aos="fade-bottm"
                  />
                </div>
              </div>
              <div class="col-md-6 d-flex flex-column">
                <div class="flex-fill mb-3">
                  <img
                    src="@/assets/img/hero/hero-4.jpg"
                    alt="img"
                    class="img-fluid img-02 aos"
                    data-aos="fade-down"
                  />
                </div>
                <div class="flex-fill">
                  <img
                    src="@/assets/img/hero/hero-5.jpg"
                    alt="img"
                    class="img-fluid img-03 aos"
                    data-aos="fade-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Shapes -->
      <div class="shapes">
        <img class="shapes-one" src="@/assets/img/bg/bg-10.png" alt="Img" />
        <img class="shapes-two" src="@/assets/img/bg/bg-11.png" alt="Img" />
        <img class="shapes-middle" src="@/assets/img/bg/bg-12.png" alt="Img" />
      </div>
      <!-- /Shapes -->
    </div>
  </section>
  <!-- /Home Banner -->

  <!-- Vision Section -->
  <div class="vision-section">
    <div class="container">
      <div class="row row-gap-4">
        <div class="col-xl-3 col-lg-6 d-flex">
          <div class="vision-item flex-fill">
            <span class="vision-icon border">
              <img src="@/assets/img/icons/vision-icon-01.svg" alt="img" />
            </span>
            <p>Get certified with 100+ certification courses</p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 d-flex">
          <div class="vision-item flex-fill">
            <span class="vision-icon border">
              <img src="@/assets/img/icons/vision-icon-02.svg" alt="img" />
            </span>
            <p>Keep up with the latest in cloud</p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 d-flex">
          <div class="vision-item flex-fill">
            <span class="vision-icon border">
              <img src="@/assets/img/icons/vision-icon-03.svg" alt="img" />
            </span>
            <p>Build skills your way, from labs to courses</p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 d-flex">
          <div class="vision-item flex-fill">
            <span class="vision-icon border">
              <img src="@/assets/img/icons/vision-icon-04.svg" alt="img" />
            </span>
            <p>Stay motivated with engaging instructors</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Vision Section -->

  <!-- About Section -->
  <section class="about-section">
    <div class="container">
      <div class="row align-items-center row-gap-4">
        <div
          class="col-lg-7 wow fadeInLeft order-lg-1 order-xs-2 order-sm-2"
          data-aos="fade-up"
        >
          <div class="section-header">
            <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
              >Learn with DreamLMS</span
            >
            <h2 class="mb-0">Get Trained By Experts & Professionals around the World</h2>
          </div>
          <div class="about-content">
            <p>
              Mentor is essential for personal and professional growth. This blog
              discusses the key benefits of professional mentoring, including skill
              development, networking, and career advancement, while also offering
              strategies for finding the right mentor.
            </p>
            <div class="about-img">
              <div class="row row-gap-4">
                <div class="col-md-4">
                  <img src="@/assets/img/about/about-3.jpg" class="img-fluid" alt="img" />
                </div>
                <div class="col-md-4">
                  <img src="@/assets/img/about/about-4.jpg" class="img-fluid" alt="img" />
                </div>
                <div class="col-md-4">
                  <img src="@/assets/img/about/about-5.jpg" class="img-fluid" alt="img" />
                </div>
              </div>
            </div>
            <router-link to="/course/course-list" class="btn btn-secondary btn-xl"
              >Learn more</router-link
            >
          </div>
        </div>

        <div class="col-lg-5 order-lg-2 order-xs-1 order-sm-1">
          <div class="stylist-gallery">
            <div class="row row-gap-4">
              <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-down">
                <div
                  class="about-image border count-one d-flex align-items-center justify-content-center flex-fill project-details"
                >
                  <div class="about-count">
                    <div class="course-img">
                      <img src="@/assets/img/icons/count-one.svg" alt="Img" />
                    </div>
                    <div class="count-content-three course-count ms-0">
                      <h4>
                        <span class="counterUp"
                          ><vue3-autocounter
                            class="counter"
                            ref="counter"
                            :startAmount="0"
                            :delay="3"
                            :endAmount="10"
                            :duration="5"
                            :autoinit="true" /></span
                        >K
                      </h4>
                      <p class="mb-0">Online Courses</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-down">
                <div
                  class="about-image border count-two d-flex align-items-center justify-content-center flex-fill project-details"
                >
                  <div class="about-count">
                    <div class="course-img">
                      <img src="@/assets/img/icons/count-two.svg" alt="Img" />
                    </div>
                    <div class="count-content-three course-count ms-0">
                      <h4>
                        <span class="counterUp"
                          ><vue3-autocounter
                            class="counter"
                            ref="counter"
                            :startAmount="0"
                            :delay="3"
                            :endAmount="215"
                            :duration="5"
                            :autoinit="true" /></span
                        >+
                      </h4>
                      <p class="mb-0">Expert Tutors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-12 col-12"
                data-aos="fade-bottm"
                data-wow-delay="1.5"
              >
                <div
                  class="about-image border count-three d-flex align-items-center justify-content-center flex-fill project-details"
                >
                  <div class="about-count">
                    <div class="course-img">
                      <img src="@/assets/img/icons/count-three.svg" alt="Img" />
                    </div>
                    <div class="count-content-three course-count ms-0">
                      <h4>
                        <span class="counterUp"
                          ><vue3-autocounter
                            class="counter"
                            ref="counter"
                            :startAmount="0"
                            :delay="3"
                            :endAmount="10"
                            :duration="5"
                            :autoinit="true" /></span
                        >K
                      </h4>
                      <p class="mb-0">Ceritified Courses</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-12 col-12"
                data-aos="fade-top"
                data-wow-delay="0.5"
              >
                <div
                  class="about-image border count-four d-flex align-items-center justify-content-center flex-fill project-details"
                >
                  <div class="about-count">
                    <div class="course-img">
                      <img src="@/assets/img/icons/count-four.svg" alt="Img" />
                    </div>
                    <div class="count-content-three course-count ms-0">
                      <h4>
                        <span class="counterUp"
                          ><vue3-autocounter
                            class="counter"
                            ref="counter"
                            :startAmount="0"
                            :delay="3"
                            :endAmount="10"
                            :duration="5"
                            :autoinit="true" /></span
                        >K
                      </h4>
                      <p class="mb-0">Online Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-bg">
              <img src="@/assets/img/bg/bg-8.png" alt="img" class="about-02" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-bg">
      <img src="@/assets/img/bg/bg-7.png" alt="img" class="about-01" />
      <img src="@/assets/img/bg/bg-9.png" alt="img" class="about-03" />
    </div>
  </section>
  <!-- /About us -->

  <!-- Top Categories -->
  <section class="topcategory-sec">
    <div class="container">
      <div class="section-header text-center">
        <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
          >Favourite Course</span
        >
        <h2>Top Category</h2>
        <p>
          Discover our featured courses, specially curated to help you gain in-demand
          skills
        </p>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-1.svg" alt="Angular Development" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category"
                >Angular Development</router-link
              >
            </h5>
            <p>220 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-9.svg" alt="Python Development" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category"
                >Nodeman Development</router-link
              >
            </h5>
            <p>124 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img
                src="@/assets/img/icons/category-icon10.svg"
                alt="Node Js Development"
              />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category"
                >Node Js Development</router-link
              >
            </h5>
            <p>120 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-11.svg" alt="PHP Development" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category">AWS Development</router-link>
            </h5>
            <p>285 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-5.svg" alt="Docker Development" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category">Strapi CMS</router-link>
            </h5>
            <p>99 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-6.svg" alt="Swift Development" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category">Swift Development</router-link>
            </h5>
            <p>64 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
          <div class="categories-item categories-item-four flex-fill">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-7.svg" alt="Photography" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category">VUE JS Development</router-link>
            </h5>
            <p>32 Instructors</p>
          </div>
        </div>

        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
          <div class="categories-item categories-item-four flex-fill" data-aos="fade-up">
            <div class="categories-icon">
              <img src="@/assets/img/icons/category-8.svg" alt="Business" />
            </div>
            <h5 class="title">
              <router-link to="/category/course-category">ApostropheCMS</router-link>
            </h5>
            <p>21 Instructors</p>
          </div>
        </div>
      </div>
      <!-- View all Category -->
      <div class="more-details text-center" data-aos="fade-down">
        <router-link to="/category/course-category-3" class="btn btn-secondary btn-xl"
          >View all Category</router-link
        >
      </div>
      <!-- /View all Category -->
    </div>
  </section>
  <!-- /Top Categories -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      Category: ["Select Category", "Category One", "Category Two"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/course-list");
    },
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
