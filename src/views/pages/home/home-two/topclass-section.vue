<template>
  <div class="container position-relative">
    <div class="trending-instruction">
      <div class="section-header text-center">
        <span class="section-badge"> المدرسون الرائجون </span>
        <h2>مدرسون من الدرجة الأولى ومحترفون</h2>
        <p>تمكين التغيير: قصص من الذين اتخذوا الخطوة</p>
      </div>
      <div class="owl-carousel instructor-carousel owl-theme nav-bottom">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="record in topclass_section" :key="record.id">
            <div class="item">
              <div class="instructor-item">
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                >
                  <a href="javascript:void(0);" class="favourite ms-auto">
                    <i class="isax isax-heart"></i>
                  </a>
                </div>
                <div class="instructor-img">
                  <router-link to="/pages-instructor/instructor-details">
                    <img
                      :src="require(`@/assets/img/instructor/${record.Image}`)"
                      alt="img"
                    />
                    <span class="verify">
                      <img
                        src="@/assets/img/icons/verify-icon.svg"
                        alt="img"
                        class="img-fluid"
                      />
                    </span>
                  </router-link>
                </div>
                <div class="instructor-content">
                  <h3 class="title">
                    <router-link to="/pages-instructor/instructor-details">{{
                      record.Name
                    }}</router-link>
                  </h3>
                  <span class="designation">{{ record.Position }}</span>
                  <p class="rating">
                    <i class="fas fa-star me-1"></i>{{ record.Reviews }}
                  </p>
                  <div class="instructor-social">
                    <a href="javascript:void(0);">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="fab fa-x-twitter"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="fab fa-youtube"></i>
                    </a>
                    <a href="javascript:void(0);">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>
import topclass_section from "@/assets/json/topclass-section.json";

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
      topclass_section: topclass_section,
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
};
</script>
