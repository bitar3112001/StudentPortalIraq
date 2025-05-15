<template>
  <!-- Feature Instructors -->
  <div class="feature-instructors-sec">
    <div class="container">
      <div class="section-header text-center" data-aos="fade-up">
        <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
          >New Courses</span
        >
        <h2>Featured Instructor</h2>
        <p>
          95% of eLearning learners report our hands-on content directly helped their
          careers.
        </p>
      </div>
      <!-- Featured Instructor -->
      <div class="featured-instructor-two">
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
            <div class="instructor-item instructor-item-four">
              <div class="instructors-img">
                <router-link to="/pages-instructor/instructor-list" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="Img"
                    src="@/assets/img/instructor/instructor-01.jpg"
                  />
                </router-link>
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                >
                  <div class="featured-img">
                    <img
                      src="@/assets/img/icons/category-1.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0);" class="favourite ms-auto">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
              </div>
              <div class="instructor-content">
                <h5 class="title">
                  <a href="instructor-details.html">Julian Adrose</a>
                </h5>
                <span class="designation">Angular Expert</span>
                <div class="student-count">
                  <i class="fa-solid fa-user-group me-2"></i><span>50 Students</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
            <div class="instructor-item instructor-item-four">
              <div class="instructors-img">
                <router-link to="/pages-instructor/instructor-list" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="Img"
                    src="@/assets/img/instructor/instructor-02.jpg"
                  />
                </router-link>
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                >
                  <div class="featured-img">
                    <img
                      src="@/assets/img/icons/category-2.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0);" class="favourite ms-auto">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
              </div>
              <div class="instructor-content">
                <h5 class="title">
                  <a href="instructor-details.html">Gallegos</a>
                </h5>
                <span class="designation">Angular Expert</span>
                <div class="student-count">
                  <i class="fa-solid fa-user-group me-2"></i><span>70 Students</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
            <div class="instructor-item instructor-item-four">
              <div class="instructors-img">
                <router-link to="/pages-instructor/instructor-list" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="Img"
                    src="@/assets/img/instructor/instructor-03.jpg"
                  />
                </router-link>
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                >
                  <div class="featured-img">
                    <img
                      src="@/assets/img/icons/category-3.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0);" class="favourite ms-auto">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
              </div>
              <div class="instructor-content">
                <h5 class="title">
                  <a href="instructor-details.html">Kristi</a>
                </h5>
                <span class="designation">Node Js</span>
                <div class="student-count">
                  <i class="fa-solid fa-user-group me-2"></i><span>60 Students</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
            <div class="instructor-item instructor-item-four">
              <div class="instructors-img">
                <router-link to="/pages-instructor/instructor-list" tabindex="0">
                  <img
                    class="img-fluid"
                    alt="Img"
                    src="@/assets/img/instructor/instructor-04.jpg"
                  />
                </router-link>
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                >
                  <div class="featured-img">
                    <img
                      src="@/assets/img/icons/category-4.svg"
                      alt="Img"
                      class="img-fluid"
                    />
                  </div>
                  <a href="javascript:void(0);" class="favourite ms-auto">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
              </div>
              <div class="instructor-content">
                <h5 class="title">
                  <a href="instructor-details.html">Pinero</a>
                </h5>
                <span class="designation">Python</span>
                <div class="student-count">
                  <i class="fa-solid fa-user-group me-2"></i><span>40 Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Featured Instructor -->

      <!-- View all Category -->
      <div class="col-lg-12">
        <div class="more-details text-center" data-aos="fade-up">
          <router-link to="/pages-instructor/instructor-list" class="btn btn-secondary btn-xl"
            >View all Instructors</router-link
          >
        </div>
      </div>
      <!-- /View all Category -->
    </div>
  </div>
  <!-- /Feature Instructors -->

  <!-- Leading Companies -->
  <section class="real-reviews-sec">
    <div class="container">
      <div class="section-header text-center" data-aos="fade-up">
        <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
          >Check out these real reviews</span
        >
        <h2>Users love us Don't take it from us</h2>
        <p>
          95% of eLearning learners report our hands-on content directly helped their
          careers.
        </p>
      </div>
      <div class="real-reviews-group">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up">
            <div class="reviews-img">
              <img
                src="@/assets/img/feature/feature-21.jpg"
                alt="Img"
                class="img-fluid rounded-4"
              />
              <span class="review-icon">
                <img src="@/assets/img/icons/review.svg" alt="img" />
              </span>
            </div>
          </div>
          <user-four></user-four>
        </div>
      </div>

      <div class="client-two-carousel">
        <div class="lead-group-slider owl-carousel owl-theme">
          <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="3000">
            <Slide v-for="record in feature_four" :key="record.id">
              <div class="item">
                <div class="lead-img">
                  <img
                    class="img-fluid"
                    alt="img"
                    :src="require(`@/assets/img/client/${record.Image}`)"
                  />
                </div>
              </div>
            </Slide>
            <template #addons> </template>
          </Carousel>
        </div>
      </div>
    </div>
    <img src="@/assets/img/bg/bg-9.png" alt="img" class="review-bg" />
  </section>
  <!-- /Leading Companies -->

  <!-- Latest Blog -->
  <section class="latest-blog-sec">
    <div class="container">
      <div class="section-header text-center" data-aos="fade-up">
        <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
          >News & Events</span
        >
        <h2>Our Latest Updates</h2>
        <p>Dont Miss Stay Updated with the Latest Articles and Insights</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
          <div class="event-blog-main">
            <div class="latest-blog-img">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-31.jpg" />
              </router-link>
            </div>
            <div class="blog-content">
              <router-link to="/blogs/blog-details" class="category-name">LMS</router-link>
              <h4 class="title">
                <router-link to="/blogs/blog-details"
                  >Promoting Health & Well being in Schools</router-link
                >
              </h4>
              <p class="blog-date">
                <i class="isax isax-calendar-1 me-1"></i>14 Sep 2022
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
          <div class="event-blog-main">
            <div class="latest-blog-img">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-32.jpg" />
              </router-link>
            </div>
            <div class="blog-content">
              <router-link to="/blogs/blog-details" class="category-name">Sales</router-link>
              <h4 class="title">
                <router-link to="/blog-layouts/blog-grid"
                  >Why an LMS is Essential for Modern Education</router-link
                >
              </h4>
              <p class="blog-date">
                <i class="isax isax-calendar-1 me-1"></i>14 Sep 2022
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-down">
          <div class="event-blog-main">
            <div class="latest-blog-img">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-33.jpg" />
              </router-link>
            </div>
            <div class="blog-content">
              <router-link to="/blogs/blog-details" class="category-name"
                >Website Design</router-link
              >
              <h4 class="title">
                <router-link to="/blogs/blog-details"
                  >11 Tips to Help You Get New Clients with the design</router-link
                >
              </h4>
              <p class="blog-date">
                <i class="isax isax-calendar-1 me-1"></i>14 Sep 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- View all  Events -->
      <div class="col-lg-12">
        <div class="more-details text-center" data-aos="fade-down">
          <router-link to="/blog-layouts/blog-grid" class="btn btn-secondary btn-xl"
            >View all Updates</router-link
          >
        </div>
      </div>
      <!-- /View all  Events -->
    </div>
    <img src="@/assets/img/bg/blog-bg.png" alt="img" class="blog-bg" />
  </section>
  <!-- /Latest Blog -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import feature_four from "@/assets/json/feature-four.json";
export default {
  data() {
    return {
      feature_four: feature_four,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
      breakpointslead: {
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
