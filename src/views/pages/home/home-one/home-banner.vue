<template>
  <!-- banner -->
  <section class="banner-section">
    <img
      class="img-fluid d-none d-lg-flex banner-bg1"
      src="@/assets/img/bg/bg-15.png"
      alt="img"
    />
    <img
      class="img-fluid d-none d-lg-flex banner-bg2"
      src="@/assets/img/bg/bg-16.png"
      alt="img"
    />
    <img
      class="img-fluid d-none d-lg-flex banner-bg3"
      src="@/assets/img/bg/bg-17.png"
      alt="img"
    />
    <img
      class="img-fluid d-none d-lg-flex banner-bg4"
      src="@/assets/img/bg/bg-18.png"
      alt="img"
    />
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-xl-7 col-lg-7">
          <div class="banner-content pe-xxl-5">
            <span class="hero-title">The Leader in Online Learning</span>
            <h1 class="mb-4 text-white">
              Find the Best <span>Courses</span> from the Best <span>Mentors</span> Around
              the World
            </h1>
            <p class="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">
              Our specialized online courses are designed to bring the classroom
              experience to you, no matter where you are.
            </p>

            <form class="banner-search">
              <div class="dropdown">
                <a
                  class="hero-dropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Category <i class="isax isax-arrow-down5 fs-12"></i>
                </a>
                <ul class="dropdown-menu p-1">
                  <li><a class="dropdown-item" href="#">Design</a></li>
                  <li><a class="dropdown-item" href="#">Programming</a></li>
                  <li><a class="dropdown-item" href="#">Marketing</a></li>
                </ul>
              </div>
              <input
                type="text"
                name="search"
                class="border-0 form-control p-0"
                placeholder="Search for Courses, Instructors"
              />
              <button type="submit" class="btn btn-secondary ms-auto">
                <i class="isax isax-arrow-right-1"></i>
              </button>
            </form>
            <div
              class="d-flex align-items-center gap-4 justify-content-lg-between justify-content-center flex-wrap"
            >
              <div class="counter-item">
                <div class="counter-icon flex-shrink-0">
                  <img src="@/assets/img/icons/icon-32.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h5 class="text-purple">
                    <span class="count-digit"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="10"
                        :duration="5"
                        :autoinit="true" /></span
                    >K
                  </h5>
                  <p>Online Courses</p>
                </div>
              </div>
              <div class="counter-item">
                <div class="counter-icon flex-shrink-0">
                  <img src="@/assets/img/icons/icon-33.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h5 class="text-skyblue">
                    <span class="count-digit"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="6"
                        :duration="5"
                        :autoinit="true" /></span
                    >K
                  </h5>
                  <p>Certified Courses</p>
                </div>
              </div>
              <div class="counter-item">
                <div class="counter-icon flex-shrink-0">
                  <img src="@/assets/img/icons/icon-34.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h5 class="text-success">
                    <span class="count-digit"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="2"
                        :duration="5"
                        :autoinit="true" /></span
                    >K
                  </h5>
                  <p>Experienced Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="banner-image">
            <div class="swiper swiper-slider-banner" ref="swiperContainer">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="(slide, index) in HomeBanner"
                  :key="index"
                >
                  <div class="course-item-two course-item mb-0">
                    <div class="course-img">
                      <img
                        :src="require(`@/assets/img/course/${slide.Image}`)"
                        alt="Course image"
                        class="img-fluid"
                      />
                      <div
                        class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                      >
                        <a href="#" class="fav-icon" @click.prevent="toggleFavorite">
                          <i class="isax isax-heart"></i>
                        </a>
                        <a href="#" class="brand-icon ms-auto">
                          <img
                            :src="require(`@/assets/img/${slide.BrandIcon}`)"
                            alt="Brand logo"
                            class="img-fluid"
                          />
                        </a>
                      </div>
                    </div>

                    <div class="course-content">
                      <div class="d-flex justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                          <a href="#" class="avatar avatar-sm">
                            <img
                              :src="require(`@/assets/img/user/${slide.Avatar}`)"
                              alt="Instructor avatar"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <div class="ms-2">
                            <a href="#" class="link-default fs-14">{{ slide.Name }}</a>
                          </div>
                        </div>
                        <span
                          class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium"
                        >
                          {{ slide.Role }}
                        </span>
                      </div>

                      <h6 class="mb-2">
                        <router-link to="/details/course-details-1">{{
                          slide.Title
                        }}</router-link>
                      </h6>

                      <p class="d-flex align-items-center mb-3">
                        <i class="ti ti-star-filled text-warning me-2"></i>
                        {{ slide.Rating }}
                      </p>

                      <div class="d-flex align-items-center justify-content-between">
                        <h6 class="text-secondary fs-16 fw-semi-bold mb-0">
                          {{ slide.Fees }}
                        </h6>
                        <router-link
                          to="/courses/cart"
                          class="btn btn-dark btn-sm d-inline-flex align-items-center"
                        >
                          Add to Cart
                          <i class="isax isax-arrow-right-3 ms-1"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- banner -->
</template>

<script>
import { ref, onMounted } from "vue";
import Swiper from "swiper";
import { EffectCards } from "swiper";
import "swiper/css/swiper.css";
// import "swiper/css/swiper.min.css";
import "@/assets/css/swiper-bundle.min.css";
import "@/assets/css/swiper-bundle.min.js";

import HomeBanner from "@/assets/json/home-banner.json";
export default {
  data() {
    return {
      HomeBanner: HomeBanner,
    };
  },
  setup() {
    const swiperContainer = ref(null);

    const initSwiper = () => {
      if (swiperContainer.value) {
        new Swiper(swiperContainer.value, {
          modules: [EffectCards],
          effect: "cards",
          grabCursor: true,
          loop: true,
          centeredSlides: true,
          cardsEffect: {
            slideShadows: false,
            perSlideOffset: 15,
            perSlideRotate: 2,
          },
        });
      }
    };

    const toggleFavorite = (event) => {
      // Add your favorite toggle logic here
      console.log("Toggle favorite", event);
    };

    onMounted(() => {
      initSwiper();
    });

    return {
      swiperContainer,
      toggleFavorite,
    };
  },
};
</script>
