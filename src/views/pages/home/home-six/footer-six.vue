<template>
  <!-- Footer -->
  <footer class="footer footer-six">
    <!-- Footer Top -->
    <div class="footer-top-five">
      <div class="container">
        <div class="row row-gap-3">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <!-- Footer Widget -->
            <div class="footer-contact footer-menu-five">
              <h5 class="footer-title footer-title-five">Get in touch</h5>
              <div class="footer-contact-info">
                <div class="footer-address">
                  <h6>Phone Number</h6>
                  <p>310-437-2766</p>
                </div>
                <div class="footer-address">
                  <h6>Mail Address</h6>
                  <p>contact@example.com</p>
                </div>
                <div class="footer-address">
                  <h6>Address</h6>
                  <p>706 Campfire Ave. Meriden, CT</p>
                </div>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-3 col-md-3 col-sm-12">
            <!-- Footer Widget -->
            <div class="footer-menu footer-menu-five">
              <h5 class="footer-title footer-title-five">
                <i class="fa-sharp fa-solid fa-dash"></i>For Instructor
              </h5>
              <ul>
                <li>
                  <router-link to="/instructor/instructor-profile">Profile</router-link>
                </li>
                <li><router-link to="/">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li><router-link to="/pages-instructor/instructor-list">Instructor</router-link></li>
                <li>
                  <router-link to="/instructor/instructor-dashboard">
                    Dashboard</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-2 col-md-3 col-sm-12">
            <!-- Footer Widget -->
            <div class="footer-menu footer-menu-five">
              <h5 class="footer-title footer-title-five">For Student</h5>
              <ul>
                <li><router-link to="/students/student-profile">Profile</router-link></li>
                <li><router-link to="/">Login</router-link></li>
                <li><router-link to="/register">Register</router-link></li>
                <li>
                  <router-link to="/instructor-students/student-list"
                    >Student</router-link
                  >
                </li>
                <li>
                  <router-link to="/students/student-dashboard"> Dashboard</router-link>
                </li>
              </ul>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-4 col-md-6 col-12">
            <div class="footer-menu">
              <h5 class="footer-title footer-title-five mb-1">Subscription</h5>
              <p class="fs-14 text-light">Sign up to get updates & news.</p>
              <!-- Footer Widget -->
              <div class="footer-widget-five mb-3">
                <div class="box-form-newsletter">
                  <form class="form-newsletter">
                    <input
                      class="input-newsletter"
                      type="email"
                      placeholder="Enter Email Address"
                    />
                    <button class="btn btn-secondary font-heading icon-send-letter">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div class="d-flex align-items-center gap-3 flex-wrap">
                <a href="javascript:void(0);">
                  <img src="@/assets/img/icon/app-store.svg" alt="img" />
                </a>
                <a href="javascript:void(0);">
                  <img src="@/assets/img/icon/google-play.svg" alt="img" />
                </a>
              </div>
              <!-- /Footer Widget -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom footer-bottom-six">
      <div class="container">
        <!-- Copyright -->
        <div class="copyright-five">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="copyright-text">
                <p>&copy; 2025 DreamsLMS. All rights reserved.</p>
              </div>
            </div>
            <div class="col-md-6">
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
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>
