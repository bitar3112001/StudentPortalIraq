import { createRouter, createWebHistory } from 'vue-router';
import { authService } from '@/services/api';
import { useStore } from 'vuex';
import { computed } from 'vue';

import Home from '@/views/pages/home/home-index.vue'
import HomeOne from '@/views/pages/home/home-one/index-one.vue';
import HomeThree from '@/views/pages/home/home-three/home-three.vue';
import HomeTwo from '@/views/pages/home/home-two/home-two.vue';
import HomeFour from '@/views/pages/home/home-four/home-four.vue';
import HomeFive from '@/views/pages/home/home-five/home-five.vue';
import HomeSix from '@/views/pages/home/home-six/home-six.vue';

import blogsIndex from '@/views/pages/blogs/blog-details/blogs-index.vue';
import BlogDetails from '@/views/pages/blogs/blog-details/blog-details.vue'; 
import BlogDetailsLeftSidebar from '@/views/pages/blogs/blog-details/blog-details-left-sidebar.vue';
import BlogDetailsRightSidebar from '@/views/pages/blogs/blog-details/blog-details-right-sidebar.vue';

import blogLayouts from '@/views/pages/blogs/blog-layouts/blog-layouts.vue';
import blogGrid from '@/views/pages/blogs/blog-layouts/blog-grid.vue';
import blog2Grid from '@/views/pages/blogs/blog-layouts/blog-2-grid.vue';
import blog3Grid from '@/views/pages/blogs/blog-layouts/blog-3-grid.vue';
import BlogMasonry from '@/views/pages/blogs/blog-layouts/blog-masonry.vue';
import BlogLeftSidebar from '@/views/pages/blogs/blog-layouts/blog-left-sidebar.vue';
import BlogRightSidebar from '@/views/pages/blogs/blog-layouts/blog-right-sidebar.vue';
import BlogCarousal from '@/views/pages/blogs/blog-layouts/blog-carousal.vue';


import PagesIndex from '@/views/pages/pages/pages-index.vue';
import AboutUs from '@/views/pages/pages/about-us.vue';
import ContactUs from '@/views/pages/pages/contact-us.vue';
import Notifications from '@/views/pages/pages/notifications.vue';
import Testimonials from '@/views/pages/pages/testimonials.vue';
import becomeanInstructor from '@/views/pages/pages/become-an-instructor.vue';
import pricingPlan from '@/views/pages/pages/pricing-plan.vue';
import faq from '@/views/pages/pages/faq.vue';
import comingSoon from '@/views/pages/pages/coming-soon.vue';
import underConstruction from '@/views/pages/pages/under-construction.vue';
import termsConditions from '@/views/pages/pages/terms-and-conditions.vue';
import privacyPolicy from '@/views/pages/pages/privacy-policy.vue';

import pagesInstructor from '@/views/pages/pages/instructor/pages-instructor.vue';
import instructorGrid from '@/views/pages/pages/instructor/instructor-grid.vue';
import instructorList from '@/views/pages/pages/instructor/instructor-list.vue';
import instructorDetails from '@/views/pages/pages/instructor/instructor-details.vue';

import error404 from '@/views/pages/pages/error/error-404.vue';
import error500 from '@/views/pages/pages/error/error-500.vue';

import instructorIndex from '@/views/pages/dashboard/instructor/instructor-index.vue';
import instructorDashboard from '@/views/pages/dashboard/instructor/instructor-dashboard.vue';
import instructorProfile from '@/views/pages/dashboard/instructor/instructor-profile.vue';
import instructorCourse from '@/views/pages/dashboard/instructor/instructor-course.vue';
import InstructorCourseGrid from '@/views/pages/dashboard/instructor/instructor-course-grid.vue';
import InstructorAnnouncements from '@/views/pages/dashboard/instructor/instructor-announcements.vue';
import InstructorAssignment from '@/views/pages/dashboard/instructor/instructor-assignment.vue';
import InstructorQuiz from '@/views/pages/dashboard/instructor/instructor-quiz.vue';
import InstructorQuizresults from '@/views/pages/dashboard/instructor/instructor-quiz-results.vue';
import InstructorQuizquestions from '@/views/pages/dashboard/instructor/instructor-quiz-questions.vue';
import InstructorCertificate from '@/views/pages/dashboard/instructor/instructor-certificate.vue';
import InstructorEarnings from '@/views/pages/dashboard/instructor/instructor-earnings.vue';
import InstructorPayout from '@/views/pages/dashboard/instructor/instructor-payout.vue';
import InstructorStatements from '@/views/pages/dashboard/instructor/instructor-statements.vue';
import InstructorMessage from '@/views/pages/dashboard/instructor/instructor-message.vue';
import InstructorTickets from '@/views/pages/dashboard/instructor/instructor-tickets.vue';
import InstructorSettings from '@/views/pages/dashboard/instructor/settings/instructor-settings.vue';
import InstructorChangepassword from '@/views/pages/dashboard/instructor/settings/instructor-change-password.vue';
import InstructorPlans from '@/views/pages/dashboard/instructor/settings/instructor-plans.vue';
import InstructorSocialProfiles from '@/views/pages/dashboard/instructor/settings/instructor-social-profiles.vue';
import InstructorLinkedAccounts from '@/views/pages/dashboard/instructor/settings/instructor-linked-accounts.vue';
import InstructorNotifications from '@/views/pages/dashboard/instructor/settings/instructor-notifications.vue';
import InstructorIntegrations from '@/views/pages/dashboard/instructor/settings/instructor-integrations.vue';
import InstructorStudents from '@/views/pages/dashboard/instructor/students/instructor-student.vue';
import StudentGrid from '@/views/pages/dashboard/instructor/students/student-grid.vue';
import StudentDetails from '@/views/pages/dashboard/instructor/students/student-details.vue';
import StudentList from '@/views/pages/dashboard/instructor/students/student-list.vue';


