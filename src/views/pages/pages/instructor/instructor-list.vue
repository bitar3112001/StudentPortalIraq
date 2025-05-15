<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Instructor List</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Instructor List</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- Course -->
  <div class="instructor-list">
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
                        id="newlyinone"
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
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-61.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Rolands Granger</router-link>
                    </h6>
                    <span class="designation">Developer</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.9 (200 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front end and back end languages, responsive frameworks, databases, and
                  best code practices.
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    12+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    169hr 20min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    50 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Web Design
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Development
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Re-Design
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-62.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite selected" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Lisa Lopezr</router-link>
                    </h6>
                    <span class="designation">Finance</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.4 (130 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front end....
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    22+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    15hr 06min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    22 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Accounting
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Commerce
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-63.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite selected" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Charles Ruizr</router-link>
                    </h6>
                    <span class="designation">Cloud Engineer</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.4 (130 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front end
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    16+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    2hr 25min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    10 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    DevOps
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-44.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Rogerina Grogan</router-link>
                    </h6>
                    <span class="designation">Vocational</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.6 (180 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front end
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    06+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    19hr 30min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    50 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Language
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Voice
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-45.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Ivana Tow</router-link>
                    </h6>
                    <span class="designation">Corporate Trainer</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.2 (210 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    25+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    4hr 20min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    50 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Professional
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Training
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-46.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite selected" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Kevin Leonard</router-link>
                    </h6>
                    <span class="designation">Developer</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.5 (140 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    11+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    7hr 10min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    21 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Web Design
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Functionality
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Modules
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-item instructor-item-seven">
            <div class="instructor-img">
              <router-link to="/pages-instructor/instructor-details">
                <img src="@/assets/img/user/user-47.jpg" alt="img" class="img-fluid" />
              </router-link>
              <div
                class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2"
              >
                <a class="favourite" href="#"
                  ><i class="isax isax-heart color-active"></i
                ></a>
              </div>
            </div>
            <div class="instructor-content flex-fill">
              <div class="pb-3 border-bottom mb-3">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1"
                >
                  <div>
                    <h6 class="title">
                      <router-link to="/pages-instructor/instructor-details">Jeanette Dulaneyr</router-link>
                    </h6>
                    <span class="designation">Technical Traine</span>
                  </div>
                  <div>
                    <p class="rating">
                      <i class="fas fa-star me-1"></i>4.7 (220 Reviews)
                    </p>
                  </div>
                </div>
                <p>
                  I am a web developer with a vast array of knowledge in many different
                  front
                </p>
              </div>
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div
                  class="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details"
                >
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-book-saved5 fs-16 text-secondary me-2"></i
                    ></span>
                    12+ Lesson
                  </span>
                  <span class="d-flex align-items-center me-4">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-timer-start5 fs-16 text-primary me-2"></i
                    ></span>
                    9hr 30min
                  </span>
                  <span class="d-flex align-items-center">
                    <span class="d-flex align-items-center"
                      ><i class="isax isax-profile-2user5 fs-16 text-secondary me-2"></i
                    ></span>
                    32 Students
                  </span>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    IT
                  </div>
                  <div
                    class="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded"
                  >
                    Development
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- /pagination -->
          <div class="row align-items-center mt-sm-4 mt-md-5 mt-3">
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
    <!-- /Course -->
  </div>
  <!--Footer -->
  <footer-two></footer-two>
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
