<template>
  <!-- Favourite Course -->
  <section class="home-five-favourite">
    <div class="container">
      <div class="category-sec">
        <div class="row">
          <div class="container">
            <div class="home-five-head section-header-title" data-aos="fade-up">
              <div
                class="row align-items-center d-flex justify-content-between row-gap-4"
              >
                <div class="col-md-8 col-sm-12">
                  <h2>Choose favourite Course from top Category</h2>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="see-all text-end">
                    <a href="course-details.html"
                      >View All<i class="fas fa-arrow-right ms-2"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="favourite-carousel">
              <Carousel
                class="home-three-favourite-carousel"
                :settings="settings"
                :breakpoints="breakpoints"
              >
                <Slide
                  v-for="course in coursethree"
                  :key="course.name"
                  class="favourite-box"
                >
                  <div class="carousel__item favourite-item flex-fill text-start">
                    <div class="categories-icon">
                      <img
                        class="img-fluid"
                        :src="require(`@/assets/img/icon/${course.Image}`)"
                      />
                    </div>
                    <div class="categories-content course-info">
                      <h3>{{ course.Name }}</h3>
                    </div>
                    <div class="course-instructors">
                      <div class="instructors-info">
                        <p class="me-4">Instructors</p>
                        <ul class="instructors-list">
                          <li>
                            <a
                              href="javascript:;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="leader 1"
                              ><img src="@/assets/img/profiles/avatar-01.jpg" alt="img"
                            /></a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="leader 2"
                              ><img src="@/assets/img/profiles/avatar-02.jpg" alt="img"
                            /></a>
                          </li>
                          <li>
                            <a
                              href="javascript:;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="leader 3"
                              ><img src="@/assets/img/profiles/avatar-03.jpg" alt="img"
                            /></a>
                          </li>
                          <li class="more-set">
                            <a href="javascript:;">80+</a>
                          </li>
                        </ul>
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
      </div>
    </div>
  </section>
  <!-- Feature Course -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import coursethree from "@/assets/json/coursethree.json";
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
      coursethree: coursethree,
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
          itemsToShow: 5,
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