import login from '@/views/pages/pages/authentication/login-index.vue'
import register from '@/views/pages/pages/authentication/register.vue';
import forgotPassword from '@/views/pages/pages/authentication/forgot-password.vue';
import setPassword from '@/views/pages/pages/authentication/set-password.vue';
import otp from '@/views/pages/pages/authentication/otp.vue';
import lockScreen from '@/views/pages/pages/authentication/lock-screen.vue';
import CourseIndex from '@/views/pages/courses/course/course-index.vue';
import CourseGrid from '@/views/pages/courses/course/course-grid.vue';
import CourseList from '@/views/pages/courses/course/course-list.vue';
import CategoryIndex from '@/views/pages/courses/category/category-index.vue';
import CourseCategory from '@/views/pages/courses/category/course-category.vue';
import CourseCategory2 from '@/views/pages/courses/category/course-category-2.vue';
import CourseCategory3 from '@/views/pages/courses/category/course-category-3.vue';
import DetailsIndex from '@/views/pages/courses/details/details-index.vue';
import CourseDetails from '@/views/pages/courses/details/course-details.vue';
import CourseDetails2 from '@/views/pages/courses/details/course-details-2.vue';
import CoursesIndex from '@/views/pages/courses/courses-index.vue';
import CourseResume from '@/views/pages/courses/course-resume.vue';
import CourseWatch from '@/views/pages/courses/course-watch.vue';
import CourseCart from '@/views/pages/courses/course-cart.vue';
import CourseCheckout from '@/views/pages/courses/course-checkout.vue';
import AddCourse from '@/views/pages/courses/add-course/add-course.vue';
import EditCourse from '@/views/pages/courses/edit-course/edit-course.vue';


import StudentIndex from '@/views/pages/dashboard/student/student-index.vue';
import StudentDashboard from '@/views/pages/dashboard/student/student-dashboard.vue';
import StudentProfile from '@/views/pages/dashboard/student/student-profile.vue';
import StudentCourses from '@/views/pages/dashboard/student/student-courses.vue';
import StudentCertificates from '@/views/pages/dashboard/student/student-certificates.vue';
import StudentWishlist from '@/views/pages/dashboard/student/student-wishlist.vue';
import StudentReviews from '@/views/pages/dashboard/student/student-reviews.vue';
import StudentQuiz from '@/views/pages/dashboard/student/student-quiz.vue';
import StudentQuizQuestions from '@/views/pages/dashboard/student/student-quiz-questions.vue';
import StudentOrderHistory from '@/views/pages/dashboard/student/student-order-history.vue';
import StudentReferral from '@/views/pages/dashboard/student/student-referral.vue';
import StudentMessages from '@/views/pages/dashboard/student/student-messages.vue';
import StudentTickets from '@/views/pages/dashboard/student/student-tickets.vue';
import StudentSettings from '@/views/pages/dashboard/student/settings/student-settings.vue';
import StudentChangePassword from '@/views/pages/dashboard/student/settings/student-change-password.vue';
import StudentSocialProfile from '@/views/pages/dashboard/student/settings/student-social-profile.vue';
import StudentLinkedAccounts from '@/views/pages/dashboard/student/settings/student-linked-accounts.vue';
import StudentNotifications from '@/views/pages/dashboard/student/settings/student-notifications.vue';
import StudentBillingAddress from '@/views/pages/dashboard/student/settings/student-billing-address.vue';
import InstructorWithdraw from '@/views/pages/dashboard/instructor/settings/instructor-withdraw.vue';

