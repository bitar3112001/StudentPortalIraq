<template>
  <div class="favorite-course">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-badge"> الدورة المفضلة </span>
        <h2>أفضل الفئات</h2>
        <p>
          يمكن أن توفر الدورة المناسبة، التي يرشدك فيها معلم خبير، رؤى لا تقدر بثمن ومهارات عملية
        </p>
      </div>
      <div class="owl-carousel owl-theme nav-bottom px-1 category-carousel">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in Favourite_section" :key="item.id">
            <div class="item">
              <div class="categories-item">
                <span class="categories-img">
                  <i :class="item.Icon"></i>
                </span>
                <h5 class="fw-semi-bold mb-1">
                  <router-link to="/category/course-category">{{
                    item.Name
                  }}</router-link>
                </h5>
                <p class="mb-0">{{ item.Courses }}</p>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <img src="@/assets/img/bg/category-bg-1.png" alt="img" class="bg-01" />
  </div>
</template>
<script>
import Favourite_section from "@/assets/json/favourite-section.json";

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
      Favourite_section: Favourite_section,
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
