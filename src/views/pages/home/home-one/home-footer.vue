<template>
  <!-- Footer -->
  <footer class="footer footer-one">
    <div class="footer-top">
      <div class="container">
        <div class="row row-gap-4">
          <div class="col-lg-4">
            <div class="footer-about">
              <div class="footer-logo">
                <img src="@/assets/img/logo-white.svg" alt="" />
              </div>
              <p>
                Platform designed to help organizations, educators, and learners manage,
                deliver, and track learning and training activities.
              </p>
              <div class="d-flex align-items-center">
                <a href="#" class="me-2"
                  ><img src="@/assets/img/icon/appstore.svg" alt=""
                /></a>
                <a href="#"><img src="@/assets/img/icon/googleplay.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="row row-gap-4">
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">Support</h5>
                  <ul>
                    <li><router-link to="/course/course-grid">Education</router-link></li>
                    <li>
                      <router-link to="/courses/add-course">Enroll Course</router-link>
                    </li>
                    <li><a href="javscript:void(0);">Orders</a></li>
                    <li><router-link to="/pages/pricing-plan">Payments</router-link></li>
                    <li><router-link to="/blog-layouts/blog-grid">Blogs</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">About</h5>
                  <ul>
                    <li>
                      <router-link to="/category/course-category">Categories</router-link>
                    </li>
                    <li><router-link to="/course/course-list">Courses</router-link></li>
                    <li><router-link to="/pages/about-us">About Us</router-link></li>
                    <li><router-link to="/pages/faq">Faq</router-link></li>
                    <li><router-link to="/pages/contact-us">Contacts</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">Useful Links</h5>
                  <ul>
                    <li><a href="javascript:void(0);">Our values</a></li>
                    <li><a href="javascript:void(0);">Our advisory board</a></li>
                    <li><a href="javascript:void(0);">Our partners</a></li>
                    <li><a href="javascript:void(0);">Become a partner</a></li>
                    <li><a href="javascript:void(0);">Work at Future Learn</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="footer-widget footer-contact">
              <h5 class="footer-title">Subscribe Newsletter</h5>
              <div class="footer-newsletter">
                <p>Sign up to get updates & news.</p>
                <form action="#">
                  <div class="subscribe-form">
                    <span>
                      <i class="isax isax-message-text"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <button type="submit" class="btn btn-secondary btn-xl w-100">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row row-gap-2">
          <div class="col-lg-5">
            <div class="text-center text-lg-start">
              <p>
                Copyright 2025 © <span class="text-secondary">DreamsLMS</span>. All right
                reserved.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <ul class="d-flex align-items-center justify-content-center footer-link">
              <li>
                <router-link to="/pages/terms-and-conditions"
                  >Terms & Conditions</router-link
                >
              </li>
              <li>
                <router-link to="/pages/privacy-policy">Privacy Policy</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <div class="social-icon">
              <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- /Footer -->
</template>
