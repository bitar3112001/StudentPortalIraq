<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Quiz</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Quiz</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <instructor-header></instructor-header>
      <div class="row">
        <!-- Sidebar -->
        <instructor-sidebar></instructor-sidebar>
        <!-- /Sidebar -->
        <div class="col-lg-9">
          <div class="page-title d-flex align-items-center justify-content-between">
            <h5 class="fw-bold">Quiz</h5>
            <div>
              <a
                href="#"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#add_quiz"
                >Add Quiz</a
              >
            </div>
          </div>
          <div class="border rounded-2 p-3 mb-3">
            <div class="row align-items-center">
              <div class="col-md-8">
                <div>
                  <h6 class="mb-2">
                    <router-link to="/instructor/instructor-quiz-questions"
                      >Information About UI/UX Design Degree</router-link
                    >
                  </h6>
                  <div class="question-info d-flex align-items-center">
                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">
                      <i class="isax isax-message-question5 text-primary-soft me-2"></i>25
                      Questions
                    </p>
                    <p class="d-flex align-items-center fs-14 mb-0">
                      <i class="isax isax-clock5 text-secondary-soft me-2"></i>30 Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <router-link
                    to="/instructor/instructor-quiz-results"
                    class="text-info text-decoration-underline fs-12 fw-medium me-3"
                    >View Results</router-link
                  >
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-1 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_quiz"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a
                    href="#"
                    class="d-inline-flex fs-14 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-2 p-3 mb-3">
            <div class="row align-items-center gy-3">
              <div class="col-md-8">
                <div>
                  <h6 class="mb-2">
                    <router-link to="/instructor/instructor-quiz-questions"
                      >Learn JavaScript and Express to become a Expert</router-link
                    >
                  </h6>
                  <div class="question-info d-flex align-items-center">
                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">
                      <i class="isax isax-message-question5 text-primary-soft me-2"></i>15
                      Questions
                    </p>
                    <p class="d-flex align-items-center fs-14 mb-0">
                      <i class="isax isax-clock5 text-secondary-soft me-2"></i>25 Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <router-link
                    to="/instructor/instructor-quiz-results"
                    class="text-info text-decoration-underline fs-12 fw-medium me-3"
                    >View Results</router-link
                  >
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-1 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_quiz"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a
                    href="#"
                    class="d-inline-flex fs-14 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-2 p-3 mb-3">
            <div class="row align-items-center gy-3">
              <div class="col-md-8">
                <div>
                  <h6 class="mb-2">
                    <router-link to="/instructor/instructor-quiz-questions"
                      >Introduction to Python Programming</router-link
                    >
                  </h6>
                  <div class="question-info d-flex align-items-center">
                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">
                      <i class="isax isax-message-question5 text-primary-soft me-2"></i>22
                      Questions
                    </p>
                    <p class="d-flex align-items-center fs-14 mb-0">
                      <i class="isax isax-clock5 text-secondary-soft me-2"></i>15 Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <router-link
                    to="/instructor/instructor-quiz-results"
                    class="text-info text-decoration-underline fs-12 fw-medium me-3"
                    >View Results</router-link
                  >
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-1 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_quiz"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a
                    href="#"
                    class="d-inline-flex fs-14 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-2 p-3 mb-3">
            <div class="row align-items-center gy-3">
              <div class="col-md-8">
                <div>
                  <h6 class="mb-2">
                    <router-link to="/instructor/instructor-quiz-questions"
                      >Build Responsive Websites with HTML5 and CSS3</router-link
                    >
                  </h6>
                  <div class="question-info d-flex align-items-center">
                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">
                      <i class="isax isax-message-question5 text-primary-soft me-2"></i>30
                      Questions
                    </p>
                    <p class="d-flex align-items-center fs-14 mb-0">
                      <i class="isax isax-clock5 text-secondary-soft me-2"></i>50 Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <router-link
                    to="/instructor/instructor-quiz-results"
                    class="text-info text-decoration-underline fs-12 fw-medium me-3"
                    >View Results</router-link
                  >
                  <a href="#" class="d-inline-flex fs-14 me-1 action-icon"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a href="#" class="d-inline-flex fs-14 action-icon"
                    ><i class="isax isax-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="border rounded-2 p-3 mb-3 mb-0">
            <div class="row align-items-center gy-3">
              <div class="col-md-8">
                <div>
                  <h6 class="mb-2">
                    <router-link to="/instructor/instructor-quiz-questions"
                      >Information About Photoshop Design Degree</router-link
                    >
                  </h6>
                  <div class="question-info d-flex align-items-center">
                    <p class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0">
                      <i class="isax isax-message-question5 text-primary-soft me-2"></i>20
                      Questions
                    </p>
                    <p class="d-flex align-items-center fs-14 mb-0">
                      <i class="isax isax-clock5 text-secondary-soft me-2"></i>20 Minutes
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-end mt-2 mt-md-0">
                  <router-link
                    to="/instructor/instructor-quiz-results"
                    class="text-info text-decoration-underline fs-12 fw-medium me-3"
                    >View Results</router-link
                  >
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-1 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_quiz"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a
                    href="#"
                    class="d-inline-flex fs-14 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="isax isax-trash"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
  <instructor-quiz-modal></instructor-quiz-modal>
</template>
