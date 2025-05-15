<template>
  <!-- Footer -->
  <footer class="footer footer-five">
    <!-- Footer Top -->
    <div class="footer-three-top" data-aos="fade-up">
      <div class="container">
        <div class="footer-three-top-content">
          <div class="row align-items-center gy-4">
            <div class="col-lg-6">
              <!-- Footer Widget -->
              <div class="footer-widget-three footer-about">
                <div class="footer-three-logo">
                  <img class="img-fluid" src="@/assets/img/logo-white.svg" alt="logo" />
                </div>
                <div class="footer-three-about">
                  <p>
                    Platform designed to help organizations, educators, and learners
                    manage,
                  </p>
                </div>
                <div class="box-form-newsletter">
                  <form class="form-newsletter">
                    <input
                      class="input-newsletter"
                      type="text"
                      placeholder="Enter your email here"
                    />
                    <button class="btn btn-secondary font-heading icon-send-letter">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <!-- /Footer Widget -->
            </div>
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6 d-lg-flex justify-content-end">
                  <!-- Footer Widget -->
                  <div class="footer-widget-three footer-menu-three footer-three-right">
                    <h5 class="footer-three-title">For Instructor</h5>
                    <ul>
                      <li>
                        <router-link to="/instructor/instructor-profile"
                          >Profile</router-link
                        >
                      </li>
                      <li><router-link to="/">Login</router-link></li>
                      <li><router-link to="/register">Register</router-link></li>
                      <li>
                        <router-link to="/pages-instructor/instructor-list"
                          >Instructor</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/instructor/instructor-dashboard">
                          Dashboard</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- /Footer Widget -->
                </div>
                <div class="col-md-6 d-lg-flex justify-content-end">
                  <!-- Footer Widget -->
                  <div class="footer-widget-three footer-menu-three">
                    <h5 class="footer-three-title">For Student</h5>
                    <ul>
                      <li>
                        <router-link to="/students/student-profile">Profile</router-link>
                      </li>
                      <li><router-link to="/">Login</router-link></li>
                      <li><router-link to="/register">Register</router-link></li>
                      <li>
                        <router-link to="/instructor-students/student-list"
                          >Student</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/students/student-dashboard">
                          Dashboard</router-link
                        >
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
    </div>
    <!-- /Footer Top -->

    <div class="footer-bottom-five">
      <div class="container">
        <!-- Copyright -->
        <div class="row row-gap-3">
          <div class="col-lg-4">
            <div class="copyright-text">
              <p>
                Copyright 2025 © <a href="javascript:void(0);">DreamsLMS</a>. All right
                reserved.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="privacy-link">
              <router-link to="/pages/terms-and-conditions" class="mb-0"
                >Terms &amp; Policy</router-link
              >
              <router-link to="/pages/privacy-policy">Privacy Policy</router-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="social-icon">
              <a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-youtube"></i></a>
              <a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
  </footer>
  <!-- /Footer -->
</template>
