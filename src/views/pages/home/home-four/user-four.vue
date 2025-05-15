<template>
  <div class="col-lg-6 col-md-12 col-md-12">
    <div class="owl-carousel real-reviews owl-theme">
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="record in lead_Companies" :key="record.id">
          <div class="item">
            <div class="real-reviews-grid">
              <div class="review-content">
                <h3>Helps us to improve our productivity</h3>
                <p>
                  {{ record.Content }}
                </p>
              </div>
              <div class="review-top">
                <div class="review-info">
                  <h5>{{ record.Name }}</h5>
                  <h6>{{ record.Position }}</h6>
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
    <div class="d-flex justify-content-between align-items-center">
      <div class="owl-nav slide-nav-8 nav-control"></div>
    </div>
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import lead_Companies from "@/assets/json/lead-companies.json";
export default {
  data() {
    return {
      lead_Companies: lead_Companies,
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
    Navigation,
  },
};
</script>
