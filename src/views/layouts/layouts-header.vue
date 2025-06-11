<script>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex';

export default {

    data() {
        return {
            isFixed: false,
            isSidebarOpen: false,
          
        }
    },
    methods: {
        onWindowScroll() {
            // Update isFixed based on the scroll position
            this.isFixed = window.pageYOffset > 50;
        },
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            document.documentElement.classList.toggle("menu-opened");
        },
        closeSidebar() {
            this.isSidebarOpen = false;
            document.documentElement.classList.remove("menu-opened");
        },
        async handleLogout() {
            try {
                await this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            } catch (error) {
                console.error('Logout error:', error);
            }
        }
    },
    mounted() {
        // Attach scroll event listener
        window.addEventListener('scroll', this.onWindowScroll);
    },
    beforeUnmount() {
        // Clean up the scroll event listener
        window.removeEventListener('scroll', this.onWindowScroll);
    },
    setup() {
        const isDarkMode = ref(false);
        const route = useRoute();  
        const store = useStore();
        const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

        const toggleDarkMode = () => {
            if (isDarkMode.value) {
                document.documentElement.classList.remove("dark-mode");
                localStorage.setItem("dark-mode", null);
            } else {
                document.documentElement.classList.add("dark-mode");
                localStorage.setItem("dark-mode", "enabled");
            }
            isDarkMode.value = !isDarkMode.value;
        };

        const initializeDarkMode = () => {
            const darkMode = localStorage.getItem("dark-mode");
            isDarkMode.value = darkMode === "enabled";
        };

        onMounted(async () => {
            initializeDarkMode();
            await store.dispatch('auth/fetchUserData');
            
        });

        watch(isDarkMode, (newVal) => {
            if (newVal) {
                document.documentElement.classList.add("dark-mode");
            } else {
                document.documentElement.classList.remove("dark-mode");
            }
        });

        return {
            isDarkMode,
            toggleDarkMode,
            route,  // Pass the route object to the template
            isAuthenticated, // Add the computed property to the return object
        };
    },
}
</script>

