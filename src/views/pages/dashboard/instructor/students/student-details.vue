<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Students Details</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active" aria-current="page">Students Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content instructor-detail-content">
    <div class="container">
      <div class="instructor-profile">
        <div class="instructor-profile-bg">
          <img
            src="@/assets/img/bg/card-bg-01.png"
            class="instructor-profile-bg-1"
            alt=""
          />
        </div>
        <div class="row align-items-center row-gap-3">
          <div class="col-md-6">
            <div class="d-flex align-items-center">
              <span
                class="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative"
              >
                <img src="@/assets/img/user/user-01.jpg" alt="img" />
                <span class="verify-tick"><i class="isax isax-verify5"></i></span>
              </span>
              <div>
                <h5 class="mb-1 text-white d-inline-flex align-items-center">
                  Eugene Andre<router-link
                    to="/instructor/instructor-profile"
                    class="link-light fs-16 ms-2"
                    ><i class="isax isax-edit-2"></i
                  ></router-link>
                </h5>
                <p class="text-light">Instructor</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
              <router-link to="/courses/add-course" class="btn btn-white rounded-pill"
                >Add New Course</router-link
              >
              <router-link to="/students/student-dashboard" class="btn btn-secondary rounded-pill"
                >Student Dashboard</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <router-link to="/instructor-students/student-list" class="d-flex align-items-center mb-3"
        ><i class="isax isax-arrow-left me-1 fw-bold"></i>Back to List</router-link
      >
      <div class="row">
        <div class="col-lg-8">
          <div class="instructor-details-item1 mb-4">
            <div class="instructor-details">
              <div class="instructor-img">
                <a href="javascript:void(0);">
                  <img
                    src="@/assets/img/students/student-01.jpg"
                    alt="img"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="flex-fill">
                <div class="pb-3 border-bottom mb-3">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <h6 class="fs-18 fw-bold">
                      <a href="javascript:void(0);">Thompson Hicks</a>
                    </h6>
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <p>Joined on : 24 May 2024</p>
                  </div>
                  <div>
                    <p>
                      Hello! I'm Thompson Hicks. I'm passionate about developing
                      innovative software solutions, analyzing classic literature.
                    </p>
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                  <div class="d-flex align-items-center counts-details mb-0">
                    <div class="d-flex align-items-center me-4">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book5 text-primary me-1"></i>10 Courses</span
                      >
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2"
                      >
                        <i class="fa-brands fa-x-twitter"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="rounded-circle d-inline-flex align-items-center justify-content-center p-1 me-2"
                      >
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="javascript:void(0);"
                        class="rounded-circle d-inline-flex align-items-center justify-content-center"
                      >
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="about-me-card bg-white">
            <div class="about-me-body">
              <h6 class="page-title fs-18 fw-bold">About Me</h6>
              <p class="mb-2">
                Very well thought out and articulate communication. Clear milestones,
                deadlines and fast work. Patience. Infinite patience. No shortcuts. Even
                if the client is being careless. Some quick example text to build on the
                card title and bulk the card's content Moltin gives you platform.
              </p>
              <a
                href="javascript:void(0);"
                class="text-secondary text-decoration-underline fs-14"
                >Read More</a
              >
            </div>
          </div>

          <div class="education-card">
            <div class="education-body">
              <h6 class="fs-18 fw-bold page-title">Education</h6>
              <div class="education-flow">
                <div class="ps-4 pb-3 timeline-flow">
                  <div>
                    <h6 class="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                    <p>International University - (2004 - 2010)</p>
                  </div>
                </div>
                <div class="ps-4 pb-3 timeline-flow">
                  <div>
                    <h6 class="fs-16 mb-1">MCA - Master of Computer Application</h6>
                    <p>International University - (2010 - 2012)</p>
                  </div>
                </div>
                <div class="ps-4 timeline-flow">
                  <div>
                    <h6 class="mb-1">Design Communication Visual</h6>
                    <p>International University - (2012-2015)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="enrolled-courses-card mb-4 mb-lg-0">
            <div class="enrolled-courses-body">
              <div class="page-title">
                <h6 class="mb-0 fs-18 fw-bold">Enrolled Courses</h6>
              </div>
              <div class="course-carousal student-details-carousal">
                <Carousel :settings="settings" :breakpoints="breakpoints">
                  <Slide v-for="item in instructorDetails" :key="item.id">
                    <div class="course-instructor">
                      <div class="course-item course-item-three mx-2 mb-0">
                        <div
                          class="course-carousal-img position-relative overflow-hidden rounded-3 mb-3"
                        >
                          <router-link to="/details/course-details-1"
                            ><img
                              class="img-fluid rounded-3"
                              :src="require(`@/assets/img/course/${item.Image}`)"
                              alt="img"
                          /></router-link>
                          <div
                            class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                          >
                            <a class="like" href="#"
                              ><i class="isax isax-heart color-active"></i
                            ></a>
                          </div>
                        </div>
                        <div
                          class="d-flex flex-wrap align-items-center justify-content-between"
                        >
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-sm rounded-circle">
                              <img
                                class="img-fluid rounded-circle object-fit-cover"
                                :src="require(`@/assets/img/avatar/${item.AvatarImage}`)"
                                alt="img"
                              />
                            </div>
                            <p class="ms-2">
                              <router-link to="/pages-instructor/instructor-details">{{
                                item.Name
                              }}</router-link>
                            </p>
                          </div>
                          <span class="tag-btn">{{ item.Position }}</span>
                        </div>
                        <h5 class="mt-3 mb-2 text-truncate line-clamb-2">
                          <router-link to="/details/course-details-1">{{ item.Title }}</router-link>
                        </h5>
                        <div class="d-flex align-items-center">
                          <i class="ti ti-star-filled text-warning"></i>
                          <p class="ms-2">{{ item.Reviews }}</p>
                        </div>
                        <div
                          class="d-flex justify-content-between mt-3 align-items-center"
                        >
                          <h6 class="fs-16 text-secondary">{{ item.Amount }}</h6>
                          <router-link to="/course/course-grid" class="btn view-course-btn"
                            >View Course<i class="fs-8 fas fa-angle-right ms-2"></i
                          ></router-link>
                        </div>
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
        </div>

        <div class="col-lg-4">
          <div class="certification-card">
            <div class="certification-body">
              <h5 class="mb-3 fw-bold">Certifications</h5>
              <div class="d-flex align-items-center">
                <div class="certificate-img rounded-circle me-2">
                  <img
                    src="@/assets/img/certificates/certificate-01.svg"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
                <div class="certificate-img rounded-circle me-2">
                  <img
                    src="@/assets/img/certificates/certificate-02.svg"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
                <div class="certificate-img rounded-circle me-2">
                  <img
                    src="@/assets/img/certificates/certificate-03.svg"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
                <div class="certificate-img rounded-circle">
                  <img
                    src="@/assets/img/certificates/certificate-01.svg"
                    alt="img"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="contact-card border-0 mb-0">
            <div class="contact-details-body">
              <h5 class="mb-3 fw-bold">Contact Details</h5>
              <div class="d-flex align-items-center mb-4">
                <span
                  class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3"
                >
                  <i class="fa-regular fa-envelope"></i>
                </span>
                <div>
                  <h6 class="mb-0">Email</h6>
                  <p class="fs-14 mb-0">jennywilson@example.com</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <span
                  class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3"
                >
                  <i class="isax isax-location"></i>
                </span>
                <div>
                  <h6 class="mb-0">Address</h6>
                  <p class="fs-14 mb-0 text-truncate">
                    877 Ferry Street, Huntsville, Alabama
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <span
                  class="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3"
                >
                  <i class="isax isax-call"></i>
                </span>
                <div>
                  <h6 class="mb-0">Phone</h6>
                  <p class="fs-14 mb-0">+1(452) 125-6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Course</h4>
            <p class="mb-3">Are you sure you want to delete course?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                >Yes, Remove All</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import instructorDetails from "@/assets/json/instructor-details.json";

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
      instructorDetails: instructorDetails,
    };
  },
  setup() {
    return {
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
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 2,
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
