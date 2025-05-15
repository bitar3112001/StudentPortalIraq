<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Blog 1 Grid</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Blog 1 Grid</li>
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
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-16.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
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
                <div
                  class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                >
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
                      <p>20 Apr 2024</p>
                    </li>
                    <li>
                      <img class="me-1" src="@/assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-17.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >The Complete JavaScript Course for Beginners</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Dive into the world of JavaScript with our complete beginner-friendly
                course! Learn essential concepts...
              </p>
              <div class="blog-info">
                <div
                  class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                >
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-15.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >Donald Vesely</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>08 Apr 2024</p>
                    </li>
                    <li>
                      <img class="me-1" src="@/assets/img/icons/tag.svg" alt="img" />
                      <p>Programming, Web Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="blog">
            <div class="blog-image">
              <router-link to="/blogs/blog-details">
                <img class="img-fluid" src="@/assets/img/blog/blog-18.jpg" alt="img" />
              </router-link>
            </div>
            <div class="blog-item">
              <h5 class="mb-2">
                <router-link to="/blogs/blog-details"
                  >Revolutionize Learning with a Modern LMS</router-link
                >
              </h5>
              <p class="text-truncate line-clamb-2">
                Discover how a Learning Management System (LMS) can transform education
                and corporate training by ...
              </p>
              <div class="blog-info">
                <div
                  class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                >
                  <div class="d-flex align-items-center user-profile">
                    <router-link to="/pages-instructor/instructor-details" class="user-img"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-05.jpg"
                        alt="img"
                    /></router-link>
                    <router-link to="/pages-instructor/instructor-details" class="user-name"
                      >James Barnes</router-link
                    >
                  </div>
                  <ul class="d-flex align-items-center flex-wrap gap-2">
                    <li>
                      <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                      <p>23 Feb 2024</p>
                    </li>
                    <li>
                      <img class="me-1" src="@/assets/img/icons/tag.svg" alt="img" />
                      <p>Modern Learning, Innovative</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /pagination -->
      <div class="row align-items-center">
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
