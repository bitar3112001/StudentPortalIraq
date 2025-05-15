<template>
  <!-- Testimonials -->
  <section class="testimonial-section-five">
    <img
      src="@/assets/img/shapes/quote.png"
      class="d-none d-lg-flex testimonials-quote"
      alt="Img"
    />
    <div class="container">
      <div class="header-five-title text-center" data-aos="fade-down">
        <h2 class="text-light">Testimonials</h2>
        <p class="text-white">We are a very happy because we have a happy customer</p>
      </div>
      <div class="testimonial-slider-five">
        <div class="testimonial-five lazy slider">
          <Carousel
            :loop="true"
            :wrap-around="true"
            :settings="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="item in testimonial_six" :key="item.id">
              <div class="testimonial-carousel">
                <div class="testimonial-item-six">
                  <div class="testimonial-content-five text-start">
                    <div class="testimonial-text">
                      <h5 :class="item.Class">
                        {{ item.Content }}
                      </h5>
                      <p class="mb-3">
                        {{ item.ContentOne }}
                      </p>
                    </div>
                    <div
                      class="testimonial-users-group d-flex align-items-center justify-content-between"
                    >
                      <div class="testimonial-users">
                        <h5 class="mb-1">{{ item.Name }}</h5>
                        <p>{{ item.Position }}</p>
                      </div>
                      <div
                        class="testimonial-ratings-five d-inline-flex align-items-center"
                      >
                        <div class="rating">
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                          <i class="fas fa-star filled"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="testimonial-image">
                    <img :src="require(`@/assets/img/testimonial/${item.Image}`)" alt="Img" />
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons> </template>
          </Carousel>
        </div>
      </div>
    </div>
  </section>
  <!-- /Testimonials -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import testimonial_six from "@/assets/json/testimonial-six.json";
export default {
  data() {
    return {
      testimonial_six: testimonial_six,
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
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