import CourseCategories from '@/views/pages/dashboard/instructor/course-categories.vue';
import CourseLevels from '@/views/pages/dashboard/instructor/course-levels.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/pages/authentication/login-index.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/home/index-2',
    name: 'Home',
    component: () => import('@/views/pages/home/home-two/home-two.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: forgotPassword
  },
  {
    path: '/set-password',
    name: 'set-password',
    component: setPassword
  },
  {
    path: '/otp',
    name: 'otp',
    component: otp
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: lockScreen
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: comingSoon
  },
  {
    path: '/under-construction',
    name: 'under-construction',
    component: underConstruction
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: error500
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: error404
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', redirect: '/home/index' },
      { path: 'index', component: HomeOne },
      { path: 'index-2', component: HomeTwo },
      { path: 'index-3', component: HomeThree },
      { path: 'index-4', component: HomeFour },
      { path: 'index-5', component: HomeFive },
      { path: 'index-6', component: HomeSix },
    ]
  },
  {
    path: '/instructor',
    component: instructorIndex,
    meta: { requiresAuth: true, permission: 'instructor' },
    children: [
      { path: '', redirect: '/instructor/instructor-dashboard'},
      { path: 'instructor-dashboard', component: instructorDashboard, meta: { requiresAuth: true, permission: 'instructor' }  },
      { path: 'instructor-profile', component: instructorProfile, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-course', component: instructorCourse, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-course-grid', component: InstructorCourseGrid, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-announcements', component: InstructorAnnouncements, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-assignment', component: InstructorAssignment, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-quiz', component: InstructorQuiz, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-quiz-results', component: InstructorQuizresults, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-quiz-questions', component: InstructorQuizquestions, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-certificate', component: InstructorCertificate, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-earnings', component: InstructorEarnings, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-payout', component: InstructorPayout, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-statements', component: InstructorStatements, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-message', component: InstructorMessage, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-tickets', component: InstructorTickets, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-settings', component: InstructorSettings, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-change-password', component: InstructorChangepassword, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-plans', component: InstructorPlans, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-social-profiles', component: InstructorSocialProfiles, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-linked-accounts', component: InstructorLinkedAccounts, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-notifications', component: InstructorNotifications, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-integrations', component: InstructorIntegrations, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'instructor-withdraw', component: InstructorWithdraw, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'course-categories', component: CourseCategories, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'course-levels', component: CourseLevels, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'edit-course/:id', component: EditCourse, meta: { requiresAuth: true, permission: 'instructor' } },
    ]
  },
  {
    path: '/instructor-students',
    component: InstructorStudents,
    meta: { requiresAuth: true, permission: 'instructor' },
    children: [
      { path: '', redirect: '/instructor-students/student-grid' },
      { path: 'student-grid', component: StudentGrid, meta: { requiresAuth: true, permission: 'instructor' } },
      { path: 'student-list', component: StudentList, meta: { requiresAuth: true, permission: 'instructor' } },      
      { path: 'student-details', component: StudentDetails, meta: { requiresAuth: true, permission: 'instructor' } },
    ]
  },
  {
    path: '/blogs',
    component: blogLayouts,
    children: [
      { path: '', redirect: '/blogs/blog-details' },
      { path: 'blog-details', component: BlogDetails },
      { path: 'blog-details-left-sidebar', component: BlogDetailsLeftSidebar },
      { path: 'blog-details-right-sidebar', component: BlogDetailsRightSidebar },
    ]
  },
  {
    path: '/blog-layouts',
    component: blogsIndex,
    children: [
      { path: '', redirect: '/blog-layouts/blog-grid' },
      { path: 'blog-grid', component: blogGrid },
      { path: 'blog-2-grid', component: blog2Grid },
      { path: 'blog-3-grid', component: blog3Grid },
      { path: 'blog-masonry', component: BlogMasonry },
      { path: 'blog-left-sidebar', component: BlogLeftSidebar },
      { path: 'blog-right-sidebar', component: BlogRightSidebar },
      { path: 'blog-carousal', component: BlogCarousal },
    ]
  },
  {
    path: '/pages',
    component: PagesIndex,
    children: [
      { path: '', redirect: '/pages/about-us' },
      { path: 'about-us', component: AboutUs },
      { path: 'contact-us', component: ContactUs },
      { path: 'notifications', component: Notifications },
      { path: 'become-an-instructor', component: becomeanInstructor },
      { path: 'testimonials', component: Testimonials },
      { path: 'pricing-plan', component: pricingPlan },
      { path: 'faq', component: faq },
      { path: 'terms-and-conditions', component: termsConditions },
      { path: 'privacy-policy', component: privacyPolicy },
    ]
  },
  {
    path: '/pages-instructor',
    component: pagesInstructor,
    children: [
      { path: '', redirect: '/pages-instructor/instructor-grid' },
      { path: 'instructor-grid', component: instructorGrid },
      { path: 'instructor-list', component: instructorList },
      { path: 'instructor-details', component: instructorDetails },
    ]
  },
  {
    path: '/course',
    component: CourseIndex,
    children: [
      { path: '', redirect: '/course/course-grid' },
      { path: 'course-grid', component: CourseGrid },
      { path: 'course-list', component: CourseList },
    ]
  },
  {
    path: '/category',
    component: CategoryIndex,
    children: [
      { path: '', redirect: '/category/course-category-1' },
      { path: 'course-category-1', component: CourseCategory },
      { path: 'course-category-2', component: CourseCategory2 },
      { path: 'course-category-3', component: CourseCategory3 },
    ]
  },
  {
    path: '/details',
    component: DetailsIndex,
    children: [
      { path: '', redirect: '/details/course-details-1' },
      { path: 'course-details-1', component: CourseDetails },
      { path: 'course-details-2', component: CourseDetails2 },
    ]
  },
  {
    path: '/courses',
    component: CoursesIndex,
    children: [
      { path: '', redirect: '/courses/course-resume' },
      { path: 'course-resume', component: CourseResume, meta: { requiresAuth: true } },
      { path: 'course-watch', component: CourseWatch, meta: { requiresAuth: true } },
      { path: 'cart', component: CourseCart, meta: { requiresAuth: true } },
      { path: 'checkout', component: CourseCheckout, meta: { requiresAuth: true } },
      { path: 'add-course', component: AddCourse, meta: { requiresAuth: true, permission: 'instructor' }  },
    ]
  },
  {
    path: '/students',
    component: StudentIndex,
    meta: { requiresAuth: true, permission: 'student' },
    children: [
      { path: '', redirect: '/students/student-dashboard' },
      { path: 'student-dashboard', component: StudentDashboard, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-profile', component: StudentProfile, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-courses', component: StudentCourses, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-certificates', component: StudentCertificates, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-wishlist', component: StudentWishlist, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-reviews', component: StudentReviews, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-quiz', component: StudentQuiz, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-quiz-questions', component: StudentQuizQuestions, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-order-history', component: StudentOrderHistory, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-referral', component: StudentReferral, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-messages', component: StudentMessages, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-tickets', component: StudentTickets, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-settings', component: StudentSettings, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-change-password', component: StudentChangePassword, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-social-profile', component: StudentSocialProfile, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-linked-accounts', component: StudentLinkedAccounts, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-notifications', component: StudentNotifications, meta: { requiresAuth: true, permission: 'student' } },
      { path: 'student-billing-address', component: StudentBillingAddress, meta: { requiresAuth: true, permission: 'student' } },
    ]
  },
 
];

