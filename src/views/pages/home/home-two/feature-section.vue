<template>
  <div class="feature-section position-relative">
    <div class="container">
      <img
        src="@/assets/img/bg/feature-bg-01.png"
        alt="img"
        class="bg-star-01 img-fluid"
      />
      <img
        src="@/assets/img/bg/feature-bg-02.png"
        alt="img"
        class="bg-star-02 img-fluid"
      />
      <div class="section-header text-center">
        <span class="section-badge"> ما الجديد </span>
        <h2>الدورات المميزة</h2>
        <p>
          اكتشف دوراتنا المميزة، المصممة خصيصًا لمساعدتك على اكتساب المهارات المطلوبة
        </p>
      </div>
      <div class="course-slider-slick">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="record in feature_section" :key="record.id">
            <div class="item text-start">
              <div class="course-item-two course-item">
                <div class="course-img">
                  <router-link to="/details/course-details-1">
                    <img
                      :src="require(`@/assets/img/course/${record.Image}`)"
                      alt="img"
                      class="img-fluid"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="fav-icon"
                      ><i class="isax isax-heart"></i
                    ></a>
                    <a href="javascript:void(0);" class="brand-icon ms-auto">
                      <img
                        :src="require(`@/assets/img/${record.IconImage}`)"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
                <div class="course-content">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/pages-instructor/instructor-details"
                        class="avatar avatar-sm"
                      >
                        <img
                          :src="require(`@/assets/img/user/${record.UserImage}`)"
                          alt="img"
                          class="img-fluid avatar avatar-sm rounded-circle"
                        />
                      </router-link>
                      <div class="ms-2">
                        <router-link
                          to="/pages-instructor/instructor-details"
                          class="link-default fs-14"
                          >{{ record.UserName }}</router-link
                        >
                      </div>
                    </div>
                    <span
                      class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0"
                    >
                      {{ record.Badge }}
                    </span>
                  </div>
                  <h6 class="title mb-2">
                    <router-link to="/details/course-details-1">{{
                      record.Title
                    }}</router-link>
                  </h6>
                  <p class="d-flex align-items-center mb-3">
                    <i class="ti ti-star-filled text-warning me-2"></i
                    >{{ record.Reviews }}
                  </p>
                  <div class="d-flex align-items-center justify-content-between">
                    <h6 class="text-secondary fs-16 fw-semi-bold mb-0">
                      {{ record.Amount }}
                    </h6>
                    <router-link
                      to="/courses/cart"
                      class="btn btn-dark btn-sm d-inline-flex align-items-center"
                      >أضف إلى السلة<i class="isax isax-arrow-right-3 ms-1"></i
                    ></router-link>
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
import feature_section from "@/assets/json/feature-section.json";

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
      feature_section: feature_section,
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
