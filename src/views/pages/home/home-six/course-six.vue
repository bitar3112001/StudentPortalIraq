<template>
  <!-- Course Categories Five -->
  <section class="course-section-five">
    <div class="container">
      <div class="header-five-title text-center">
        <h2>Course Categories</h2>
        <p>
          Explore our top categories to find the perfect courses for your learning journey
        </p>
      </div>
      <div class="home-five-course">
        <Carousel
          :loop="true"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in course_six" :key="item.id">
            <!-- Carousel Item -->
            <div class="categories-item categories-item-six">
              <div class="categories-icon">
                <div class="icon-bg">
                  <router-link to="/category/course-category">
                    <img :src="require(`@/assets/img/icon/${item.Image}`)" alt="Img" />
                  </router-link>
                </div>
              </div>
              <h3 class="title">
                <router-link to="/category/course-category">{{ item.Name }}</router-link>
              </h3>
              <p>{{ item.Instructors }}</p>
              <router-link to="/category/course-category" class="view-icon"
                ><i class="fas fa-chevron-right"></i
              ></router-link>
            </div>
            <!-- /Carousel Item  -->
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- /Course Categories Five-->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import course_six from "@/assets/json/course-six.json";
export default {
  data() {
    return {
      course_six: course_six,
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
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
