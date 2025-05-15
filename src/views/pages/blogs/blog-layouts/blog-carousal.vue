<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Blog Carousal</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Blog Carousal</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- blog -->
  <div class="content">
    <div class="container">
      <div class="blog-slider lazy">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="item in blog_carousal" :key="item.id">
            <div class="blog text-start">
              <div class="blog-image">
                <router-link to="/blogs/blog-details">
                  <img
                    class="img-fluid"
                    :src="require(`@/assets/img/blog/${item.Image}`)"
                    alt="img"
                  />
                </router-link>
              </div>
              <div class="blog-item">
                <span class="badge bg-success mb-2">{{ item.Badge }}</span>
                <h5 class="mb-2">
                  <router-link to="/blogs/blog-details">{{ item.Title }}</router-link>
                </h5>
                <p class="text-truncate line-clamb-2">
                  {{ item.Content }}
                </p>
                <div class="blog-info">
                  <div
                    class="d-flex align-items-center flex-wrap justify-content-between"
                  >
                    <div class="d-flex align-items-center user-profile">
                      <router-link to="/pages-instructor/instructor-details" class="user-img"
                        ><img
                          class="rounded-pill w-auto"
                          :src="require(`@/assets/img/user/${item.UserImage}`)"
                          alt="img"
                      /></router-link>
                      <router-link to="/pages-instructor/instructor-details" class="user-name">{{
                        item.Name
                      }}</router-link>
                    </div>
                    <ul class="d-flex align-items-center flex-wrap gap-2">
                      <li>
                        <img
                          class="me-1"
                          src="@/assets/img/icons/calendar.svg"
                          alt="img"
                        />
                        <p>{{ item.Date }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <!-- blog -->
  <footer-two></footer-two>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import blog_carousal from "@/assets/json/blog-carousal.json";
export default {
  data() {
    return {
      blog_carousal: blog_carousal,
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
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
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
