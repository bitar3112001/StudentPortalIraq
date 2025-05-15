<template>
  <section class="home-slide-five">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6 col-12">
          <div class="home-slide-five-face" data-aos="fade-down">
            <!-- Banner Text -->
            <div class="home-slide-five-text">
              <span class="text-warning d-inline-flex fw-semibold text-uppercase mb-3"
                >The Leader in Online Learning</span
              >
              <h1 class="text-white mb-4">
                Engaging & Accessible Online Courses For All
              </h1>
              <p class="text-white fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">
                Trusted by over 15K Users worldwide since 2022
              </p>
            </div>
            <!-- /Banner Text -->

            <!-- banner Seach Category -->
            <div class="banner-content-five">
              <form class="form" @submit.prevent="submitForm">
                <div class="form-inner-five">
                  <div class="input-group">
                    <!-- Slect Category -->
                    <span class="drop-detail-five">
                      <vue-select :options="Category" placeholder="Category" />
                    </span>
                    <!-- Slect Category -->

                    <!-- Search -->
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Search for Courses, Instructors"
                    />
                    <!-- Search -->

                    <!-- Submit Button -->
                    <button class="btn btn-primary sub-btn" type="submit">
                      <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    </button>
                    <!-- Submit Button -->
                  </div>
                </div>
              </form>
            </div>
            <!-- /banner Seach Category -->

            <!-- Review and Experience -->
            <div class="review-five-group">
              <div class="review-user-five d-flex align-items-center">
                <ul class="review-users-list">
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="leader 1"
                      ><img src="@/assets/img/user/user-01.jpg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="leader 2"
                      ><img src="@/assets/img/user/user-02.jpg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title=""
                      data-bs-original-title="leader 3"
                      ><img src="@/assets/img/user/user-03.jpg" alt="img"
                    /></a>
                  </li>
                </ul>
                <div class="review-rating-five">
                  <div class="rating-star">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <p>4.9 / 200 Review</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Review and Experience -->
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-12">
          <div class="banner-six-img">
            <div class="row">
              <div class="col-lg-6 align-self-end">
                <div class="ban-img-1" data-aos="fade-up">
                  <img src="@/assets/img/hero/hero-7.png" alt="img" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="ban-img-2" data-aos="fade-down">
                  <img
                    class="ban-shape2"
                    data-aos="fade-down"
                    data-aos-delay="250"
                    src="@/assets/img/shapes/dot-group.png"
                    alt="img"
                  />
                  <img
                    class="ban-shape3"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    src="@/assets/img/banner/ban-shape-2.svg"
                    alt="img"
                  />
                  <img
                    class="ban-shape4"
                    data-aos="fade-down"
                    data-aos-delay="350"
                    src="@/assets/img/banner/ban-shape-3.svg"
                    alt="img"
                  />
                  <img src="@/assets/img/hero/hero-8.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vector-shapes-five d-none d-lg-flex">
        <img src="@/assets/img/bg/banner-vector.svg" alt="Img" />
      </div>
    </div>
  </section>
  <!-- Leading Companies -->
  <section class="leading-section-five">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-6" data-aos="fade-down">
          <div class="leading-five-content course-count">
            <h3 class="mb-2">Trusted By <span class="counterUp">500</span>+</h3>
            <p>Leading Universities And Companies</p>
          </div>
        </div>
        <div class="col-lg-8 col-md-6">
          <div class="lead-group-five">
            <div class="leading-slider-five">
              <Carousel
                :autoplay="2000"
                :loop="true"
                :wrap-around="true"
                :settings="settingsland"
                :breakpoints="breakpointsland"
              >
                <Slide v-for="item in Banner_six" :key="item.id">
                  <div class="item">
                    <div class="lead-img">
                      <img
                        class="img-fluid"
                        alt="Img"
                        :src="require(`@/assets/img/client/${item.Image}`)"
                      />
                    </div>
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Leading Companies -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Banner_six from "@/assets/json/banner-six.json";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      Banner_six: Banner_six,
      Category: ["category", "Angular", "Node Js", "React", "Python"],
      breakpointsland: {
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
      settingsland: {
        itemsToShow: 1,
        snapAlign: "center",
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
