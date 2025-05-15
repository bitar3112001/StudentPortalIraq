<template>
  <!-- Home Banner -->
  <section class="banner-five">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-7 col-md-12 d-flex col-12" data-aos="fade-down">
          <div class="home-five-slide-face flex-fill">
            <div class="home-five-slide-text">
              <span
                class="text-white d-inline-block bg-secondary small rounded-pill px-3 py-2 mb-3 mb-sm-4"
                ><span class="badge bg-white text-secondary rounded-pill me-1">New</span
                >The Leader in Online Learning</span
              >
              <h1>Engaging <span>&</span> Accessible Online Courses For All</h1>
              <p>
                Our specialized online courses are designed to bring the classroom
                experience to you, no matter where you are.
              </p>
            </div>
            <div class="banner-three-content">
              <form class="form" @submit.prevent="submitForm">
                <div class="form-inner-three">
                  <div class="input-group">
                    <div class="drop-detail-three">
                      <vue-select :options="Category" placeholder="Select Category" />
                    </div>
                    <div class="search-icon5">
                      <i class="fa-regular fa-building"></i>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Search for Courses, Instructors"
                    />

                    <button class="btn btn-primary sub-btn" type="submit">
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="offset-lg-1 col-lg-5 col-12 text-center" data-aos="fade-up">
          <div class="banner-slide-img flex-fill aos">
            <img class="img-fluid ps-lg-5" src="@/assets/img/hero/hero-6.png" alt="Img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->

  <!--Online Courses -->
  <section class="section student-course student-course-five">
    <div class="container">
      <div class="course-widget-three">
        <div class="row row-gap-4">
          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
            <div class="course-details-three">
              <div class="align-items-center">
                <div class="course-count-three course-count ms-0">
                  <div class="course-img">
                    <img
                      class="img-fluid"
                      src="@/assets/img/icon/course-01.svg"
                      alt="Img"
                    />
                  </div>
                  <div class="course-content-three">
                    <h4 class="text-info">
                      <span class="counterUp"
                        ><vue3-autocounter
                          class="counter"
                          ref="counter"
                          :startAmount="1"
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
          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
            <div class="course-details-three">
              <div class="align-items-center">
                <div class="course-count-three course-count ms-0">
                  <div class="course-img">
                    <img
                      class="img-fluid"
                      src="@/assets/img/icon/course-02.svg"
                      alt="Img"
                    />
                  </div>
                  <div class="course-content-three">
                    <h4 class="text-warning">
                      <span class="counterUp"
                        ><vue3-autocounter
                          class="counter"
                          ref="counter"
                          :startAmount="10"
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
          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
            <div class="course-details-three">
              <div class="align-items-center">
                <div class="course-count-three course-count ms-0">
                  <div class="course-img">
                    <img
                      class="img-fluid"
                      src="@/assets/img/icon/course-03.svg"
                      alt="Img"
                    />
                  </div>
                  <div class="course-content-three">
                    <h4 class="text-skyblue">
                      <span class="counterUp"
                        ><vue3-autocounter
                          class="counter"
                          ref="counter"
                          :startAmount="1"
                          :delay="3"
                          :endAmount="6"
                          :duration="5"
                          :autoinit="true" /></span
                      >K+
                    </h4>
                    <p>Ceritified Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
            <div class="course-details-three mb-0">
              <div class="align-items-center">
                <div class="course-count-three">
                  <div class="course-img">
                    <img
                      class="img-fluid"
                      src="@/assets/img/icon/course-04.svg"
                      alt="Img"
                    />
                  </div>
                  <div class="course-content-three course-count">
                    <h4 class="text-success">
                      <span class="counterUp"
                        ><vue3-autocounter
                          class="counter"
                          ref="counter"
                          :startAmount="1"
                          :delay="3"
                          :endAmount="60"
                          :duration="5"
                          :autoinit="true" /></span
                      >K +
                    </h4>
                    <p>Online Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Online Courses -->

  <!-- Master skills Career -->
  <section class="master-skill-three">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6 col-md-12" data-aos="fade-up">
          <div class="master-three-images">
            <div class="master-img">
              <img
                class="img-fluid master-bg1"
                src="@/assets/img/shapes/shape-10.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg2"
                src="@/assets/img/shapes/shape-7.svg"
                alt="img"
              />
              <img
                class="img-fluid master-skill-image1"
                src="@/assets/img/feature/feature-10.jpg"
                alt="img"
              />
              <div class="text-end">
                <img
                  class="img-fluid master-skill-image2"
                  src="@/assets/img/feature/feature-11.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-12" data-aos="fade-up">
          <div class="master-skill-content">
            <div class="home-five-head" data-aos="fade-up">
              <h2>Master the skills to drive your career</h2>
            </div>
            <div class="home-five-content" data-aos="fade-up">
              <p>
                Get certified, master modern tech skills, and level up your career whether
                you’re starting out or a seasoned pro. 95% of eLearning learners report
                our hands-on content directly helped their careers.
              </p>
            </div>
            <div class="skils-group">
              <div class="row row-gap-4">
                <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-down">
                  <div class="skils-icon-item">
                    <div class="skils-icon">
                      <img
                        class="img-fluid"
                        src="@/assets/img/icon/career-01.svg"
                        alt="certified"
                      />
                    </div>
                    <div class="skils-content">
                      <h5 class="mb-2">Certified Courses</h5>
                      <p class="mb-0">Get certified with 100+ certification courses</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">
                  <div class="skils-icon-item">
                    <div class="skils-icon">
                      <img
                        class="img-fluid"
                        src="@/assets/img/icon/career-02.svg"
                        alt="Build skills"
                      />
                    </div>
                    <div class="skils-content">
                      <h5 class="mb-2">Skill Building</h5>
                      <p class="mb-0">Build skills your way, from labs to courses</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">
                  <div class="skils-icon-item">
                    <div class="skils-icon">
                      <img
                        class="img-fluid"
                        src="@/assets/img/icon/career-03.svg"
                        alt="Stay Motivated"
                      />
                    </div>
                    <div class="skils-content">
                      <h5 class="mb-2">Stay Inspired</h5>
                      <p class="mb-0">Stay motivated with engaging instructors</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xs-12 col-sm-6" data-aos="fade-up">
                  <div class="skils-icon-item">
                    <div class="skils-icon">
                      <img
                        class="img-fluid"
                        src="@/assets/img/icon/career-04.svg"
                        alt="latest cloud"
                      />
                    </div>
                    <div class="skils-content">
                      <h5 class="mb-2">Keep Upgrade</h5>
                      <p class="mb-0">Keep up with the latest in cloud</p>
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
  <!-- /Master skills Career -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
      Category: ["Select category", "Angular", "Node Js", "React", "Python"],
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
