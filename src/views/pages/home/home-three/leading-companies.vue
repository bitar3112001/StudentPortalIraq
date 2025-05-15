<template>
  <!-- Leading Companies -->
  <section class="section lead-companies">
    <div class="container">
      <div class="section-header text-center aos" data-aos="fade-up">
        <span class="fw-medium text-secondary fs-18 fw-bold mb-2 d-inline-block">Trusted By</span>
        <h2 class="mb-0">500+ Leading Universities And Companies</h2>
      </div>
      <div class="lead-group aos" data-aos="fade-up">
        <Carousel
          :autoplay="2000"
          :loop="true"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints" 
          class="lead-group-slider owl-carousel owl-theme"
        >
          <Slide
            v-for="item in landingcompany"
            :key="item.id"
            class="lead-group-slider owl-carousel owl-theme"
          >
            <div class="item">
              <div class="lead-img">
                <img
                  class="img-fluid"
                  alt=""
                  :src="require(`@/assets/img/client/${item.img}`)"
                />
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- /Leading Companies -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import landingcompany from "@/assets/json/landingcompany.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      landingcompany: landingcompany,
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
          itemsToShow: 6,
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
