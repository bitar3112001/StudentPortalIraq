import { createApp } from 'vue'
import { router } from '@/router';
import App from './App.vue'
import store from './store'
import {BootstrapVue3, BToastPlugin} from 'bootstrap-vue-3'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import VueSelect from 'vue3-select2-component'
import VueFeather from 'vue-feather';
import VueApexCharts from "vue3-apexcharts";
import Vue3Autocounter from 'vue3-autocounter';
import DatePicker from 'vue3-datepicker'
import CKEditor from '@ckeditor/ckeditor5-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

/*********Layouts component**********/
import layoutsHeader from '@/views/layouts/layouts-header.vue';
import HeaderMenu from '@/views/layouts/header-menu.vue';
import instructorSidebar from '@/views/layouts/instructor-sidebar.vue';
import studentSidebar from '@/views/layouts/student-sidebar.vue';



/********* Home **********/
import homeThreebanner from '@/views/pages/home/home-three/home-three-banner.vue'
import featurecourse from '@/views/pages/home/home-three/feature-course.vue'
import trendingcourse from '@/views/pages/home/home-three/trending-course.vue'
import shareknowledge from '@/views/pages/home/home-three/share-knowledge.vue'
import latestblog from '@/views/pages/home/home-three/latest-blog.vue'
import dashboardindex from '@/views/pages/home/home-three/home-three.vue'
import featureinstructors from '@/views/pages/home/home-three/feature-instructors.vue'
import leadingcompanies from '@/views/pages/home/home-three/leading-companies.vue'
import homeThreeFooter from '@/views/pages/home/home-three/home-three-footer.vue'

import homeBanner from '@/views/pages/home/home-one/home-banner.vue';
import HomeBenefits from '@/views/pages/home/home-one/home-benefits.vue';
import HomeTopCourses from '@/views/pages/home/home-one/home-top-courses.vue';
import HomeFeatured from '@/views/pages/home/home-one/home-featured.vue';
import HomeClient from '@/views/pages/home/home-one/home-client.vue';
import HomeInstructor from '@/views/pages/home/home-one/home-instructor.vue';
import HomeTestimonials from '@/views/pages/home/home-one/home-testimonials.vue';
import HomeFaq from '@/views/pages/home/home-one/home-faq.vue';
import HomeFooter from '@/views/pages/home/home-one/home-footer.vue';


import favouriteSection from '@/views/pages/home/home-two/favourite-section.vue';
import bannerSection from '@/views/pages/home/home-two/banner-section.vue';
import benefitsSection from '@/views/pages/home/home-two/benefits-section.vue';
import featureSection from '@/views/pages/home/home-two/feature-section.vue';
import counterSection from '@/views/pages/home/home-two/counter-section.vue';
import topclassSection from '@/views/pages/home/home-two/topclass-section.vue';
import subscribeSection from '@/views/pages/home/home-two/subscribe-section.vue';
import masterSection from '@/views/pages/home/home-two/master-section.vue';
import clientSection from '@/views/pages/home/home-two/client-section.vue';
import aboutSection from '@/views/pages/home/home-two/about-section.vue';
import faqSection from '@/views/pages/home/home-two/faq-section.vue';
import blogSection from '@/views/pages/home/home-two/blog-section.vue';
import footertwo from '@/views/pages/home/home-two/footer-two.vue'


import homebannerfour from '@/views/pages/home/home-four/homebanner-two.vue'
import coursefour from '@/views/pages/home/home-four/course-four.vue'
import testimonialfour from "@/views/pages/home/home-four/testimonial-four.vue"
import featurefour from '@/views/pages/home/home-four/feature-four.vue'
import userfour from '@/views/pages/home/home-four/user-four.vue'


import homefivebanner from '@/views/pages/home/home-five/home-fivebanner.vue'
import favouritefive from '@/views/pages/home/home-five/favourite-five.vue'
import coursestabcontent from '@/views/pages/home/home-five/courses-tabcontent.vue'
import acheivegoals from '@/views/pages/home/home-five/acheive-goals.vue'
import instructorfive from '@/views/pages/home/home-five/instructor-five.vue'
import coursefive from '@/views/pages/home/home-five/course-five.vue'
import footerfive from '@/views/pages/home/home-five/footer-five.vue'


