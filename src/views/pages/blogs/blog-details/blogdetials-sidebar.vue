<template>
  <div class="col-lg-4 sidebar-left mt-4 mt-lg-0 theiaStickySidebar">
    <div class="stickysidebar">
      <!-- Search -->
      <div class="search-widget blog-search blog-widget">
        <div>
          <h5 class="mb-3 fs-18">Search</h5>
          <form class="search-form">
            <div class="position-relative">
              <input type="text" placeholder="Search..." class="form-control" />
              <button type="submit" class="search-btn">
                <i class="isax isax-search-normal-1"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /Search -->

      <!-- Categories -->
      <div class="blog-widget">
        <h5 class="fs-18 mb-3">Categories</h5>
        <div class="categories-list">
          <h6>
            <a href="javascript:void(0);"
              ><i class="isax isax-arrow-right-3 fs-14 text-secondary fw-bold"></i>
              Business<span class="float-end">04</span>
            </a>
          </h6>
          <h6>
            <a href="javascript:void(0);"
              ><i class="isax isax-arrow-right-3 fs-14 text-secondary fw-bold"></i>
              Education<span class="float-end">03</span>
            </a>
          </h6>
          <h6>
            <a href="javascript:void(0);"
              ><i class="isax isax-arrow-right-3 fs-14 text-secondary fw-bold"></i>
              Graphics Design<span class="float-end">14</span>
            </a>
          </h6>
          <h6>
            <a href="javascript:void(0);"
              ><i class="isax isax-arrow-right-3 fs-14 text-secondary fw-bold"></i>
              Programming<span class="float-end">12</span>
            </a>
          </h6>
          <h6>
            <a href="javascript:void(0);"
              ><i class="isax isax-arrow-right-3 fs-14 text-secondary fw-bold"></i> Web
              Design<span class="float-end">15</span></a
            >
          </h6>
        </div>
      </div>
      <!-- /Categories -->

      <!-- Latest Posts -->
      <div class="blog-widget">
        <h5 class="fs-18 mb-3">Recent Blogs</h5>
        <ul class="recent-blog-list">
          <li>
            <div class="post-thumb">
              <router-link to="/blogs/blog-details">
                <img
                  class="img-fluid"
                  src="@/assets/img/blog/recent-blog-1.jpg"
                  alt="Img"
                />
              </router-link>
            </div>
            <div class="post-info">
              <h6 class="text-truncate line-clamb-2">
                <router-link to="/blogs/blog-details"
                  >Learn Webs Applications Development from Experts</router-link
                >
              </h6>
              <p>
                <img
                  class="img-fluid me-1"
                  src="@/assets/img/icons/calendar2.svg"
                  alt="Img"
                />20 Apr 2024
              </p>
            </div>
          </li>
          <li>
            <div class="post-thumb">
              <router-link to="/blogs/blog-details">
                <img
                  class="img-fluid"
                  src="@/assets/img/blog/recent-blog-2.jpg"
                  alt="Img"
                />
              </router-link>
            </div>
            <div class="post-info">
              <h6 class="text-truncate line-clamb-2">
                <router-link to="/blogs/blog-details"
                  >Expand Your Career Opportunities With Python</router-link
                >
              </h6>
              <p>
                <img
                  class="img-fluid me-1"
                  src="@/assets/img/icons/calendar2.svg"
                  alt="Img"
                />16 Apr 2024
              </p>
            </div>
          </li>
          <li class="mb-0">
            <div class="post-thumb">
              <router-link to="/blogs/blog-details">
                <img
                  class="img-fluid"
                  src="@/assets/img/blog/recent-blog-3.jpg"
                  alt="Img"
                />
              </router-link>
            </div>
            <div class="post-info">
              <h6 class="text-truncate line-clamb-2">
                <router-link to="/blogs/blog-details"
                  >Learn Webs Applications Development from Experts</router-link
                >
              </h6>
              <p>
                <img
                  class="img-fluid me-1"
                  src="@/assets/img/icons/calendar2.svg"
                  alt="Img"
                />12 Apr 2024
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- /Latest Posts -->

      <!-- Tags -->
      <div class="blog-widget">
        <h5 class="fs-18 mb-3">Latest Tags</h5>
        <div class="card-body">
          <ul class="latest-tags">
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >HTML</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Javascript</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Benefits</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Web Design</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Programming</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Career Growth</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0);"
                class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                >Guidelines</a
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- /Tags -->
    </div>
  </div>
</template>
