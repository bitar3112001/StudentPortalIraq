<template>
  <!-- Feature Instructors -->
  <div class="feature-instructors">
    <div class="section-header text-center aos" data-aos="fade-up">
      <h2>Featured Instructor</h2>
      <p class="mb-0">Our team combines cutting-edge design with robust development</p>
    </div>
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="item in feature" :key="item.id" class="instructors-course">
        <div class="instructor-item instructor-item-two">
          <div class="instructors-img">
            <router-link to="/pages-instructor/instructor-list" tabindex="0">
              <img
                class="img-fluid"
                alt="Img"
                :src="require(`@/assets/img/instructor/${item.img}`)"
              />
            </router-link>
            <div
              class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
            >
              <span class="verify">
                <i class="isax isax-verify5"></i>
              </span>
              <router-link to="/course/course-list" class="course-count ms-auto"
                >20 Courses</router-link
              >
            </div>
            <div
              class="position-absolute end-0 bottom-0 d-flex align-items-start w-100 z-index-2 p-3"
            >
              <a href="javascript:void(0);" class="favourite selected ms-auto">
                <i class="isax isax-heart"></i>
              </a>
            </div>
          </div>
          <div class="instructor-content">
            <h3 class="title">
              <router-link to="/pages-instructor/instructor-details">{{
                item.name
              }}</router-link>
            </h3>
            <span class="designation">{{ item.Developer }}</span>
            <div class="student-count">
              <i class="isax isax-profile-2user5 text-secondary me-2"></i
              ><span>{{ item.Students }}</span>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <!-- /Feature Instructors -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import feature from "@/assets/json/feature.json";

import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      feature: feature,
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
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
