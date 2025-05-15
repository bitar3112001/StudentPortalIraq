<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Instructor Grid</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Instructor Grid</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- Instructor -->
  <section class="course-content">
    <div class="container">
      <div class="row align-items-baseline">
        <pagesinstructor-sidebar></pagesinstructor-sidebar>
        <div class="col-lg-9">
          <!-- Filter -->
          <div class="showing-list mb-4">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <div class="show-result text-center text-lg-start">
                  <h6 class="fw-medium">Showing 1-9 of 50 results</h6>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="show-filter add-course-info">
                  <form action="#">
                    <div
                      class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0"
                    >
                      <div class="view-icons mb-2 mb-sm-0">
                        <router-link
                          to="/pages-instructor/instructor-grid"
                          class="grid-view"
                          ><i class="feather-grid"></i
                        ></router-link>
                        <router-link
                          to="/pages-instructor/instructor-list"
                          class="list-view"
                          ><i class="isax isax-task"></i
                        ></router-link>
                      </div>
                      <vue-select
                        :options="NewlyInst"
                        id="newlyinst"
                        placeholder="Newly Published"
                      />

                      <div class="search-group ms-2">
                        <i class="feather-search"></i>
                        <input type="text" class="form-control" placeholder="Search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- /Filter -->
          <div class="row course-list-cover">
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-61.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <span class="verify">
                      <img
                        src="@/assets/img/icons/verify-icon.svg"
                        alt="img"
                        class="img-fluid"
                      />
                    </span>
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.9 (200 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Rolands Granger</router-link>
                    </h3>
                    <span class="designation">Developer</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >12+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                        >169hr 20min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-62.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.4 (130 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Lisa Lopez</router-link>
                    </h3>
                    <span class="designation">Finance</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 me-2 fs-16 text-secondary"></i
                        >22+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 me-2 fs-16 text-primary"></i
                        >15hr 06min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-63.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.5 (120 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Charles Ruiz</router-link>
                    </h3>
                    <span class="designation">Cloud Engineer</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >16+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>2hr
                        25min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-44.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.6 (180 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Rogerina Grogan</router-link>
                    </h3>
                    <span class="designation">Vocational</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >06+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                        >19hr 30min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-45.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.2 (210 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Ivana Tow</router-link>
                    </h3>
                    <span class="designation">Corporate Trainer</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >25+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>4hr
                        20min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-46.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.5 (140 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Kevin Leonard</router-link>
                    </h3>
                    <span class="designation">Developer</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >11+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>7hr
                        10min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-47.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.3 (190 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">David Roccoz</router-link>
                    </h3>
                    <span class="designation">Sports Coach</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >04+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>1hr
                        30min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-48.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.3 (190 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Jeanette Dulaney</router-link>
                    </h3>
                    <span class="designation">Technical Traine</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >08+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>4hr
                        35min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex">
              <div class="instructor-item instructor-item-six flex-fill">
                <div class="instructors-img">
                  <router-link to="/pages-instructor/instructor-details" tabindex="0">
                    <img
                      class="img-fluid"
                      src="@/assets/img/user/user-49.jpg"
                      alt="img"
                    />
                  </router-link>
                  <div
                    class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
                  >
                    <a href="javascript:void(0);" class="favourite ms-auto" tabindex="0">
                      <i class="isax isax-heart"></i>
                    </a>
                  </div>
                </div>
                <div class="instructor-content">
                  <div>
                    <p class="rating mb-2">
                      <i class="fas fa-star me-1"></i>4.3 (190 Reviews)
                    </p>
                    <h3 class="title mb-2">
                      <router-link to="/pages-instructor/instructor-details">Debran Andrew</router-link>
                    </h3>
                    <span class="designation">Health and Wellness</span>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center instructor-bottom"
                  >
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                        >08+ Lesson</span
                      >
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="d-flex align-items-center"
                        ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i>4hr
                        35min</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /pagination -->
          <div class="row align-items-center">
            <div class="col-md-2">
              <p class="pagination-text">Page 1 of 2</p>
            </div>
            <div class="col-md-10">
              <ul
                class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0"
              >
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
    </div>
  </section>
  <!-- /Instructor -->
</template>
<script>
export default {
  data() {
    return {
      NewlyInst: ["Newly Published", "Trending Courses", "Top Rated", "Free Courses"],
    };
  },
};
</script>
