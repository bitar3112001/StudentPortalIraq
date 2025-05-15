<template>
  <!-- Footer -->
  <footer class="footer footer-three">
    <!-- Footer Top -->
    <div class="footer-top aos" data-aos="fade-up">
      <div class="container">
        <div class="row justify-content-between row-gap-4">
          <div class="col-lg-4 col-md-12">
            <!-- Footer Widget -->
            <div class="footer-widget footer-about">
              <div class="footer-logo">
                <img src="@/assets/img/logo-white.svg" alt="logo" />
              </div>
              <div class="footer-about-content">
                <p>
                  Platform designed to help organizations, educators, and learners manage,
                  deliver, and track learning and training activities.
                </p>
              </div>
              <div class="d-flex align-items-center gap-2 flex-wrap">
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/appstore.svg" alt="" class="img-fluid"
                /></a>
                <a href="javascript:void(0);"
                  ><img src="@/assets/img/icons/googleplay.svg" alt="" class="img-fluid"
                /></a>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-8">
            <div class="row row-gap-4">
              <div class="col-lg-3 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-menu">
                  <h6 class="footer-title">Support</h6>
                  <ul>
                    <li><router-link to="/course/course-grid">Education</router-link></li>
                    <li>
                      <router-link to="/courses/add-course">Enroll a Course</router-link>
                    </li>
                    <li><router-link to="/register">Orders</router-link></li>
                    <li><router-link to="/pages/pricing-plan">Payments</router-link></li>
                    <li><router-link to="/pages/contact-us">Contact Us</router-link></li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-menu">
                  <h6 class="footer-title">About</h6>
                  <ul>
                    <li>
                      <router-link to="/category/course-category">Categories</router-link>
                    </li>
                    <li>
                      <router-link to="/category/course-category">Services</router-link>
                    </li>
                    <li><router-link to="/pages/about-us">About Us</router-link></li>
                    <li><router-link to="/pages/faq">FAQ</router-link></li>
                    <li>
                      <router-link to="/blog-layouts/blog-3-grid">Blog</router-link>
                    </li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-menu">
                  <h6 class="footer-title">Useful Links</h6>
                  <ul>
                    <li><a href="javascript:void(0);">Our values</a></li>
                    <li><a href="javascript:void(0);">Advisory board</a></li>
                    <li><a href="javascript:void(0);">Our partners</a></li>
                    <li><a href="javascript:void(0);">Become a partner</a></li>
                    <li><a href="javascript:void(0);">Future Learn</a></li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>

              <div class="col-lg-3 col-md-6">
                <!-- Footer Widget -->
                <div class="footer-widget footer-contact">
                  <h6 class="footer-title">Contact Info</h6>
                  <ul>
                    <li>
                      <div class="contact-infos">
                        <span>Phone Number</span>
                        <p>310-437-2766</p>
                      </div>
                    </li>
                    <li>
                      <div class="contact-infos">
                        <span>Mail Address</span>
                        <p>contact@example.com</p>
                      </div>
                    </li>
                    <li>
                      <div class="contact-infos">
                        <span>Address</span>
                        <p>706 Campfire Ave. Meriden, CT</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- /Footer Widget -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <!-- Copyright -->
        <div class="row row-gap-3">
          <div class="col-md-4">
            <div class="copyright-text">
              <p>
                Copyright 2025 © <a href="javascript:void(0);">DreamsLMS</a>. All right
                reserved.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex align-items-center justify-content-center gap-2">
              <a href="javascript:void(0);">
                <img src="@/assets/img/icons/fb.svg" alt="facebook" class="img-fluid" />
              </a>
              <a href="javascript:void(0);">
                <img
                  src="@/assets/img/icons/instagram.svg"
                  alt="facebook"
                  class="img-fluid"
                />
              </a>
              <a href="javascript:void(0);">
                <img src="@/assets/img/icons/be.svg" alt="facebook" class="img-fluid" />
              </a>
              <a href="javascript:void(0);">
                <img
                  src="@/assets/img/icons/linkedin.svg"
                  alt="facebook"
                  class="img-fluid"
                />
              </a>
              <a href="javascript:void(0);">
                <img src="@/assets/img/icons/x.svg" alt="facebook" class="img-fluid" />
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="privacy-link">
              <router-link to="/pages/terms-and-conditions" class="mb-0"
                >Terms & Policy</router-link
              >
              <router-link to="/pages/privacy-policy">Privacy Policy</router-link>
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