<template>

    <!-- Header Topbar-->
    <div class="header-topbar text-center" v-if=" route.path ==='/home/index-2' || route.path.startsWith('/course/') || route.path.startsWith('/pages/') || route.path.startsWith('/courses/') ||
                route.path.startsWith('/category/') || route.path.startsWith('/details/') || route.path.startsWith('/pages-instructor/') || route.path.startsWith('/instructor/') || 
                route.path.startsWith('/instructor-students/') || route.path.startsWith('/students/') || route.path.startsWith('/blog-layouts/') || route.path.startsWith('/blogs/')">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <p class="d-flex align-items-center fw-medium fs-14 mb-2 me-3"><i class="isax isax-location5 me-2"></i> عراق - بغداد  </p>
                        <p class="d-flex align-items-center fw-medium fs-14 mb-2"><i class="isax isax-call-calling5 me-2"></i>12345678</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                        <div class="dropdown flag-dropdown mb-2 me-3">
                            <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                            </a>
                            <ul class="dropdown-menu p-2 mt-2">
                                <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown mb-2 me-3">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </a>
                            <ul class="dropdown-menu p-2 mt-2">
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                            </ul>
                        </div>
                        <!-- <ul class="social-icon d-flex align-items-center mb-2">
                            <li class="me-2">
                                <a href="javascript:void(0);"><i class="fa-brands fa-facebook"></i></a>
                            </li>
                            <li class="me-2">
                                <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li class="me-2">
                                <a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li class="me-2">
                                <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><i class="fa-brands fa-linkedin-in"></i></a>
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Header Topbar-->


    <!-- Header -->
    <header class="" :class="{
        'header-one': route.path ==='/home/index',
        'header-two':route.path ==='/home/index-2',
        'header-three position-fixed': route.path ==='/home/index-3',
        'header-four': route.path ==='/home/index-4',
        'header-two header-five position-fixed': route.path ==='/home/index-5',
        'header-three': route.path ==='/home/index-6',
        'fixed': isFixed,
    }">
        <div class="container">
            <div class="header-nav">
                <div class="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);" @click="toggleSidebar">
                        <span class="bar-icon">
                            <i class="isax isax-menu"></i>
                        </span>
                    </a>
                    <div class="navbar-logo">
                        <router-link v-if="['/home/index-2', '/home/index-3', '/home/index-4', '/home/index-5', '/home/index-6'].includes(route.path) ||
                            route.path.startsWith('/course/') || route.path.startsWith('/pages') || route.path.startsWith('/courses') ||
                            route.path.startsWith('/category/') || route.path.startsWith('/details/') || route.path.startsWith('/instructor/') || 
                            route.path.startsWith('/students/') || route.path.startsWith('/instructor-students/') || 
                            route.path.startsWith('/blog-layouts/') || route.path.startsWith('/blogs/')"
                            class="logo-white header-logo" to="/home/index"
                        >
                            <img src="@/assets/img/logo1.jpg" class="logo" alt="Logo" width="40px">
                        </router-link>
                        <router-link v-if="route.path==='/home/index'"  class="logo-white header-logo" to="/home/">
                            <img src="@/assets/img/logo-white.svg" class="logo" alt="Logo">
                        </router-link>
                        <router-link class="logo-dark header-logo" to="/home/">
                            <img src="@/assets/img/logo-white.svg" class="logo" alt="Logo">
                        </router-link>
                    </div>
                </div>
                
                <header-menu></header-menu>
                <div v-if="!['/home/index-3', '/home/index-4'].includes(route.path) && !route.path.startsWith('/course/') && !route.path.startsWith('/pages/') && 
                    !route.path.startsWith('/courses/') && !route.path.startsWith('/category/') && !route.path.startsWith('/details/') && 
                    !route.path.startsWith('/instructor/') && !route.path.startsWith('/students/') && !route.path.startsWith('/instructor-students/') &&
                     !route.path.startsWith('/pages-instructor/') && !route.path.startsWith('/pages/') && !route.path.startsWith('/blog-layouts/') && !route.path.startsWith('/blogs/')">
                    <div class="header-btn d-flex align-items-center">							
                        <div class="dropdown flag-dropdown icon-btn me-2">
                            <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="@/assets/img/flags/us-flag.svg" alt="flag">
                            </a>
                            <ul class="dropdown-menu p-2 mt-2">
                                <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                                    </a>
                                </li>
                                <!-- <li>
                                    <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                        <img src="@/assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                        <div class="dropdown icon-btn me-2">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="isax isax-dollar-circle4"></i>
                            </a>
                            <ul class="dropdown-menu p-2 mt-2">
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                                <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                            </ul>
                        </div>
                        <div class="icon-btn me-2">
                            <a href="javascript:void(0);" id="dark-mode-toggle" @click="toggleDarkMode" :class="{ 'theme-toggle activate': true, 'activate' : isDarkMode }">
                                <i class="isax" :class="[isDarkMode ? 'isax-sun-15' : 'isax-moon']"></i>
                            </a>
                        </div>
                        <!-- <div class="icon-btn me-3">
                            <router-link to="/courses/cart" class="position-relative">
                                <i class="isax isax-shopping-cart5"></i>
                                <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                            </router-link>
                        </div> -->
                        <div v-if="route.path !== '/home/index-2' && route.path !== '/home/index-5'">
                            <router-link to="/" class="btn btn-primary d-inline-flex align-items-center me-2">
                                تسجيل الدخول
                            </router-link>
                            <router-link to="/register" class="btn btn-secondary me-0">
                                تسجيل
                            </router-link>
                        </div>
                        <div v-if="route.path === '/home/index-2' || route.path === '/home/index-5'">
                            <router-link to="/" class="btn btn-light d-inline-flex align-items-center me-2">
                                <i class="isax isax-lock-circle me-2"></i>تسجيل الدخول
                            </router-link>
                            <router-link to="/register" class="btn btn-secondary me-0">
                                <i class="isax isax-user-edit me-2"></i>تسجيل
                            </router-link>
                        </div>
                    </div>
                </div>                
                <div v-if="['/home/index-3', '/home/index-4'].includes(route.path)" class="header-btn d-flex align-items-center">
                    <div class="icon-btn me-2">
                        <a href="javascript:void(0);" id="dark-mode-toggle" @click="toggleDarkMode" :class="{ 'theme-toggle activate': true, 'activate' : isDarkMode }">
                            <i class="isax" :class="[isDarkMode ? 'isax-sun-15' : 'isax-moon']"></i>
                        </a>
                    </div>
                    
                    <div class="dropdown flag-dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle d-inline-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                        </a>
                        <ul class="dropdown-menu p-2 mt-2">
                            <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="@/assets/img/flags/us-flag.svg" class="me-2" alt="flag">ENG
                            </a>
                            </li>
                            <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="@/assets/img/flags/arab-flag.svg" class="me-2" alt="flag">ARA
                            </a>
                            </li>
                            <li>
                            <a class="dropdown-item rounded d-flex align-items-center" href="javascript:void(0);">
                                <img src="@/assets/img/flags/france-flag.svg" class="me-2" alt="flag">FRE
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown me-3">
                        <a href="javascript:void(0);" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            USD
                        </a>
                        <ul class="dropdown-menu p-2 mt-2" style="">
                            <li><a class="dropdown-item rounded" href="javascript:void(0);">USD</a></li>
                            <li><a class="dropdown-item rounded" href="javascript:void(0);">YEN</a></li>
                            <li><a class="dropdown-item rounded" href="javascript:void(0);">EURO</a></li>
                        </ul>
                    </div>
                    <router-link to="/" class="btn btn-primary d-inline-flex align-items-center me-2">Sign In</router-link>
                    <router-link to="/register" class="btn btn-secondary me-0">Register</router-link>
                </div>
                <div class="header-btn d-flex align-items-center" v-if="route.path.startsWith('/course/') || route.path.startsWith('/pages/') || route.path.startsWith('/courses/') ||
                    route.path.startsWith('/category/') || route.path.startsWith('/details/') || route.path.startsWith('/pages-instructor/') || route.path.startsWith('/blog-layouts/') ||
                    route.path.startsWith('/blogs/')"
                >
                    <div class="icon-btn me-2">
                        <a href="javascript:void(0);" id="dark-mode-toggle" @click="toggleDarkMode" :class="{ 'theme-toggle activate': true, 'activate' : isDarkMode }">
                            <i class="isax" :class="[isDarkMode ? 'isax-sun-15' : 'isax-moon']"></i>
                        </a>
                    </div>
                    <!-- <div class="icon-btn me-3">
                        <router-link to="/courses/cart" class="position-relative">
                            <i class="isax isax-shopping-cart5"></i>
                            <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                        </router-link>
                    </div> -->
                    
                    <router-link v-if="!isAuthenticated" to="/" class="btn btn-light d-inline-flex align-items-center me-2">
                   
                        <i class="isax isax-lock-circle me-2"> </i>
                            تسجيل الدخول
                       
                    </router-link>
                    <router-link v-if="!isAuthenticated" to="/register" class="btn btn-secondary me-0">
                        <i class="isax isax-user-edit me-2"></i>
                        تسجيل
                    </router-link>
                    <button v-if="isAuthenticated" @click="handleLogout" class="btn btn-danger me-0">
                        <i class="isax isax-user-edit me-2"></i>
                        تسجيل الخروج 
                    </button>
                </div>
                <div class="header-btn d-flex align-items-center" v-if="route.path.startsWith('/instructor/') ||  route.path.startsWith('/instructor-students/')">
                    <div class="icon-btn me-2">
                        <a href="javascript:void(0);" id="dark-mode-toggle" @click="toggleDarkMode" :class="{ 'theme-toggle activate': true, 'activate' : isDarkMode }">
                            <i class="isax" :class="[isDarkMode ? 'isax-sun-15' : 'isax-moon']"></i>
                        </a>
                    </div>
                    <!-- <div class="icon-btn me-3">
                        <router-link to="/courses/cart" class="position-relative">
                            <i class="isax isax-shopping-cart5"></i>
                            <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                        </router-link>
                    </div> -->
                    <div class="dropdown profile-dropdown">
                        <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown">
                            <span class="avatar">
                                <img src="@/assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div class="profile-header d-flex align-items-center">
                                <div class="avatar">
                                    <img src="@/assets/img/user/user-01.jpg" alt="Img" class="img-fluid rounded-circle">
                                </div>
                                <div>
                                    <h6>Eugene Andre</h6>
                                    <p>instructerdemo@example.com</p>
                                </div>
                            </div>
                            <ul class="profile-body">
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/instructor/instructor-profile"><i class="isax isax-security-user me-2"></i>My Profile</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/instructor/instructor-course"><i class="isax isax-teacher me-2"></i>Courses</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium2" to="/instructor/instructor-earnings"><i class="isax isax-dollar-circle me-2"></i>Earnings</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/instructor/instructor-payout"><i class="isax isax-coin me-2"></i>Payouts</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/instructor/instructor-message"><i class="isax isax-messages-3 me-2"></i>Messages<span class="message-count">2</span></router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/instructor/instructor-settings"><i class="isax isax-setting-2 me-2"></i>Settings</router-link>
                                </li>										
                            </ul>
                            <div class="profile-footer">
                                <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/"><i class="isax isax-arrow-2 me-2"></i>Log in as Student</router-link>
                                <router-link to="/home/index" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>Logout</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-btn d-flex align-items-center" v-if="route.path.startsWith('/students/')"> 
                    <div class="icon-btn me-2">
                        <a href="javascript:void(0);" id="dark-mode-toggle" @click="toggleDarkMode" :class="{ 'theme-toggle activate': true, 'activate' : isDarkMode }">
                            <i class="isax" :class="[isDarkMode ? 'isax-sun-15' : 'isax-moon']"></i>
                        </a>
                    </div>
                    <!-- <div class="icon-btn me-3">
                        <router-link to="/courses/cart" class="position-relative">
                            <i class="isax isax-shopping-cart5"></i>
                            <span class="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">1</span>
                        </router-link>
                    </div> -->
                    <div class="dropdown profile-dropdown">
                        <a href="javascript:void(0);" class="d-flex align-items-center" data-bs-toggle="dropdown">
                            <span class="avatar">
                                <img src="@/assets/img/user/user-02.jpg" alt="Img" class="img-fluid rounded-circle">
                            </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div class="profile-header d-flex align-items-center">
                                <div class="avatar">
                                    <img src="@/assets/img/user/user-02.jpg" alt="Img" class="img-fluid rounded-circle">
                                </div>
                                <div>
                                    <h6>Ronald Richard</h6>
                                    <p>studentdemo@example.com</p>
                                </div>
                            </div>
                            <ul class="profile-body">
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/students/student-profile"><i class="isax isax-security-user me-2"></i>My Profile</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/students/student-quiz"><i class="isax isax-award me-2"></i>Quiz Attempts</router-link>
                                </li>
                                <!-- <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium2" to="/students/student-order-history"><i class="isax isax-shopping-cart me-2"></i>Order History</router-link>
                                </li> -->
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/students/student-messages"><i class="isax isax-messages-3 me-2"></i>Messages<span class="message-count">2</span></router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/students/student-settings"><i class="isax isax-setting-2 me-2"></i>Settings</router-link>
                                </li>										
                            </ul>
                            <div class="profile-footer">
                                <router-link class="dropdown-item d-inline-flex align-items-center rounded fw-medium" to="/"><i class="isax isax-arrow-2 me-2"></i>Log in as Instructor</router-link>
                                <router-link to="/home/index" class="btn btn-secondary d-inline-flex align-items-center justify-content-center w-100"><i class="isax isax-logout me-2"></i>Logout</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-overlay" :class="{ opened: isSidebarOpen }" @click="closeSidebar"></div>
    </header> 
    <!-- /Header -->
</template>