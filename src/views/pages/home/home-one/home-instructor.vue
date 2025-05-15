<template>
     <!-- featured instructor -->
     <div class="featured-instructor-sec">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <span class="fw-medium text-light text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>
                <h2 class="text-white">Top Class & Professional Instructors </h2>
                <p class="text-light">Empowering Change: Stories from Those Who Took the Leap</p>
            </div>
            <div class="featured-instructor-slider lazy">
                <Carousel :settings="settings" :breakpoints="breakpoints">
                    <Slide v-for="item in HomeInstructor"  :key="item.id">
                        <div class="instructor-item instructor-item-three mb-0" data-aos="flip-left">
                            <div class="instructors-img ">
                                <router-link to="/pages-instructor/instructor-list" tabindex="0">
                                    <img class="img-fluid" alt="Img" :src="require(`@/assets/img/instructor/${item.Image}`)">
                                </router-link>
                                <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                                    <span class="verify">
                                        <img src="@/assets/img/icons/verify-icon.svg" alt="img" class="img-fluid">
                                    </span>
                                    <a href="javascript:void(0);" class="favourite ms-auto">
                                        <i class="isax isax-heart"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="instructor-content">
                                <div>
                                    <h3 class="title">
                                        <router-link to="/pages-instructor/instructor-details">{{item.Name}}</router-link>
                                    </h3>
                                    <span class="designation">{{item.Role}}</span>
                                </div>
                                <p class="rating">
                                    <i class="fas fa-star me-1"></i>{{item.Rating}}
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
    <!-- featured instructor -->

    <!-- testimonials -->
    <home-testimonials></home-testimonials>
    <!-- testimonials -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HomeInstructor from "@/assets/json/home-instructor.json";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data() {
        return {
            HomeInstructor: HomeInstructor,
        }
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
            itemsToShow: 4,
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
}
</script>