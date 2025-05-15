<template>
  <!-- Home Banner -->
  <section class="banner-section-three d-flex align-items-center">
    <img src="@/assets/img/bg/bg-3.png" alt="img" class="img-fluid banner-bg-01" />
    <img src="@/assets/img/bg/bg-4.png" alt="img" class="img-fluid banner-bg-02" />
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="home-slide-face aos" data-aos="fade-up">
            <div class="home-slide-text">
              <span class="fw-bold text-uppercase">The Leader in Online Learning</span>
              <h1 class="mt-4">
                Engaging & Accessible
                <span class="text-secondary">Online Courses</span> For All
              </h1>
              <p class="mt-4">
                Our specialized online courses are designed to bring the classroom
                experience to you, no matter where you are.
              </p>
            </div>
            <div class="banner-content">
              <form class="form" @submit.prevent="submitForm">
                <div class="form-inner">
                  <div class="input-group">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Search School, Online eductional centers, etc"
                    />
                    <span class="drop-detail">
                      <vue-select
                        :options="Category"
                        placeholder="Category"
                        class="vueselect"
                      />
                    </span>
                    <button class="btn sub-btn" type="submit">
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="trust-user">
              <p>Trusted by over 15K Users <br />worldwide since 2023</p>
              <div class="trust-rating d-flex align-items-center">
                <div class="rate-head">
                  <h2>
                    <span>
                      <vue3-autocounter
                        ref="counter"
                        :startAmount="200"
                        :endAmount="1000"
                        :duration="3"
                        separator=""
                        :autoinit="true"
                      /> </span
                    >+
                  </h2>
                </div>
                <div class="rating d-flex align-items-center">
                  <h2 class="d-inline-block average-rating">4.4</h2>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div class="banner-image aos" data-aos="fade-up">
            <img src="@/assets/img/hero/hero-2.png" alt="Img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
  <div class="section student-course">
    <div class="container">
      <div class="course-widget">
        <div class="row row-gap-4">
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="expert-item flex-fill aos" data-aos="fade-up">
              <div class="expert-img">
                <img src="@/assets/img/icons/icon-24.svg" alt="Img" />
              </div>
              <div class="expert-content">
                <h4>
                  <span class="counterup">
                    <vue3-autocounter
                      class="counter"
                      ref="counter"
                      :startAmount="1"
                      :delay="3"
                      :endAmount="10"
                      :duration="5"
                      :autoinit="true"
                    /> </span
                  >K
                </h4>
                <p>Online Courses</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="expert-item flex-fill aos" data-aos="fade-up">
              <div class="expert-img">
                <img src="@/assets/img/icons/icon-25.svg" alt="Img" />
              </div>
              <div class="expert-content">
                <h4>
                  <span class="counterup">
                    <vue3-autocounter
                      class="counter"
                      ref="counter"
                      :startAmount="10"
                      :delay="3"
                      :endAmount="200"
                      :duration="5"
                      :autoinit="true"
                    /> </span
                  >K
                </h4>
                <p>Expert Tutors</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="expert-item flex-fill aos" data-aos="fade-up">
              <div class="expert-img">
                <img src="@/assets/img/icons/icon-26.svg" alt="Img" />
              </div>
              <div class="expert-content">
                <h4>
                  <span class="counterup">
                    <vue3-autocounter
                      class="counter"
                      ref="counter"
                      :startAmount="1"
                      :delay="3"
                      :endAmount="6"
                      :duration="5"
                      :autoinit="true"
                    /> </span
                  >K
                </h4>
                <p>Ceritified Courses</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex">
            <div class="expert-item flex-fill aos" data-aos="fade-up">
              <div class="expert-img">
                <img src="@/assets/img/icons/icon-27.svg" alt="Img" />
              </div>
              <div class="expert-content">
                <h4>
                  <span class="counterup">
                    <vue3-autocounter
                      class="counter"
                      ref="counter"
                      :startAmount="5"
                      :delay="3"
                      :endAmount="60"
                      :duration="5"
                      :autoinit="true"
                    /> </span
                  >K
                </h4>
                <p>Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Home Banner -->

  <!-- Top Categories -->
  <section class="section how-it-works">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-3 aos"
        data-aos="fade-up"
      >
        <div class="section-header">
          <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block"
            >Favourite Course</span
          >
          <h2 class="mb-0">Top Category</h2>
        </div>
        <div>
          <router-link to="/category/course-category-2" class="btn btn-secondary btn-xl"
            >View all Categories</router-link
          >
        </div>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="item in dashboard" :key="item.id" class="mentoring-course">
          <div class="categories-item categories-item-two">
            <span class="categories-icon">
              <img :src="require(`@/assets/img/category/icons/${item.img}`)" alt="Img" />
            </span>
            <h5>
              <router-link to="/category/course-category">{{
                item.Development
              }}</router-link>
            </h5>
            <p>{{ item.Instructors }}</p>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
  <!-- /Top Categories -->
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import dashboard from "@/assets/json/dashboard.json";
import "vue3-carousel/dist/carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      Category: ["Category", "Angular", "Node Js", "React", "Python"],
      dashboard: dashboard,
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
          itemsToShow: 3.5,
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
