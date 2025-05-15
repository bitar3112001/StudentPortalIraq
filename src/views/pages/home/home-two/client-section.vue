<template>
  <div class="cliets-section">
    <div class="owl-carousel owl-theme brand-carousel">
      <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="3000">
        <Slide v-for="record in client_section" :key="record.id">
          <div class="item">
            <img :src="require(`@/assets/img/client/${record.Image}`)" alt="img" />
          </div>
        </Slide>
        <template #addons>
          <!-- <Pagination /> -->
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import client_section from "@/assets/json/client-section.json";

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
      client_section: client_section,
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
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
