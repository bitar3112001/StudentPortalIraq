<template>
  <!-- top courses -->
  <section class="top-courses-sec">
    <img class="top-courses-bg" src="@/assets/img/bg/bg-20.png" alt="img" />
    <div class="container">
      <div class="section-header text-center">
        <span
          class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
          >Our Categories</span
        >
        <h2>Top Courses & Categories</h2>
        <p>
          The right course, guided by an expert mentor, can provide invaluable insights,
          practical skills
        </p>
      </div>
      <div class="top-courses-slider lazy">
        <Carousel
          :loop="true"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in HomeCourses" :key="item.id">
            <div class="top-courses d-inline-block">
              <div class="categories-item categories-item-three mb-0">
                <img
                  class="mx-auto"
                  :src="require(`@/assets/img/category/icons/${item.Image}`)"
                  alt="img"
                />
                <h6 class="title">
                  <router-link to="/category/course-category">{{
                    item.Title
                  }}</router-link>
                </h6>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
      <router-link to="/category/course-category" class="btn btn-primary btn-md"
        >View All Categories</router-link
      >
    </div>
  </section>
  <!-- /top courses -->

  <!-- trust -->
  <section class="trust-sec">
    <div class="container">
      <div class="video-showcase">
        <img
          src="@/assets/img/feature/feature-1.jpg"
          class="img-fluid w-100 rounded-2"
          alt="banner"
        />
        <div class="video-play">
          <a href="https://www.youtube.com/embed/1trvO6dqQUI" data-fancybox=""
            ><i class="isax isax-play5"></i
          ></a>
        </div>
      </div>
      <div class="trust-content">
        <img src="@/assets/img/bg/bg-19.png" alt="img" class="w-100 trust-bg" />
        <div class="row justify-content-between">
          <div class="col-md-4">
            <h4>Trusted by the 15,000+ happy students and online users since 2000</h4>
            <div class="d-flex align-items-center flex-wrap mt-5 gap-2">
              <router-link to="/" class="btn btn-secondary"
                >Enroll as Student</router-link
              >
              <router-link to="/pages/become-an-instructor" class="btn btn-dark"
                >Apply as Tutor</router-link
              >
            </div>
          </div>
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-6">
                <h4 class="text-white mb-2">9.8/10</h4>
                <h5 class="text-white mb-2">Course Approval Score</h5>
                <p class="text-white mb-5">
                  Achieving a complete course approval score is a significant.
                </p>
              </div>
              <div class="col-md-6">
                <h4 class="text-white mb-2">13k</h4>
                <h5 class="text-white mb-2">Satisfied Students Worldwide</h5>
                <p class="text-white mb-5">
                  Satisfied students worldwide share a common thread of happiness.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center bg-white user-goal p-2">
              <div class="avatar avatar-lg flex-shrink-0">
                <img class="rounded-pill" src="@/assets/img/user/user-28.jpg" alt="img" />
              </div>
              <p class="text-gray-9 mb-0">
                “All courses are incredibly help people to achieve their goals”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /trust -->
</template>

<script>
import HomeCourses from "@/assets/json/home-courses.json";
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
      HomeCourses: HomeCourses,
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
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
