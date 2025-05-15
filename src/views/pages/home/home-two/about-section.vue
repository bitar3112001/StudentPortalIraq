<template>
    <!-- about us -->
    <div class="about-us" dir="rtl">
        <div class="container">
            <div class="about-us-content">
                <div class="row align-items-center justify-content-between">
                    <div class="col-lg-7 aos" data-aos="fade-up">
                        <div class="about-us-head aos" data-aos="fade-up">
                            <h2>ماذا يقول الناس عنا ❤️</h2>
                            <p>اقرأ ما يقوله عملاؤنا الراضون عن تجاربهم مع منصتنا.</p>
                        </div>
                        <div class="owl-carousel owl-theme nav-bottom" id="review-carousel">
                            <Carousel :loop="true" :wrap-around="true" :settings="settings"  :breakpoints="breakpoints">
                                <Slide v-for="item in AboutSection" :key="item.id">
                                    <div class="item flex-fill">
                                        <div class="review-item text-start">
                                            <div class="rating">
                                                <span><i class="ti ti-star-filled selected"></i></span>
                                                <span><i class="ti ti-star-filled selected"></i></span>
                                                <span><i class="ti ti-star-filled selected"></i></span>
                                                <span><i class="ti ti-star-filled selected"></i></span>
                                                <span><i class="ti ti-star-filled selected"></i></span>
                                            </div>
                                            <h5 class="title">"{{item.Title}}"</h5>
                                            <p>{{item.Content}}</p>
                                            <div class="d-flex align-items-center review-user">
                                                <div class="me-2">
                                                    <router-link to="/instructor-students/student-details">
                                                        <!-- <img :src="require(@/assets/img/user/${item.Image})" alt="img" class="img-fluid"> -->
                                                    </router-link>
                                                </div>
                                                <div>
                                                    <h6 class=" fw-medium"><router-link to="/instructor-students/student-details">{{item.Name}}</router-link></h6>
                                                    <p class="mb-0">{{item.Role}}</p>
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
                    <div class="col-lg-5">
                        <div class="img-section">
                            <img src="@/assets/img/feature/feature-23.jpg" alt="img" class="img-fluid about-img aos" data-aos="zoom-in">
                            <div class="enrolled-list-cover d-none d-xl-flex aos" data-aos="fade-down">
                                <div class="enrolled-list">
                                    <div class="avatar-list-stacked">
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/user/user-01.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/user/user-35.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/user/user-09.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/user/user-06.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img src="@/assets/img/user/user-36.jpg" alt="img">
                                        </span>
                                    </div>
                                    <p class="mb-0 text-light fw-bold text-center"><span class="text-secondary">+200</span> تقييم</p>
                                </div>
                            </div>
                            <img src="@/assets/img/bg/arrow.png" alt="img" class="img-fluid arrow d-none d-xl-flex">
                        </div>
                    </div>
                </div>
            </div>
            <div class="apply-role-section">
                <div class="row row-gap-4">
                    <div class="col-md-6">
                        <div class="role-item aos" data-aos="fade-right">
                            <div class="row">
                                <div class="col-xl-6">
                                    <h5 class="mb-2">كن مدرساً</h5>
                                    <p class="mb-4">أفضل المدربين العالميين يعلمون الملايين من الطلاب على منصتنا.</p>
                                    <router-link to="/pages/become-an-instructor" class="btn btn-primary rounded-pill d-inline-flex align-items-center">تقدم الآن<i class="isax isax-arrow-left-3 me-2"></i></router-link>
                                </div>
                                <div>
                                    <img src="@/assets/img/instructor/instructor.png" alt="img" class="img-fluid role-img d-none d-xl-flex">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="role-item student-bg aos" data-aos="fade-up">
                            <div class="row">
                                <div class="col-xl-6">
                                    <h5 class="mb-2">كن طالباً</h5>
                                    <p class="mb-4">ابدأ رحلتك التعليمية معنا واحصل على ثروة من الموارد</p>
                                    <router-link to="/instructor-students/student-list" class="btn btn-secondary rounded-pill d-inline-flex align-items-center">سجل الآن<i class="isax isax-arrow-left-3 me-2"></i></router-link>
                                </div>
                                <div>
                                    <img src="@/assets/img/students/student.png" alt="img" class="img-fluid role-img d-none d-xl-flex">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
            <img src="@/assets/img/bg/about-bg-01.png" alt="img" class="img-fluid about-bg-01 d-none d-xl-flex">
            <img src="@/assets/img/bg/about-bg-02.png" alt="img" class="img-fluid about-bg-02 d-none d-xl-flex">
        </div>
    </div>
    <!-- /about us -->
</template>


<script>
import AboutSection from "@/assets/json/about-section.json";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            AboutSection: AboutSection,
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
                    itemsToShow: 2,
                    snapAlign: "start",
                },
            },
        }
    },
}
</script>