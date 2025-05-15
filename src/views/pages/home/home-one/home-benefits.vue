<template>
    <!-- benefits -->
    <section class="benefit-section">
        <div class="container">
            <div class="section-header text-center">
                <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Benefits</span>
                <h2>Master the Skills to Drive your Career</h2>
                <p>The right course, guided by an expert mentor, can provide invaluable insights, practical skills.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body p-4">
                            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                                <img src="@/assets/img/shapes/bg-1.png" alt="img">
                            </div>
                            <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">
                                <i class="isax isax-book-1 fs-24"></i>
                            </div>
                            <h5 class="mt-3 mb-1">Flexible Learning</h5>
                            <p>We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body p-4">
                            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                                <img src="@/assets/img/shapes/bg-2.png" alt="img">
                            </div>
                            <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">
                                <i class="isax isax-bookmark5 fs-24"></i>
                            </div>
                            <h5 class="mt-3 mb-1">Lifetime Access</h5>
                            <p>When you enroll in our courses, you’re not just signing up for a temporary learning to experience you’re making.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body p-4">
                            <div class="position-absolute top-0 end-0 mt-n3 me-n4">
                                <img src="@/assets/img/shapes/bg-3.png" alt="img">
                            </div>
                            <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">
                                <i class="isax isax-chart-26 fs-24"></i>
                            </div>
                            <h5 class="mt-3 mb-1">Expert Instruction</h5>
                            <p>Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- benefits -->

    <!-- institutions -->
    <section class="client-section">
        <div class="container">
            <h6 class="fw-medium text-center mb-4">Trusted by <span class="text-decoration-underline text-secondary">20+</span> Institutions Around the World</h6>
            <div class="institutions-slider lazy slider">
                <Carousel
                    :autoplay="2000"
                    :loop="true"
                    :wrap-around="true"
                    :settings="settings"
                    :breakpoints="breakpoints" 
                >
                    <Slide
                        v-for="item in HomeInstitutions"
                        :key="item.id"
                        class="lead-group-slider owl-carousel owl-theme"
                    >
                        <div class="institutions-items p-1">
                            <img class="img-fluid" :src="require(`@/assets/img/client/${item.Image}`)" alt="img">
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
    <!-- institutions -->
</template>

<script>
import HomeInstitutions from "@/assets/json/home-institutions.json";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        Carousel,
        Slide,
    },
    data() {
        return {
            HomeInstitutions: HomeInstitutions,
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