const base = process.env.NODE_ENV === 'production'
  ? '/studentDash/'      // <-- identical to vue.config.js
  : '/';

const router = createRouter({
  history: createWebHistory(base),
  linkActiveClass: "active",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const store = useStore();
  
  
  // Initialize auth state if not already initialized
  if (!store.getters['auth/isLoaded']) {
    try {
      await store.dispatch('auth/initialize');
      await store.dispatch('auth/fetchUserData');
    } catch (error) {
      console.error('Error initializing auth:', error);
      if (to.meta.requiresAuth) {
        next('/login');
        return;
      }
    }
  }

  const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
  const currentUser = computed(() => store.getters['auth/currentUser']);
  const role = computed(() => store.getters['auth/role']);
  const userType = computed(() => store.getters['auth/user_type']);
  const is_instructor_online = computed(() => store.getters['auth/is_online']);

  const auth = computed(() => ({
    hasPermission: async (permission) => {
      if (permission === 'all') return true;
      if (permission === 'instructor') return userType.value == 1 && is_instructor_online.value;
      if (permission === 'student') return userType.value == 2;
      return store.getters['auth/hasPermission'](permission);
    }
  }));

  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login');
    return;
  }

  // Check if route requires specific permission
  if (to.meta.permission) {
    const hasPermission = await auth.value.hasPermission(to.meta.permission);
    if (!hasPermission) {
      next('/error-404');
      return;
    }
  }

  // Redirect authenticated users away from login page
  if (to.path === '/login' && isAuthenticated.value) {
    next('/home/index-2');
    return;
  }

  // Redirect root to home for authenticated users
  if (to.path === '/' && isAuthenticated.value) {
    next('/home/index-2');
    return;
  }

  // Scroll to top and proceed
  window.scrollTo({ top: 0, behavior: "smooth" });
  next();
});

export { router }