import bannerSix from '@/views/pages/home/home-six/banner-six.vue';
import courseSix from '@/views/pages/home/home-six/course-six.vue';
import counterSix from '@/views/pages/home/home-six/counter-six.vue';
import featureSix from '@/views/pages/home/home-six/feature-six.vue';
import masterSix from '@/views/pages/home/home-six/master-six.vue';
import experienceSix from '@/views/pages/home/home-six/experience-six.vue';
import shareSix from '@/views/pages/home/home-six/share-six.vue';
import testimonialSix from '@/views/pages/home/home-six/testimonial-six.vue';
import blogsSix from '@/views/pages/home/home-six/blogs-six.vue';
import footerSix from '@/views/pages/home/home-six/footer-six.vue';

import CourseInformation from '@/views/pages/courses/add-course/course-information.vue';
import CourseMedia from '@/views/pages/courses/add-course/course-media.vue';
import CourseCurriculam from '@/views/pages/courses/add-course/course-curriculam.vue';
import AdditionalInformation from '@//views/pages/courses/add-course/additional-information.vue';
import CoursePricing from '@/views/pages/courses/add-course/course-pricing.vue';

import studentHeader from '@/views/pages/dashboard/student/student-header.vue';


import PagesinstructorSidebar from '@/views/pages/pages/instructor/pagesinstructor-sidebar.vue';
import blogdetials_Sidebar from '@/views/pages/blogs/blog-details/blogdetials-sidebar.vue';
import instructorHeader from '@/views/pages/dashboard/instructor/instructor-header.vue';
import instructorSettingsSidebar from '@/views/pages/dashboard/instructor/settings/instructor-settings-sidebar.vue';

import instructorAnnouncementsModal from '@/components/modal/instructor-announcements-modal.vue';
import instructorAssignmentModal from '@/components/modal/instructor-assignment-modal.vue';
import instructorQuizModal from '@/components/modal/instructor-quiz-modal.vue';
import instructorQuizquestionModal from '@/components/modal/instructor-quiz-question-modal.vue';
import instructorCertificateModal from '@/components/modal/instructor-certificate-modal.vue';
import instructorPlansModal from '@/components/modal/instructor-plans-modal.vue';
import instructorTicketsModal from '@/components/modal/instructor-tickets-modal.vue';
import AddCourseModal from '@/components/modal/add-course-modal.vue';

import studentWishlistModal from '@/components/modal/student-wishlist-modal.vue';
import studentOrderHistoryModal from '@/components/modal/student-order-history-modal.vue';
import studentReferralModal from '@/components/modal/student-referral-modal.vue';
import studentTicketModal from '@/components/modal/student-ticket-modal.vue';
import studentSettingsModal from '@/components/modal/student-settings-modal.vue';
import studentBillingaddressModal from '@/components/modal/student-billing-address-modal.vue';

import studentSettingsSidebar from '@/views/pages/dashboard/student/settings/student-settings-sidebar.vue';
import CourseSidebar from '@/views/pages/courses/course/course-sidebar.vue';
import Loginbanner from '@/views/pages/pages/authentication/loginbanner.vue';


// plugins
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/feather.css';
import '@/assets/css/iconsax.css';
import '@/assets/css/tabler-icons.css';
import "boxicons/css/boxicons.min.css";
import '@/assets/scss/main.scss';
  
// Define the feature flag before importing Vue
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App)

AOS.init({
    duration: 1200, 
    easing: 'ease-in-out',
    once: true, 
});

/*********Layouts Components**********/
app.component('header-menu', HeaderMenu)
app.component('layouts-header', layoutsHeader)
app.component('instructor-sidebar', instructorSidebar)
app.component('student-sidebar', studentSidebar)

