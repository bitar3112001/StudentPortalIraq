<template>
  <!-- featured course -->
  <section class="featured-courses-section">
    <div class="container">
      <div class="section-header text-center">
        <span
          class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
          >Featured Courses</span
        >
        <h2>What’s New in DreamsLMS</h2>
        <p>
          Discover our featured courses, specially curated to help you gain in-demand
          skills
        </p>
      </div>
      <div class="feature-course-slider-2">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in HomeFeatured" :key="item.id">
            <div>
              <div class="course-item">
                <div class="course-img">
                  <router-link to="/details/course-details-1">
                    <img
                      :src="require(`@/assets/img/course/${item.Image}`)"
                      alt="img"
                      class="img-fluid"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <span class="price-badge ms-auto">{{ item.Fees }}</span>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span
                    class="badge badge-md rounded-pill shadow-none"
                    :class="item.BadgeClass"
                    >{{ item.Badge }}</span
                  >
                  <a href="javascript:void(0);" class="fav-icon"
                    ><i class="isax isax-heart"></i
                  ></a>
                </div>
                <div class="pb-3 border-bottom mb-3 text-start">
                  <h5>
                    <router-link to="/details/course-details-1">{{
                      item.Title
                    }}</router-link>
                  </h5>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="course-rating">
                    <span class="course-user"
                      ><a href="javascript:void(0);"
                        ><img
                          :src="require(`@/assets/img/user/${item.Avatar}`)"
                          alt="img"
                          class="img-fluid" /></a
                    ></span>
                    <a href="javascript:void(0);">{{ item.Name }}</a>
                  </div>
                  <div class="d-flex">
                    <span class="d-flex align-items-center rating"
                      ><i class="fa-solid fa-star text-warning me-2"></i
                      >{{ item.Rating }}</span
                    >
                  </div>
                </div>
                <router-link to="/details/course-details-1" class="btn buy-course-btn"
                  >Buy Course Now</router-link
                >
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <router-link to="/course/course-list" class="btn btn-primary btn-md"
          >View All Courses</router-link
        >
      </div>
    </div>
  </section>
  <!-- /featured course -->

  <!-- community-to-learn -->
  <section class="community-to-learn">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="section-header">
            <span
              class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
              >Advanced Learning</span
            >
            <h2>Creating a community of learners.</h2>
            <p>
              We're dedicated to transforming education by providing a diverse range of
              high-quality courses that cater to learners of all levels.
            </p>
          </div>
          <div class="community-item d-flex align-items-center">
            <span class="community-icon-1">
              <i class="isax isax-book-saved5"></i>
            </span>
            <div>
              <h5 class="mb-2">Learn from anywhere</h5>
              <p class="mb-0">
                Learning from anywhere has become a transform aspect of modern education,
                allowing individuals.
              </p>
            </div>
          </div>
          <div class="community-item d-flex align-items-center">
            <span class="community-icon-2">
              <i class="isax isax-bookmark5"></i>
            </span>
            <div>
              <h5 class="mb-2">Expert Mentors</h5>
              <p class="mb-0">
                Learning from anywhere has become a transform aspect of modern education,
                allowing individuals.
              </p>
            </div>
          </div>
          <div class="community-item d-flex align-items-center">
            <span class="community-icon-3">
              <i class="isax isax-chart-26"></i>
            </span>
            <div>
              <h5 class="mb-2">Learn in demand skills</h5>
              <p class="mb-0">
                In today's rapidly evolving job market, learning in demand skills is
                crucial for career advancement.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <router-link to="/" class="btn btn-secondary btn-md"
              >Enroll as Student</router-link
            >
            <router-link to="/pages/become-an-instructor" class="btn btn-dark btn-md"
              >Apply as Tutor</router-link
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div class="community-img d-none d-lg-flex">
            <img
              src="@/assets/img/shapes/shape-5.png"
              alt="img"
              class="img-fluid community-img-01"
            />
            <img
              src="@/assets/img/shapes/shape-6.png"
              alt="img"
              class="img-fluid community-img-02"
            />
            <img
              src="@/assets/img/feature/feature-2.jpg"
              alt="img"
              class="img-fluid community-img-03"
            />
            <img
              src="@/assets/img/feature/feature-3.jpg"
              alt="img"
              class="img-fluid community-img-04"
            />
            <img
              src="@/assets/img/shapes/shape-7.svg"
              alt="img"
              class="img-fluid community-img-05"
            />
            <div class="community-count p-2">
              <div class="enrolled-list">
                <div class="avatar-list-stacked mb-2">
                  <span class="avatar avatar-rounded">
                    <img
                      class="border border-white"
                      src="@/assets/img/user/user-01.jpg"
                      alt="img"
                    />
                  </span>
                  <span class="avatar avatar-rounded">
                    <img
                      class="border border-white"
                      src="@/assets/img/user/user-03.jpg"
                      alt="img"
                    />
                  </span>
                  <span class="avatar avatar-rounded">
                    <img
                      class="border border-white"
                      src="@/assets/img/user/user-07.jpg"
                      alt="img"
                    />
                  </span>
                  <span class="avatar avatar-rounded">
                    <img
                      class="border border-white"
                      src="@/assets/img/user/user-08.jpg"
                      alt="img"
                    />
                  </span>
                  <span class="avatar avatar-rounded">
                    <img src="@/assets/img/user/user-06.jpg" alt="img" />
                  </span>
                </div>
                <p class="mb-0">
                  <span class="text-secondary">35K+</span> Students Enrolled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /community-to-learn -->
</template>

<script>
import HomeFeatured from "@/assets/json/home-featured-course.json";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      HomeFeatured: HomeFeatured,
    };
  },
  setup() {
    return {
      // carousel settings
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
          itemsToShow: 2,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
