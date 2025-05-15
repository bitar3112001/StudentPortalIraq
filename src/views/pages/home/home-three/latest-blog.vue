<template>
  <!-- Latest Blog -->
  <div class="section latest-blog">
    <div class="home-three-sec-bg">
      <img src="@/assets/img/bg/bg-3.png" alt="img" class="img-fluid sec-bg-01">
      <img src="@/assets/img/bg/bg-4.png" alt="img" class="img-fluid sec-bg-02">
    </div>
    <div class="container">
      <div class="section-header text-center aos" data-aos="fade-up">
        <h2>Latest Blogs</h2>
        <p class="mb-0">Dont Miss Stay Updated with the Latest Articles and Insights</p>
      </div>
      <div class="row row-gap-4 justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="blog-wrap shadow-sm mb-0">
            <div class="blog-img">
              <router-link to="/blog-layouts/blog-grid">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-40.jpg">
              </router-link>
            </div>
            <div class="blog-content"> 
              <div class="blog-info mb-3">
                <a href="javascript:void(0);" class="blog-category">Marketing</a>
                <p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
              </div>
              <h5><router-link to="/blog-layouts/blog-grid">How to Find the Perfect Mentor for Your Academic Journey</router-link></h5>
            </div>	
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="blog-wrap shadow-sm mb-0">
            <div class="blog-img">
              <router-link to="/blog-layouts/blog-grid">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-41.jpg">
              </router-link>
            </div>
            <div class="blog-content"> 
              <div class="blog-info mb-3">
                <a href="javascript:void(0);" class="blog-category">Statistics</a>
                <p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
              </div>
              <h5><router-link to="/blog-layouts/blog-grid">Unlocking Your Potential in School and Beyond</router-link></h5>
            </div>	
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="blog-wrap shadow-sm mb-0">
            <div class="blog-img">
              <router-link to="/blog-layouts/blog-grid">
                <img class="img-fluid" alt="Img" src="@/assets/img/blog/blog-42.jpg">
              </router-link>
            </div>
            <div class="blog-content"> 
              <div class="blog-info mb-3">
                <a href="javascript:void(0);" class="blog-category">Learning</a>
                <p class="blog-date"><i class="isax isax-calendar-1"></i>May 15, 2020</p>
              </div>
              <h5><router-link to="/blog-layouts/blog-grid">11 Tips to Help You Get New Clients with the design knowledge</router-link></h5>
            </div>	
          </div>
        </div>
      </div>
      <div class="enroll-group aos" data-aos="fade-up">
        <div class="row row-gap-3 justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="enroll-course d-flex align-items-center">
              <div class="enroll-img">
                <img src="@/assets/img/icons/icon-5.svg" alt="Img" class="img-fluid">
              </div>
              <div class="course-count">
                <h3><span class="counterUp">
                  <vue3-autocounter 
                    ref='counter' 
                    :startAmount='200' 
                    :endAmount='3490' 
                    :duration='3' 
                    separator=''  
                    :autoinit='true' 
                  />
                </span></h3>
                <p>Students Enrolled</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="enroll-course d-flex align-items-center">
              <div class="enroll-img ">
                <img src="@/assets/img/icons/icon-6.svg" alt="Img" class="img-fluid">
              </div>
              <div class="course-count">
                <h3><span class="counterUp">
                  <vue3-autocounter 
                    ref='counter' 
                    :startAmount='20' 
                    :endAmount='255' 
                    :duration='3' 
                    separator=''  
                    :autoinit='true' 
                  />
                </span></h3>
                <p>Total Courses</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="enroll-course d-flex align-items-center">
              <div class="enroll-img ">
                <img src="@/assets/img/icons/icon-7.svg" alt="Img" class="img-fluid">
              </div>
              <div class="course-count">
                <h3><span class="counterUp" >
                  <vue3-autocounter 
                    ref='counter' 
                    :startAmount='1' 
                    :endAmount='15' 
                    :duration='3' 
                    separator=''  
                    :autoinit='true' 
                  />
                </span></h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lab-course">
        <div class="client-slider">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide
              v-for="item in latest"
              :key="item.id"
            >
              <div>
                <img :src="require(`@/assets/img/icons/${item.img}`)" alt="Img" class="img-fluid">
              </div>
            </Slide>
            <template #addons>
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
  <!-- /Latest Blog -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import latest from "@/assets/json/latest.json";
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
      latest: latest,
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
        575: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 4,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 5,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 7,
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