/*********Home**********/
app.component('home-three-banner', homeThreebanner);
app.component('feature-course', featurecourse);
app.component('trending-course', trendingcourse);
app.component('share-knowledge', shareknowledge);
app.component('latest-blog', latestblog);
app.component('dashboard-index', dashboardindex);
app.component('leading-companies', leadingcompanies);
app.component('feature-instructors', featureinstructors);
app.component('home-three-footer', homeThreeFooter);

app.component('home-banner', homeBanner)
app.component('home-benefits', HomeBenefits)
app.component('home-top-courses', HomeTopCourses)
app.component('home-featured', HomeFeatured)
app.component('home-client', HomeClient)
app.component('home-instructor', HomeInstructor)
app.component('home-testimonials', HomeTestimonials)
app.component('home-faq', HomeFaq)
app.component('home-footer', HomeFooter)

app.component('footer-two', footertwo);
app.component('favourite-section',favouriteSection)
app.component('banner-section',bannerSection)
app.component('benefits-section',benefitsSection)
app.component('feature-section',featureSection)
app.component('counter-section',counterSection)
app.component('topclass-section',topclassSection)
app.component('subscribe-section',subscribeSection)
app.component('master-section',masterSection)
app.component('client-section',clientSection)
app.component('about-section',aboutSection)
app.component('faq-section',faqSection)
app.component('blog-section',blogSection)


app.component('homebanner-four', homebannerfour);
app.component('course-four', coursefour);
app.component('testimonial-four', testimonialfour);
app.component('feature-four', featurefour);
app.component('user-four', userfour);


app.component('home-fivebanner', homefivebanner);
app.component('favourite-five', favouritefive);
app.component('coursestab-content', coursestabcontent);
app.component('acheive-goals', acheivegoals);
app.component('instructor-five', instructorfive);
app.component('course-five', coursefive);
app.component('footer-five', footerfive);

app.component('banner-six',bannerSix)
app.component('course-six',courseSix)
app.component('counter-six',counterSix)
app.component('feature-six',featureSix)
app.component('master-six',masterSix)
app.component('experience-six',experienceSix)
app.component('share-six',shareSix)
app.component('testimonial-six',testimonialSix)
app.component('blogs-six',blogsSix)
app.component('footer-six',footerSix)

app.component('student-header',studentHeader)

app.component('pagesinstructor-sidebar',PagesinstructorSidebar)
app.component('blogdetials-sidebar',blogdetials_Sidebar)
app.component('instructor-header',instructorHeader)
app.component('instructor-settings-sidebar',instructorSettingsSidebar)

app.component('course-sidebar', CourseSidebar)
app.component('course-information', CourseInformation)
app.component('course-media', CourseMedia)
app.component('course-curriculam', CourseCurriculam)
app.component('additional-information', AdditionalInformation)
app.component('course-pricing', CoursePricing)
app.component('student-settings-sidebar',studentSettingsSidebar)

app.component('instructor-announcements-modal',instructorAnnouncementsModal)
app.component('instructor-assignment-modal',instructorAssignmentModal)
app.component('instructor-quiz-modal',instructorQuizModal)
app.component('instructor-quiz-question-modal',instructorQuizquestionModal)
app.component('instructor-certificate-modal',instructorCertificateModal)
app.component('instructor-plans-modal',instructorPlansModal)
app.component('instructor-tickets-modal',instructorTicketsModal)
app.component('add-course-modal', AddCourseModal)
app.component('student-wishlist-modal',studentWishlistModal)
app.component('student-order-history-modal',studentOrderHistoryModal)
app.component('student-referral-modal',studentReferralModal)
app.component('student-ticket-modal',studentTicketModal)
app.component('student-settings-modal',studentSettingsModal)
app.component('student-billing-address-modal',studentBillingaddressModal)

app.component('login-banner', Loginbanner)


app.component('vue3-autocounter', Vue3Autocounter)
app.component('date-picker', DatePicker);
app.component('vue-select', VueSelect)
app.component(VueFeather.name, VueFeather)
app.use(VueApexCharts)
.use(BootstrapVue3)
.use(BToastPlugin)
.use(Antd)
.use(store)
.use(router)
.mount('#app');
