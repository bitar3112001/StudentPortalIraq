<template>
    <div class="testimonials-section testimonials-sec-one text-center">
        <div class="container">
            <div class="section-header text-center" data-aos="fade-up">
                <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Featured Instructors</span>
                <h2>Top Class & Professional Instructors</h2>
                <p>Words from Those Who’ve Experienced Real Growth</p>
            </div>
            <div class="testimonials-slider lazy mt-4">
                <Carousel :settings="settings" :breakpoints="breakpoints">
                    <Slide v-for="item in HomeTestimonials"  :key="item.id">
                        <div class="home-testimonials">
                            <div class="testimonials-item rounded-3 bg-white" data-aos="flip-right">
                                <div class="position-relative d-inline-flex">
                                    <div class="avatar rounded-circle avatar-xxl border border-white border-3">
                                        <router-link to="/instructor-students/student-details">
                                            <img class="img-fluid rounded-circle" :src="require(`@/assets/img/user/${item.Image}`)" alt="img">
                                        </router-link>
                                    </div>
                                    <i class="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1"></i>
                                </div>
                                <h6 class="mb-1"><router-link to="/instructor-students/student-details">{{item.Name}}</router-link></h6>
                                <p class="designation">{{item.Role}}</p>
                                <p class="mb-3 text-truncate line-clamb-2">{{item.Content}}</p>
                                <div>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HomeTestimonials from "@/assets/json/home-testimonials.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            HomeTestimonials: HomeTestimonials,
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
                itemsToShow: 2,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
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