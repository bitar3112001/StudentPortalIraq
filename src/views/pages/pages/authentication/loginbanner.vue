<template>
<!-- Login Banner -->
<div class="col-md-6 login-bg d-none d-lg-flex">
    <div class="login-carousel">
        <div>
            <div class="login-carousel-section mb-3">
                <div class="login-banner">
                    <img src="@/assets/img/auth/auth-1.svg" class="img-fluid" alt="Logo">
                </div>
                <Carousel>
                    <Slide v-for="slide in 3" :key="slide">
                        <div class="mentor-course text-center">
                            <h3 class="mb-2">  Welcome to <br />Dreams<span class="text-secondary">LMS</span> Courses. </h3>
                            <p>  Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.</p>
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
<!-- /Login Banner -->
</template>
<script>
    import { defineComponent } from 'vue'
    import { Carousel, Pagination, Slide } from 'vue3-carousel';
    
    import 'vue3-carousel/dist/carousel.css';
    
    export default defineComponent({
    name: 'Autoplay',
    components: {
    Carousel,
    Slide,
    Pagination,
    },
});
</script>