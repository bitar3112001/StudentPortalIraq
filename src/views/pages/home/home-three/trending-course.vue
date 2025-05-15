<template>
  <!-- Trending Course -->
  <section class="section trend-course">
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
          <h2 class="mb-0">Trending Courses</h2>
        </div>
        <div>
          <router-link to="/course/course-list" class="btn btn-secondary btn-xl"
            >View all Courses</router-link
          >
        </div>
      </div>
      <div class="trending-course owl-theme">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in trendingcourse" :key="item.id">
            <div class="course-box trend-box">
              <div class="course-item course-item-three mx-0 flex-fill">
                <div class="course-img">
                  <router-link to="/details/course-details-1">
                    <img
                      class="img-fluid"
                      alt="Img"
                      :src="require(`@/assets/img/course/${item.img}`)"
                    />
                  </router-link>
                  <div class="price">
                    <h3>
                      {{ item.amt }}<span>{{ item.amt1 }}</span>
                    </h3>
                  </div>
                </div>
                <div class="course-content">
                  <div class="course-user">
                    <div class="course-user-img">
                      <router-link to="/instructor/instructor-profile">
                        <img
                          :src="require(`@/assets/img/user/${item.img1}`)"
                          alt="Img"
                          class="img-fluid"
                        />
                      </router-link>
                      <div class="course-name">
                        <h4>
                          <router-link to="/instructor/instructor-profile">{{
                            item.name
                          }}</router-link>
                        </h4>
                        <p>{{ item.instructor }}</p>
                      </div>
                    </div>
                    <div
                      class="course-share d-flex align-items-center justify-content-center"
                    >
                      <a href="#"><i class="fa-regular fa-heart"></i></a>
                    </div>
                  </div>
                  <h3 class="title text-start">
                    <router-link to="/details/course-details-1">{{
                      item.title
                    }}</router-link>
                  </h3>
                  <div class="course-info d-flex align-items-center">
                    <div class="course-lesson d-flex align-items-center">
                      <img
                        src="@/assets/img/icons/icon-3.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                      <p>{{ item.lesson }}</p>
                    </div>
                    <div class="course-time d-flex align-items-center">
                      <img
                        src="@/assets/img/icons/icon-4.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                      <p>{{ item.min }}</p>
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
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
      <feature-instructors></feature-instructors>
    </div>
  </section>
  <!-- /Trending Course -->

  <leading-companies></leading-companies>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import trendingcourse from "@/assets/json/trendingcourse.json";
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
      trendingcourse: trendingcourse,
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
          itemsToShow: 3,
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
