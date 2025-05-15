<template>
    <!-- client -->
    <div class="cliets-section-one">
        <div class="brand-slide">
            <Carousel
                :autoplay="2000"
                :loop="true"
                :wrap-around="true"
                :settings="settings"
                :breakpoints="breakpoints" 
            >
                <Slide v-for="item in HomeClient" :key="item.id">
                    <div>
                        <img :src="require(`@/assets/img/client/${item.Image}`)" alt="img">
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
    <!-- /client -->

    <!-- how it works -->
    <div class="how-it-works-sec-two">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="me-5" data-aos="fade-up">
                        <img src="@/assets/img/feature/feature-27.jpg" class="img-fluid rounded-5" alt="img">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="how-it-works-content aos" data-aos="fade-up">
                    <div class="section-header">
                        <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">How it Works</span>
                        <h2 class="mb-1">Start your Learning Journey Today!</h2>
                        <p>Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning Resources!</p>
                    </div>
                    <div class="d-flex align-items-center works-items">
                        <span class="count">01</span>
                        <div>
                            <h5 class="mb-1">Sign-Up or Register</h5>
                            <p>Once you're on the website's homepage, look for the Sign-Up, Register, or Create Account button.</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center works-items">
                        <span class="count">02</span>
                        <div>
                            <h5 class="mb-1">Complete Your Profile</h5>
                            <p>After verifying your email, you may be asked to complete additional profile information.</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center works-items">
                        <span class="count">03</span>
                        <div>
                            <h5 class="mb-1">Choose Courses or Programs</h5>
                            <p>Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in.</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center works-items mb-0 pb-0 border-0">
                        <span class="count">04</span>
                        <div>
                            <h5 class="mb-1">Access Your Account</h5>
                            <p>Should have access to the website’s features, such as enrolling in courses, materials, or tracking progress.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- how it works -->
</template>

<script>
import HomeClient from "@/assets/json/home-client.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            HomeClient: HomeClient,
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
}
</script>