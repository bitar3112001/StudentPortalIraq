<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">About Us</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- about -->
  <section class="about-section-two pb-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="p-3 p-sm-4 position-relative">
            <div class="position-absolute top-0 start-0 z-n1">
              <img src="@/assets/img/shapes/shape-1.svg" alt="img" />
            </div>
            <div class="position-absolute bottom-0 end-0 z-n1">
              <img src="@/assets/img/shapes/shape-2.svg" alt="img" />
            </div>
            <div class="position-absolute bottom-0 start-0 mb-md-5 ms-md-n5">
              <img src="@/assets/img/icons/icon-1.svg" alt="img" />
            </div>
            <img
              class="img-fluid img-radius"
              src="@/assets/img/about/about-2.svg"
              alt="img"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="ps-0 ps-lg-2 pt-4 pt-lg-0 ps-xl-5">
            <div class="section-header">
              <span
                class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
                >About</span
              >
              <h2>Empowering Learning, Inspiring Growth</h2>
              <p>
                At DreamsLMS, we make education accessible to all with interactive courses
                and expert-led content. Learn anytime, anywhere, and achieve your goals
                seamlessly.
              </p>
            </div>
            <div class="d-flex align-items-center about-us-banner">
              <div>
                <span
                  class="bg-primary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center"
                >
                  <i class="isax isax-book-1 fs-24"></i>
                </span>
              </div>
              <div class="ps-3">
                <h6 class="mb-2">Learn from anywhere</h6>
                <p>
                  Learning from anywhere has become a transform aspect of modern
                  education, allowing individuals.
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center about-us-banner">
              <div>
                <span
                  class="bg-secondary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center"
                >
                  <i class="isax isax-bookmark5 fs-24"></i>
                </span>
              </div>
              <div class="ps-3">
                <h6 class="mb-2">Expert Mentors</h6>
                <p>
                  Expert mentors are invaluable assets in any field, providing seasoned
                  guidance knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- about -->
  <!-- benefits -->
  <section class="benefit-section">
    <div class="container">
      <div class="section-header text-center">
        <span
          class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
          >Our Benefits</span
        >
        <h2>Master the Skills to Drive your Career</h2>
        <p>
          The right course, guided by an expert mentor, can provide invaluable insights,
          practical skills.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="@/assets/img/shapes/bg-1.png" alt="img" />
              </div>
              <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">
                <i class="isax isax-book-1 fs-24"></i>
              </div>
              <h5 class="mt-3 mb-1">Flexible Learning</h5>
              <p>
                We believe that high-quality education should be accessible to everyone.
                Our pricing form in models are designed.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="@/assets/img/shapes/bg-2.png" alt="img" />
              </div>
              <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">
                <i class="isax isax-bookmark5 fs-24"></i>
              </div>
              <h5 class="mt-3 mb-1">Lifetime Access</h5>
              <p>
                When you enroll in our courses, you’re not just signing up for a temporary
                learning to experience you’re making.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                <img src="@/assets/img/shapes/bg-3.png" alt="img" />
              </div>
              <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">
                <i class="isax isax-chart-26 fs-24"></i>
              </div>
              <h5 class="mt-3 mb-1">Expert Instruction</h5>
              <p>
                Our instructors are seasoned professionals with years of experience in
                their respective fields & Experts advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- benefits -->

  <!-- institutions -->
  <section class="client-section">
    <div class="container">
      <h6 class="fw-medium text-center mb-4">
        Trusted by
        <span class="text-decoration-underline text-secondary">20+</span> Institutions
        Around the World
      </h6>
      <div class="institutions-slider lazy slider">
        <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="3000">
          <Slide v-for="record in about_us" :key="record.id">
            <div class="institutions-items p-1">
              <img
                class="img-fluid"
                :src="require(`@/assets/img/client/${record.Image}`)"
                alt="img"
              />
            </div>
          </Slide>
          <template #addons>
            <!-- <Pagination /> -->
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- institutions -->

  <!-- counter -->
  <section class="counter-sec">
    <div class="container">
      <div class="row gy-3">
        <div class="col-xl-3 col-md-6">
          <div class="card border-0 mb-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="counter-icon">
                  <img src="@/assets/img/icons/counter-icon1.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h4 class="text-info">
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
                  </h4>
                  <p>Online Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card border-0 mb-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="counter-icon">
                  <img src="@/assets/img/icons/counter-icon2.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h4 class="text-warning">
                    <span class="count-digit"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="200"
                        :duration="5"
                        :autoinit="true" /></span
                    >+
                  </h4>
                  <p>Expert Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card border-0 mb-0">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="counter-icon">
                  <img src="@/assets/img/icons/counter-icon3.svg" alt="img" />
                </div>
                <div class="count-content">
                  <h4 class="text-skyblue">
                    <span class="count-digit"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="0"
                        :delay="3"
                        :endAmount="6"
                        :duration="5"
                        :autoinit="true" /></span
                    >K+
                  </h4>
                  <p>Certified Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card border-0 mb-0">
            <div class="card-body d-flex align-items-center">
              <div class="counter-icon">
                <img src="@/assets/img/icons/counter-icon4.svg" alt="img" />
              </div>
              <div class="count-content">
                <h4 class="text-lightgreen">
                  <span class="count-digit"
                    ><vue3-autocounter
                      class="counter"
                      ref="counter"
                      :startAmount="0"
                      :delay="3"
                      :endAmount="60"
                      :duration="5"
                      :autoinit="true" /></span
                  >K+
                </h4>
                <p>Online Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- counter -->
  <!-- testimonials -->
  <home-testimonials></home-testimonials>
  <!-- testimonials -->

  <!-- faq -->
  <section class="faq-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 pe-md-5">
          <div class="position-relative">
            <img
              class="img-fluid rounded-4"
              src="@/assets/img/about/about-1.jpg"
              alt="img"
            />
            <div
              class="bg-warning text-center p-3 rounded-5 position-absolute top-0 end-0 z-index-1 d-none d-sm-block my-3 mx-3"
            >
              <i class="isax isax-message-question5 heading-color fs-46"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="section-header">
            <span
              class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block"
              >FAQs</span
            >
            <h2>Frequently Asked Questions</h2>
            <p>
              Explore detailed answers to the most common questions about our platform.
            </p>
          </div>
          <div class="faq-content">
            <div
              class="accordion accordion-customicon1 accordions-items-seperate"
              id="accordioncustomicon1Example"
            >
              <div class="accordion-item" data-aos="fade-up">
                <h2 class="accordion-header" id="headingcustomicon1One">
                  <a
                    href="#"
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsecustomicon1One"
                    aria-expanded="true"
                    aria-controls="collapsecustomicon1One"
                  >
                    What’s DreamLMS want to give you?
                    <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                  </a>
                </h2>
                <div
                  id="collapsecustomicon1One"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingcustomicon1One"
                  data-bs-parent="#accordioncustomicon1Example"
                >
                  <div class="accordion-body pt-0">
                    <p>
                      DreamLMS aims to provide you with a comprehensive and intuitive
                      learning platform that enhances your educational experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                <h2 class="accordion-header" id="headingcustomicon1Two">
                  <a
                    href="#"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsecustomicon1Two"
                    aria-expanded="false"
                    aria-controls="collapsecustomicon1One"
                  >
                    Why choose us for your education?
                    <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                  </a>
                </h2>
                <div
                  id="collapsecustomicon1Two"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingcustomicon1Two"
                  data-bs-parent="#accordioncustomicon1Example"
                >
                  <div class="accordion-body pt-0">
                    <p>
                      DreamLMS aims to provide you with a comprehensive and intuitive
                      learning platform that enhances your educational experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                <h2 class="accordion-header" id="headingcustomicon1Three">
                  <a
                    href="#"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsecustomicon1Three"
                    aria-expanded="false"
                    aria-controls="collapsecustomicon1One"
                  >
                    How We Provide Service For you?
                    <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                  </a>
                </h2>
                <div
                  id="collapsecustomicon1Three"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingcustomicon1Three"
                  data-bs-parent="#accordioncustomicon1Example"
                >
                  <div class="accordion-body pt-0">
                    <p>
                      DreamLMS aims to provide you with a comprehensive and intuitive
                      learning platform that enhances your educational experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                <h2 class="accordion-header" id="headingcustomicon1Four">
                  <a
                    href="#"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsecustomicon1Four"
                    aria-expanded="false"
                    aria-controls="collapsecustomicon1One"
                  >
                    Do you have a monthly plan?
                    <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                  </a>
                </h2>
                <div
                  id="collapsecustomicon1Four"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingcustomicon1Four"
                  data-bs-parent="#accordioncustomicon1Example"
                >
                  <div class="accordion-body pt-0">
                    <p>
                      DreamLMS aims to provide you with a comprehensive and intuitive
                      learning platform that enhances your educational experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="250">
                <h2 class="accordion-header" id="headingcustomicon1Five">
                  <a
                    href="#"
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsecustomicon1Five"
                    aria-expanded="false"
                    aria-controls="collapsecustomicon1One"
                  >
                    Are you Affordable For Your Course
                    <i class="isax isax-add fs-20 fw-semibold ms-1"></i>
                  </a>
                </h2>
                <div
                  id="collapsecustomicon1Five"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingcustomicon1Five"
                  data-bs-parent="#accordioncustomicon1Example"
                >
                  <div class="accordion-body pt-0">
                    <p>
                      DreamLMS aims to provide you with a comprehensive and intuitive
                      learning platform that enhances your educational experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- faq -->

  <footer-two></footer-two>
</template>
<script>
import about_us from "@/assets/json/about-us.json";
import testimonials_about from "@/assets/json/testimonials-about.json";

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
      testimonials_about: testimonials_about,
      about_us: about_us,
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
          itemsToShow: 7,
          snapAlign: "start",
        },
      },
      settingsland: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpointsland: {
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
};
</script>
