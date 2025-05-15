<template>
  <!-- Latest Blogs -->
  <section class="blogs-section-five">
    <div class="container">
      <div class="section-header section-header-six text-center" data-aos="fade-down">
        <h2>Latest Blogs</h2>
        <p>Follow the latest and most useful articles on that student's blog</p>
      </div>
      <div class="home-five-blog">
        <div class="row">
          <div class="col-lg-4">
            <div class="blog-card">
              <div class="blog-img">
                <router-link to="/blogs/blog-details"
                  ><img src="@/assets/img/blog/blog-22.jpg" alt="img" class="img-fluid"
                /></router-link>
              </div>
              <div class="blog-content">
                <h5>
                  <router-link to="/blogs/blog-details"
                    >Mastering Programming with a Technical Mentor</router-link
                  >
                </h5>
                <p>
                  Learning to code can be overwhelming, but a mentor can make the journey
                  smoother....
                </p>
                <div class="blog-user d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar me-2">
                      <img
                        src="@/assets/img/user/user-42.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                    <p class="mb-0 d-flex align-items-center">
                      by
                      <a
                        href="javascript:void(0);"
                        class="link-info text-decoration-underline ms-1"
                        >Reni Sarow</a
                      >
                    </p>
                  </div>
                  <p class="d-flex align-items-center">
                    <i class="isax isax-calendar-1 text-gray-7 me-2"></i>09 Aug 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-card">
              <div class="blog-img">
                <router-link to="/blogs/blog-details"
                  ><img src="@/assets/img/blog/blog-23.jpg" alt="img" class="img-fluid"
                /></router-link>
              </div>
              <div class="blog-content">
                <h5>
                  <router-link to="/blogs/blog-details"
                    >How to Level Up Your Coding Skills with the Help of a
                    Mentor</router-link
                  >
                </h5>
                <p>
                  Whether you're a beginner or an advanced coder, this blog will explore
                  how....
                </p>
                <div class="blog-user d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar me-2">
                      <img
                        src="@/assets/img/user/user-36.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                    <p class="mb-0 d-flex align-items-center">
                      by
                      <a
                        href="javascript:void(0);"
                        class="link-info text-decoration-underline ms-1"
                        >Chris Daniel</a
                      >
                    </p>
                  </div>
                  <p class="d-flex align-items-center">
                    <i class="isax isax-calendar-1 text-gray-7 me-2"></i>15 Jul 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-card">
              <div class="blog-img">
                <router-link to="/blogs/blog-details"
                  ><img src="@/assets/img/blog/blog-24.jpg" alt="img" class="img-fluid"
                /></router-link>
              </div>
              <div class="blog-content">
                <h5>
                  <router-link to="/blogs/blog-details"
                    >Navigating the Tech World: The Ultimate Guide</router-link
                  >
                </h5>
                <p>
                  The tech industry is vast and ever-changing, but a mentor can help you
                  stay ahead.....
                </p>
                <div class="blog-user d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="avatar me-2">
                      <img
                        src="@/assets/img/user/user-53.jpg"
                        alt="img"
                        class="img-fluid"
                      />
                    </a>
                    <p class="mb-0 d-flex align-items-center">
                      by
                      <a
                        href="javascript:void(0);"
                        class="link-info text-decoration-underline ms-1"
                        >Andrew</a
                      >
                    </p>
                  </div>
                  <p class="d-flex align-items-center">
                    <i class="isax isax-calendar-1 text-gray-7 me-2"></i>15 Jan 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <router-link to="/blog-layouts/blog-2-grid" class="btn btn-xl btn-primary mt-3"
            >See More Blogs</router-link
          >
        </div>
      </div>
    </div>
  </section>
  <!-- Latest Blogs -->
</template>
