<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Blog Masonry</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Blog Masonry</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- blog -->
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-7.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Education</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Learn Web App Development from Experts in 2024</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Master the art of web application development with expert-led courses that
                cover the latest tools, fram...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-52.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >John Miller</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>23 Apr 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-11.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Programming Content Guideline For Beginners</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Kickstart your programming journey with beginner-friendly guidelines
                designed to simplify coding ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-06.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Lewis Devine</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>10 Mar 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-26.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Education</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Revolutionize Learning with a Modern LMS</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                An LMS streamlines training and development with centralized resources,
                progress tracking, and flexible..
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-08.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Francis Bishop</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Feb 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-27.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Expand Your Career Opportunities With Python</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Unlock limitless career opportunities by mastering Python, one of the most
                versatile and in-demand ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-01.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Cedric Glenn</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>20 Apr 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-10.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Technical</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Learn Mobile Applications Development from Experts</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Elevate your skills with expert-led training in mobile application
                development! Learn to design, develop ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-02.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >John Reyes</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>04 Apr 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-14.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Complete PHP Programming Career Guideline</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Master PHP programming with our comprehensive career guideline! Learn the
                fundamentals, explore ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-03.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Donald Vesely</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>24 Mar 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-10.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Complete PHP Programming Career Guideline</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Master PHP programming with our comprehensive career guideline! Learn the
                fundamentals, explore ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-09.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Donald Vesely</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>24 Mar 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-28.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Complete PHP Programming Career Guideline</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Master PHP programming with our comprehensive career guideline! Learn the
                fundamentals, explore ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-03.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Donald Vesely</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>24 Mar 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-12.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <span class="badge bg-success mb-2">Guides</span>
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Complete PHP Programming Career Guideline</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Master PHP programming with our comprehensive career guideline! Learn the
                fundamentals, explore ...
              </p>
              <div class="blog-info">
                <div class="d-flex align-items-center flex-wrap justify-content-between">
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-03.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Donald Vesely</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>24 Mar 2024</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /pagination -->
      <div class="row align-items-center mt-2">
        <div class="col-md-12">
          <ul class="pagination justify-content-center">
            <li class="page-item prev">
              <a class="page-link" href="javascript:void(0)" tabindex="-1"
                ><i class="fas fa-angle-left"></i
              ></a>
            </li>
            <li class="page-item first-page active">
              <a class="page-link" href="javascript:void(0)">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0)">3</a>
            </li>
            <li class="page-item next">
              <a class="page-link" href="javascript:void(0)"
                ><i class="fas fa-angle-right"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /pagination -->
    </div>
  </div>
  <!-- blog -->
  <footer-two></footer-two>
</template>
