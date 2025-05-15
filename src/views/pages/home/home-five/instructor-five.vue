<template>
  <!-- Become An Instructor -->
  <section class="home-five-become">
    <div class="container">
      <div class="row align-items-center row-gap-4">
        <div class="col-lg-8 col-md-8" data-aos="fade-up">
          <div class="become-content-three">
            <h2>Become An Instructor</h2>
            <p>
              Top instructors from around the world teach millions of students on
              DreamsLMS.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4" data-aos="fade-up">
          <div class="text-end">
            <router-link to="/register" class="btn btn-white"
              >Join Our Community</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Become An Instructor -->

  <!-- Leading Companies -->
  <section class="lead-companies-three">
    <div class="container">
      <div class="home-five-head section-header-title aos-init aos-animate">
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-lg-12" data-aos="fade-up">
            <h2>500+ Leading Universities And Companies</h2>
          </div>
        </div>
      </div>
      <div class="m-0 p-0 lead-group aos" data-aos="fade-up">
        <div class="lead-group-slider owl-carousel owl-theme">
          <Carousel
            :autoplay="2000"
            :loop="true"
            :wrap-around="true"
            :settings="settingsland"
            :breakpoints="breakpointsland"
          >
            <Slide v-for="item in landingcompany" :key="item.id">
              <div class="item">
                <div class="lead-img">
                  <img
                    class="img-fluid"
                    alt="Img"
                    :src="require(`@/assets/img/client/${item.img}`)"
                  />
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- /Leading Companies -->

  <!-- Testimonial -->
  <section class="testimonial-three">
    <div class="container">
      <div class="testimonial-pattern">
        <img
          class="pattern-left img-fluid"
          alt="Img"
          src="@/assets/img/bg/pattern-05.svg"
        />
      </div>
      <div class="testimonial-three-content">
        <div class="row align-items-center row-gap-4">
          <div class="col-xl-6 col-lg-12 col-md-12" data-aos="fade-down">
            <div class="become-content">
              <h2 class="aos-init aos-animate">They Trusted us</h2>
              <h4 class="aos-init aos-animate">
                We are a very happy because we have a happy customer
              </h4>
            </div>

            <!-- View all Testimonail -->
            <a href="#" class="btn btn-white aos-init aos-animate" data-aos="fade-up"
              >Join Our Community</a
            >
            <!-- View all Testimonail -->
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12" data-aos="fade-down">
            <div class="swiper-testimonial-three">
              <div class="swiper-wrapper">
                <!-- Swiper Slide -->
                <div class="swiper-slide">
                  <div class="testimonial-item-five">
                    <div class="testimonial-quote">
                      <img
                        class="quote img-fluid"
                        alt="Img"
                        src="@/assets/img/bg/quote.svg"
                      />
                    </div>
                    <div class="testimonial-content">
                      <p>
                        I’ve become more organized, confident, and focused thanks to my
                        life coach. They helped me set realistic goals and break them down
                        into actionable steps. I’ve accomplished so much already!
                      </p>
                    </div>
                    <div class="testimonial-ratings">
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <p class="d-inline-block">4.5<span>ratings</span></p>
                      </div>
                    </div>
                    <div class="testimonial-users">
                      <div class="imgbx">
                        <img
                          class="img-fluid"
                          alt="Img"
                          src="@/assets/img/user/user-01.jpg"
                        />
                      </div>
                      <div class="d-block">
                        <h6>Jeff J. Sparrow</h6>
                        <p>Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Swiper Slide -->

                <!-- Swiper Slide -->
                <div class="swiper-slide">
                  <div class="testimonial-item-five">
                    <div class="testimonial-quote">
                      <img
                        class="quote img-fluid"
                        alt="Img"
                        src="@/assets/img/bg/quote.svg"
                      />
                    </div>
                    <div class="testimonial-content">
                      <p>
                        As a writer, I’ve learned so much about structure and storytelling
                        from my mentor. Their feedback helped me tighten up my writing and
                        make my characters more compelling.
                      </p>
                    </div>
                    <div class="testimonial-ratings">
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <p class="d-inline-block">4.5<span>ratings</span></p>
                      </div>
                    </div>
                    <div class="testimonial-users">
                      <div class="imgbx">
                        <img class="" alt="Img" src="@/assets/img/user/user-02.jpg" />
                      </div>
                      <div class="d-block">
                        <h6>Martin Harn</h6>
                        <p>Docker Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Swiper Slide -->

                <!-- Swiper Slide -->
                <div class="swiper-slide">
                  <div class="testimonial-item-five">
                    <div class="testimonial-quote">
                      <img
                        class="quote img-fluid"
                        alt="Img"
                        src="@/assets/img/bg/quote.svg"
                      />
                    </div>
                    <div class="testimonial-content">
                      <p>
                        I often felt like the mentor’s answers were too detailed, which
                        made it hard for me to keep up. Sometimes, a simpler explanation
                        would have helped me understand things faster.
                      </p>
                    </div>
                    <div class="testimonial-ratings">
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <p class="d-inline-block">4.8<span>ratings</span></p>
                      </div>
                    </div>
                    <div class="testimonial-users">
                      <div class="imgbx">
                        <img class="" alt="Img" src="@/assets/img/user/user-03.jpg" />
                      </div>
                      <div class="d-block">
                        <h6>Noah Aarons</h6>
                        <p>Business Man</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /Swiper Slide -->
              </div>
              <div class="testimonial-bottom-nav">
                <div class="slide-next-btn testimonial-next-pre">
                  <i class="fas fa-arrow-left"></i>
                </div>
                <div class="slide-prev-btn testimonial-next-pre">
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/Testimonial -->

  <!-- Latest Blog -->
  <section class="latest-blog-three">
    <div class="container">
      <div class="home-five-head section-header-title pb-0" data-aos="fade-up">
        <div class="row align-items-center d-flex justify-content-between row-gap-4">
          <div class="col-lg-6 col-md-8">
            <h2>Latest News & Events</h2>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="see-all text-end">
              <router-link to="/blog-layouts/blog-grid"
                >View All<i class="fas fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="latest-blog-main">
        <div class="row">
          <div class="col-lg-4 d-flex">
            <div class="event-blog-three blog-three-one flex-fill">
              <div class="blog-img-three">
                <router-link to="/blog-layouts/blog-grid">
                  <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-34.jpg" />
                </router-link>
              </div>
              <div class="latest-blog-content">
                <div class="event-three-title">
                  <div class="event-span-three d-flex align-items-center">
                    <span class="span-name-three badge-green">Lifestyle</span>
                    <div class="blog-student-count">
                      <i class="fa-solid fa-calendar"></i>
                      <span>09 Aug 2025</span>
                    </div>
                  </div>
                  <router-link to="/blog-layouts/blog-grid">
                    <h5>Why an LMS is Essential for Modern Education</h5>
                  </router-link>
                </div>
              </div>
              <div class="blog-user-top">
                <a href="#"
                  ><img src="@/assets/img/user/user-01.jpg" alt="" />David Benitez</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-md-6">
                <div class="event-blog-three blog-three-one">
                  <div class="blog-img-three">
                    <router-link to="/blog-layouts/blog-grid">
                      <img
                        class="img-fluid"
                        alt="Img"
                        src="@/assets/img/blog/blog-36.jpg"
                      />
                    </router-link>
                  </div>
                  <div class="latest-blog-content">
                    <div class="event-three-title">
                      <div class="event-span-three d-flex align-items-center">
                        <span class="span-name-three badge-green">Productivity</span>
                        <div class="blog-student-count">
                          <i class="fa-solid fa-calendar"></i>
                          <span>09 Aug 2025</span>
                        </div>
                      </div>
                      <router-link to="/blog-layouts/blog-grid">
                        <h5>The Impact of LMS on Academic Journey Education</h5>
                      </router-link>
                    </div>
                  </div>
                  <div class="blog-user-top">
                    <a href="#"
                      ><img src="@/assets/img/user/user-01.jpg" alt="" />David Benitez</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="event-blog-three blog-three-one">
                  <div class="blog-img-three">
                    <router-link to="/blog-layouts/blog-grid">
                      <img
                        class="img-fluid"
                        alt="Img"
                        src="@/assets/img/blog/blog-37.jpg"
                      />
                    </router-link>
                  </div>
                  <div class="latest-blog-content">
                    <div class="event-three-title">
                      <div class="event-span-three d-flex align-items-center">
                        <span class="span-name-three badge-green">Productivity</span>
                        <div class="blog-student-count">
                          <i class="fa-solid fa-calendar"></i>
                          <span>09 Aug 2025</span>
                        </div>
                      </div>
                      <router-link to="/blog-layouts/blog-grid">
                        <h5>Maximizing Academic Success with the Right LMS</h5>
                      </router-link>
                    </div>
                  </div>
                  <div class="blog-user-top">
                    <a href="#"
                      ><img src="@/assets/img/user/user-01.jpg" alt="" />David Benitez</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="event-blog-three blog-three-one">
                  <div class="blog-img-three">
                    <router-link to="/blog-layouts/blog-grid">
                      <img
                        class="img-fluid"
                        alt="Img"
                        src="@/assets/img/blog/blog-38.jpg"
                      />
                    </router-link>
                  </div>
                  <div class="latest-blog-content">
                    <div class="event-three-title">
                      <div class="event-span-three d-flex align-items-center">
                        <span class="span-name-three badge-green">UI /UX</span>
                        <div class="blog-student-count">
                          <i class="fa-solid fa-calendar"></i>
                          <span>09 Aug 2025</span>
                        </div>
                      </div>
                      <router-link to="/blog-layouts/blog-grid">
                        <h5>Promoting Health & Well being in Schools</h5>
                      </router-link>
                    </div>
                  </div>
                  <div class="blog-user-top">
                    <a href="#"
                      ><img src="@/assets/img/user/user-01.jpg" alt="" />David Benitez</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="event-blog-three blog-three-one">
                  <div class="blog-img-three">
                    <router-link to="/blog-layouts/blog-grid">
                      <img
                        class="img-fluid"
                        alt="Img"
                        src="@/assets/img/blog/blog-39.jpg"
                      />
                    </router-link>
                  </div>
                  <div class="latest-blog-content">
                    <div class="event-three-title">
                      <div class="event-span-three d-flex align-items-center">
                        <span class="span-name-three badge-green">Development</span>
                        <div class="blog-student-count">
                          <i class="fa-solid fa-calendar"></i>
                          <span>09 Aug 2025</span>
                        </div>
                      </div>
                      <router-link to="/blog-layouts/blog-grid">
                        <h5>How to Build and Run a Pilot Mentoring Program</h5>
                      </router-link>
                    </div>
                  </div>
                  <div class="blog-user-top">
                    <a href="#"
                      ><img src="@/assets/img/user/user-01.jpg" alt="" />David Benitez</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Latest Blog -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import landingcompany from "@/assets/json/landingcompany.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      landingcompany: landingcompany,
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
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
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
          itemsToShow: 4.2,
          snapAlign: "start",
        },
      },
    };
  },

  mounted() {
    const swiper = new Swiper(".swiper-testimonial-three", {
      effect: "coverflow",
      loop: false,
      grabCursor: true,
      center: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      navigation: {
        prevEl: ".slide-next-btn",
        nextEl: ".slide-prev-btn",
        speed: 400,
        spaceBetween: 100,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 10,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
