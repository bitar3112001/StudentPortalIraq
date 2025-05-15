<template>
  <!-- Call to Action -->
  <section class="home-five-transform">
    <div class="container" data-aos="fade-up">
      <div class="row align-items-center row-gap-4">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="cta-content">
            <h2>Transform Access To Education</h2>
            <p>
              Create an account to receive our newsletter, course recommendations and
              promotions.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="transform-button-three">
            <router-link to="/course/course-grid" class="btn btn-secondary"
              >View all Courses</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Call to Action -->
  <!-- Acheive you Goals  -->
  <section class="home-five-goals">
    <div class="container">
      <div class="row align-items-center justify-content-center row-gap-4">
        <!-- Col -->
        <div class="col-xl-3 col-lg-12 col-md-12" data-aos="fade-down">
          <div class="acheive-goals-main">
            <h2>Acheive you Goals with DreamsLMS</h2>
          </div>
        </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">
          <div class="acheive-goals">
            <div class="acheive-elips-one">
              <img src="@/assets/img/icon/ellipse-1.svg" alt="Img" />
            </div>
            <div class="acheive-goals-content text-center course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="2000"
                    :delay="3"
                    :endAmount="253085"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p>Students Enrolled all over World</p>
            </div>
          </div>
        </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">
          <div class="acheive-goals">
            <div class="acheive-elips-two">
              <img src="@/assets/img/icon/ellipse-2.svg" alt="Img" />
            </div>
            <div class="acheive-goals-content text-center course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="100"
                    :delay="3"
                    :endAmount="1205"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p>Total Courses on our Platform</p>
            </div>
          </div>
        </div>
        <!-- /Col -->

        <!-- Col -->
        <div class="col-xl-3 col-lg-4 col-md-4 col-12" data-aos="fade-down">
          <div class="acheive-goals">
            <div class="acheive-elips-three">
              <img src="@/assets/img/icon/ellipse-3.svg" alt="Img" />
            </div>
            <div class="acheive-goals-content text-center course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="10"
                    :delay="3"
                    :endAmount="56"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p>Various Countries of Students</p>
            </div>
          </div>
        </div>
        <!-- /Col -->
      </div>
    </div>
  </section>
  <!-- /Acheive you Goals  -->

  <!-- Accelerate cloud -->
  <section class="accelerate-cloud-three">
    <div class="container">
      <div class="shapes-three-left">
        <img class="accelerate-three" src="@/assets/img/shapes/shape-8.png" alt="Img" />
        <img class="accelerate-five" src="@/assets/img/shapes/shape-9.png" alt="Img" />
      </div>
      <div class="section-header-title d-none" data-aos="fade-up">
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-lg-5 col-md-12">
            <div class="home-five-head mb-4">
              <h2 class="text-white">Accelerate Cloud Success</h2>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <p class="text-white ms-lg-5 mb-4">
              96% of eLearning for Business customers see improved results within six
              months. Whether you’re a team of 10 or 10,000, faster cloud fluency starts
              here.
            </p>
          </div>
        </div>
      </div>

      <!-- Award Winning -->
      <div class="award-one">
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div class="master-img">
              <img
                class="img-fluid master-bg4"
                src="@/assets/img/bg/shape-04.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg5"
                src="@/assets/img/bg/shape-05.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg2"
                src="@/assets/img/shapes/shape-7.svg"
                alt="img"
              />
              <img
                class="img-fluid master-skill-image1"
                src="@/assets/img/feature/feature-8.jpg"
                alt="img"
              />
              <div class="text-end">
                <img
                  class="img-fluid master-skill-image2"
                  src="@/assets/img/feature/feature-9.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div class="col-xl-7 col-lg-6 col-md-6 col-12">
            <div class="ms-lg-5 ps-lg-5">
              <div class="mb-3">
                <img src="@/assets/img/icon/award.svg" alt="certified" />
              </div>
              <h2 class="text-warning my-4">Award Winning Course Management</h2>
              <p class="text-white mb-4">
                An award-winning course management system (CMS) or program is typically
                recognized for its exceptional quality, innovation, and effectiveness in
                helping both instructors and students succeed.
              </p>
              <!-- List -->
              <ul class="list-unstyled text-white mb-5">
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i
                  >Interactive Tools for Engagement
                </li>
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i
                  >Customizable Course Creation
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>Robust
                  Analytics and Reporting
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i
                  >Collaborative and Peer-to-Peer Learning
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-warning fs-24 me-2"></i>The Most
                  World Class Instructors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /Award Winning -->

      <!-- Learn Anything -->
      <div class="learn-anything">
        <div class="row align-items-center">
          <div class="col-xl-7 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div class="me-5 pe-5">
              <div class="mb-3">
                <img src="@/assets/img/icon/time.svg" alt="certified" />
              </div>
              <h2 class="text-skyblue my-4">Learn anything from anywhere anytime</h2>
              <p class="text-white mb-4">
                In today’s fast-paced, digital world, the ability to learn anything, from
                anywhere, and at any time is more accessible than ever. Whether you are
                looking to expand your knowledge, gain new skills.
              </p>
              <!-- List -->
              <ul class="list-unstyled text-white mb-5">
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i
                  >Interactive Tools for Engagement
                </li>
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i
                  >Customizable Course Creation
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>Robust
                  Analytics and Reporting
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i
                  >Collaborative and Peer-to-Peer Learning
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-skyblue fs-24 me-2"></i>The Most
                  World Class Instructors
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div class="master-img mb-0">
              <img
                class="img-fluid master-bg4"
                src="@/assets/img/bg/shape-04.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg5"
                src="@/assets/img/bg/shape-05.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg2"
                src="@/assets/img/shapes/shape-7.svg"
                alt="img"
              />
              <img
                class="img-fluid master-skill-image1"
                src="@/assets/img/feature/feature-12.jpg"
                alt="img"
              />
              <div class="text-end">
                <img
                  class="img-fluid master-skill-image2"
                  src="@/assets/img/feature/feature-13.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Learn Anything -->

      <!-- development-carrer-->
      <div class="development-carrer">
        <div class="row align-items-center">
          <div class="col-xl-5 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div class="master-img">
              <img
                class="img-fluid master-bg4"
                src="@/assets/img/bg/shape-04.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg5"
                src="@/assets/img/bg/shape-05.svg"
                alt="img"
              />
              <img
                class="img-fluid master-bg2"
                src="@/assets/img/shapes/shape-7.svg"
                alt="img"
              />
              <img
                class="img-fluid master-skill-image1"
                src="@/assets/img/feature/feature-5.jpg"
                alt="img"
              />
              <div class="text-end">
                <img
                  class="img-fluid master-skill-image2"
                  src="@/assets/img/feature/feature-6.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div class="col-xl-7 col-lg-6 col-md-6 col-12" data-aos="fade-up">
            <div class="ms-lg-5 ps-lg-5">
              <div class="mb-3">
                <img src="@/assets/img/icon/winning.svg" alt="certified" />
              </div>
              <h2 class="text-success my-4">
                Certification for solid development of your Career
              </h2>
              <p class="text-white mb-4">
                Certifications are a powerful way to enhance your skills, build
                credibility, and boost your career growth. In today’s competitive job
                market, a professional certification.
              </p>
              <!-- List -->
              <ul class="list-unstyled text-white mb-5">
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i
                  >Demonstrates Expertise
                </li>
                <li class="d-flex mb-3">
                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Boosts
                  Your Credibility
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Improves
                  Job Security
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i
                  >Facilitates Career Advancement
                </li>
                <li class="d-flex mb-3" data-aos="fade-up">
                  <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>Fosters
                  Personal Growth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /development-carrer -->
    </div>
  </section>
  <!-- Accelerate cloud -->

  <!-- Trending Courses  Three -->
  <section class="home-five-trending">
    <div class="container">
      <div class="row">
        <div class="home-five-head section-header-title" data-aos="fade-up">
          <div class="row align-items-center d-flex justify-content-between row-gap-4">
            <div class="col-md-6">
              <h2>Most Trending Courses</h2>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="see-all text-end">
                <router-link to="/course/course-grid"
                  >View All<i class="fas fa-arrow-right ms-2"></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="home-five-trending-course">
          <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="item in acheivegoal" :key="item.courseTitle">
              <div class="trending-three-item">
                <div
                  class="trending-content-top trending-bg-one text-start"
                  :class="item.bgClass"
                >
                  <div class="course-title-one">
                    <router-link to="/details/course-details-1">{{
                      item.courseTitle
                    }}</router-link>
                  </div>
                  <div class="trending-three-text">
                    <h3 class="title instructor-text">
                      <router-link to="/details/course-details-1">{{
                        item.courseName
                      }}</router-link>
                    </h3>
                    <p>{{ item.courseDescription }}</p>
                  </div>
                  <div
                    class="trending-counts-info d-flex align-items-center justify-content-between"
                  >
                    <div class="trending-three-counts d-flex align-items-center">
                      <img
                        :src="require(`@/assets/img/icon-three/${item.studentIcon}`)"
                        alt="Img"
                      />
                      <p>{{ item.studentCount }} Students</p>
                    </div>
                    <div class="price-three-time d-inline-flex align-items-center">
                      <i class="fa-regular fa-clock me-2"></i>
                      <span>{{ item.duration }}</span>
                    </div>
                  </div>
                </div>
                <div class="trending-content-footer">
                  <div
                    class="trending-price-group d-flex align-items-center justify-content-between"
                  >
                    <div class="trending-group-view">
                      <div class="trending-price-three">
                        <h3>$800</h3>
                      </div>
                    </div>
                    <div class="trending-footer-img">
                      <router-link to="/details/course-details-1"
                        ><img
                          :src="require(`@/assets/img/user/${item.instructorImage}`)"
                          alt="img"
                      /></router-link>
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
      <!-- /Favourite Course -->
    </div>
  </section>
  <!-- Feature Course -->

  <section class="gallery-three">
    <img
      class="gallery-bg d-none d-lg-flex"
      src="@/assets/img/shapes/shape-11.svg"
      alt="img"
    />
    <div class="container">
      <div class="home-five-head section-header-title" data-aos="fade-up">
        <div class="row align-items-center d-flex justify-content-between row-gap-4">
          <div class="col-lg-6 col-sm-12">
            <h2>Courses Taught by Real Instructor</h2>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="see-all text-end">
              <router-link to="/pages-instructor/instructor-list"
                >View all<i class="fas fa-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="courses-gallery-three">
        <div class="row">
          <!-- Col -->
          <div class="col-lg-5 col-md-5">
            <div class="row">
              <div class="col-lg-7 col-md-7 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-13.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6><router-link to="/pages-instructor/instructor-details">David</router-link></h6>
                        <p>Angular Js</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-14.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6><router-link to="/pages-instructor/instructor-details">Maria</router-link></h6>
                        <p>Node Js</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-15.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6>
                          <router-link to="/pages-instructor/instructor-details">Richardson</router-link>
                        </h6>
                        <p>React Js</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-16.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6>
                          <router-link to="/pages-instructor/instructor-details">Patricia</router-link>
                        </h6>
                        <p>Vue Js</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Col -->

          <!-- Col -->
          <div class="col-lg-3 col-md-3 d-flex">
            <div class="instructor-item instructor-item-five">
              <div class="instructors-img">
                <img src="@/assets/img/gallery/gallery-5.jpg" alt="Instructor" />
              </div>
              <div class="instructor-overlay">
                <div
                  class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                >
                  <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                </div>
                <div class="instructor-content">
                  <div>
                    <h6><router-link to="/pages-instructor/instructor-details">Hendriques</router-link></h6>
                    <p>Python Developer</p>
                  </div>
                  <div>
                    <router-link to="/pages-instructor/instructor-details" class="view-link">
                      <i class="fas fa-arrow-right"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Col -->

          <!-- Col -->
          <div class="col-lg-4 col-md-4 d-flex">
            <div class="row">
              <div class="col-lg-12 col-md-12 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-17.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6><router-link to="/pages-instructor/instructor-details">Laura</router-link></h6>
                        <p>UI/UX Designer</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-18.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6><router-link to="/pages-instructor/instructor-details">Morgon</router-link></h6>
                        <p>Node Js</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 d-flex">
                <div class="instructor-item instructor-item-five">
                  <div class="instructors-img">
                    <img
                      src="@/assets/img/instructor/instructor-19.jpg"
                      alt="Instructor"
                    />
                  </div>
                  <div class="instructor-overlay">
                    <div
                      class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3"
                    >
                      <a href="#" class="favourite"><i class="isax isax-heart"></i></a>
                    </div>
                    <div class="instructor-content">
                      <div>
                        <h6><router-link to="/pages-instructor/instructor-details">Brook</router-link></h6>
                        <p>PHP Developer</p>
                      </div>
                      <div>
                        <router-link to="/pages-instructor/instructor-details" class="view-link">
                          <i class="fas fa-arrow-right"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import acheivegoal from "@/assets/json/acheivegoal.json";
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
      acheivegoal: acheivegoal,
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
          itemsToShow: 4.2,
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
