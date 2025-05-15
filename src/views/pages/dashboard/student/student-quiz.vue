<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">My Quiz Attempts</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">My Quiz Attempts</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <!-- profile box -->
      <student-header></student-header>
      <!-- profile box -->
      <div class="row">
        <!-- sidebar -->
        <student-sidebar></student-sidebar>
        <!-- sidebar -->
        <div class="col-lg-9">
          <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Quiz Attempts</h5>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 mb-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >Information About UI/UX Design Degree</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 05</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >Learn JavaScript and Express to become a Expert</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 10</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >Introduction to Python Programming</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 08</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >Build Responsive Websites with HTML5 and CSS3</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 05</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 pb-3 mb-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >Information About Photoshop Design Degree</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 10</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <div
            class="d-flex align-items-center justify-content-between border p-3 rounded-2"
          >
            <div>
              <h6 class="mb-1">
                <router-link to="/students/student-quiz-questions"
                  >C# Developers Double Your Coding with Visual Studio</router-link
                >
              </h6>
              <p class="fs-14">Number of Questions : 07</p>
            </div>
            <div>
              <router-link to="/students/student-quiz-questions" class="arrow-next"
                ><i class="isax isax-arrow-right-1"></i
              ></router-link>
            </div>
          </div>
          <!-- /pagination -->
          <div class="row align-items-center mt-3">
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
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
</template>
