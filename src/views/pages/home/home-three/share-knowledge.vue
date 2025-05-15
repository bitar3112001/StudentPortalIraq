<template>
  <!-- Share Knowledge -->
  <div class="section share-knowledge">
    <div class="home-three-sec-bg">
      <img src="@/assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01" />
      <img src="@/assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02" />
    </div>
    <div class="container">
      <div class="row align-items-center row-gap-4">
        <div class="col-md-6">
          <div class="knowledge-img aos" data-aos="fade-up">
            <img src="@/assets/img/feature/feature-17.svg" alt="Img" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <div class="join-mentor aos" data-aos="fade-up">
            <h2>Want to share your knowledge? Join us a Mentor</h2>
            <p>
              High-definition video is video of higher resolution and quality than
              standard-definition. While there is no standardized meaning for
              high-definition, generally any video.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex mb-3">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Access Your
                Class anywhere
              </li>
              <li class="d-flex mb-3">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Flexible
                Course Plan
              </li>
              <li class="d-flex mb-3">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Quality
                Assurance
              </li>
              <li class="d-flex mb-3">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Cost
                Effectiveness
              </li>
              <li class="d-flex mb-3">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>The Most
                World Class Instructors
              </li>
            </ul>
            <div>
              <router-link
                to="/pages-instructor/instructor-list"
                class="btn btn-secondary btn-xl"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Share Knowledge -->

  <!-- Say testimonial Four -->
  <section class="testimonial-four">
    <div class="review">
      <div class="container">
        <div class="section-header text-center aos" data-aos="fade-up">
          <span class="fw-medium text-white fs-18 fw-bold mb-2 d-inline-block"
            >Check out these real reviews</span
          >
          <h2 class="text-white mb-0">Users-love-us Don't take it from us.</h2>
        </div>
        <div class="mentor-testimonial lazy slider">
          <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="testimonial in testimonialsindex" :key="testimonial.id">
              <div class="d-flex justify-content-center">
                <div class="testimonial-all">
                  <div class="testimonial-quotes">
                    <img src="@/assets/img/icons/icon-28.png" alt="Img" />
                  </div>
                  <div class="testimonial-content text-center align-items-center d-flex">
                    <div class="testimonial-info">
                      <div class="testimonial-icon">
                        <img src="@/assets/img/icons/icon-29.png" alt="Img" />
                      </div>
                      <p>
                        I really appreciated my mentor’s insight, but sometimes I felt
                        overwhelmed by the amount of information they provided. It would
                        have been helpful to focus on one or two areas at a time rather
                        than trying to cover everything.
                      </p>
                      <div class="testimonial-user">
                        <div class="user-img">
                          <router-link to="/instructor/instructor-profile">
                            <img
                              :src="require(`@/assets/img/avatar/${testimonial.image}`)"
                              alt="Img"
                              class="img-fluid"
                            />
                          </router-link>
                        </div>
                        <h6>
                          <router-link to="/instructor/instructor-profile">{{
                            testimonial.name
                          }}</router-link>
                        </h6>
                        <span>{{ testimonial.role }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- /Say testimonial Four -->

  <!-- Become An Instructor -->
  <div class="section become-instructors aos" data-aos="fade-up">
    <img src="@/assets/img/bg/bg-5.png" alt="" class="img-fluid become-instructors-bg1" />
    <img src="@/assets/img/bg/bg-6.png" alt="" class="img-fluid become-instructors-bg2" />
    <div class="container">
      <div class="row row-gap-3">
        <div class="col-md-6 d-flex">
          <div class="student-mentor d-flex flex-fill">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12">
                <div class="top-instructors">
                  <h4>Become An Instructor</h4>
                  <p>
                    Top instructors from around the world teach millions of students on
                    Mentoring.
                  </p>
                  <router-link
                    to="/pages/become-an-instructor"
                    class="btn btn-secondary btn-xl"
                    >Register as Instructor</router-link
                  >
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="mentor-img">
                  <img
                    class="img-fluid d-none d-lg-flex"
                    alt="Img"
                    src="@/assets/img/feature/feature-15.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex">
          <div class="student-mentor bg-dark d-flex flex-fill">
            <div class="row align-items-center">
              <div class="col-lg-7 col-md-12">
                <div class="top-instructors">
                  <h4>Transform Access To Education</h4>
                  <p>Create an account to receive our newsletter course promotions.</p>
                  <router-link
                    to="/pages/become-an-instructor"
                    class="btn btn-secondary btn-xl"
                    >Register as Instructor</router-link
                  >
                </div>
              </div>
              <div class="col-lg-5 col-md-12">
                <div class="mentor-img d-none d-lg-flex">
                  <img
                    class="img-fluid"
                    alt="Img"
                    src="@/assets/img/feature/feature-14.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Become An Instructor -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import testimonialsindex from "@/assets/json/testimonialsindex.json";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      testimonialsindex: testimonialsindex,
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 1,
          snapAlign: "center",
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
