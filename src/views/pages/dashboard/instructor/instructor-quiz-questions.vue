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
          <div class="card bg-light">
            <div class="card-body">
              <div class="row align-items-center gy-3">
                <div class="col-xl-8">
                  <div>
                    <div class="d-sm-flex align-items-center">
                      <div class="quiz-img me-3 mb-2 mb-sm-0">
                        <img src="@/assets/img/students/quiz.jpg" alt="" />
                      </div>
                      <div>
                        <h5 class="mb-2">
                          <a href="#">Information About UI/UX Design Degree</a>
                        </h5>
                        <div class="question-info d-flex align-items-center">
                          <p
                            class="d-flex align-items-center fs-14 me-2 pe-2 border-end mb-0"
                          >
                            <i
                              class="isax isax-message-question5 text-primary-soft me-2"
                            ></i
                            >25 Questions
                          </p>
                          <p class="d-flex align-items-center fs-14 mb-0">
                            <i class="isax isax-clock5 text-secondary-soft me-2"></i>30
                            Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <router-link
                      to="/instructor/instructor-quiz-results"
                      class="text-info text-decoration-underline fs-12 fw-medium me-3"
                      >View Results</router-link
                    >
                    <a
                      href="#"
                      class="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#add_question"
                      >Add Question</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>Which of the following is a principle of UX design?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-1"
                    id="Radio-sm-1"
                  />
                  <label class="form-check-label" for="Radio-sm-1">
                    Minimalistic Design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-1"
                    id="Radio-sm-2"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-2">
                    User-Centered Design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-1"
                    id="Radio-sm-3"
                  />
                  <label class="form-check-label" for="Radio-sm-3">
                    Gradient Usage
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-1"
                    id="Radio-sm-4"
                  />
                  <label class="form-check-label" for="Radio-sm-4">
                    Typography Hierarchy
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>Which tool is commonly used for wireframing?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-1"
                    id="Radio-sm-5"
                  />
                  <label class="form-check-label" for="Radio-sm-5">
                    Adobe Photoshop
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-2"
                    id="Radio-sm-6"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-6"> Figma </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-2"
                    id="Radio-sm-7"
                  />
                  <label class="form-check-label" for="Radio-sm-7">
                    Visual Studio Code
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-2"
                    id="Radio-sm-8"
                  />
                  <label class="form-check-label" for="Radio-sm-8"> GitHub </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>What does UI stand for?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-3"
                    id="Radio-sm-9"
                  />
                  <label class="form-check-label" for="Radio-sm-9">
                    User Intention
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-3"
                    id="Radio-sm-10"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-10">
                    User Interface
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-3"
                    id="Radio-sm-11"
                  />
                  <label class="form-check-label" for="Radio-sm-11">
                    Universal Interaction
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-3"
                    id="Radio-sm-12"
                  />
                  <label class="form-check-label" for="Radio-sm-12">
                    Usability Information
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>Which of the following is a principle of UX design?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-4"
                    id="Radio-sm-13"
                  />
                  <label class="form-check-label" for="Radio-sm-13">
                    Minimalistic Design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-4"
                    id="Radio-sm-14"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-14">
                    User-Centered Design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-4"
                    id="Radio-sm-15"
                  />
                  <label class="form-check-label" for="Radio-sm-15">
                    Gradient Usage
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-4"
                    id="Radio-sm-16"
                  />
                  <label class="form-check-label" for="Radio-sm-16">
                    Typography Hierarchy
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>Which tool is commonly used for wireframing?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-5"
                    id="Radio-sm-17"
                  />
                  <label class="form-check-label" for="Radio-sm-17">
                    Adobe Photoshop
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-5"
                    id="Radio-sm-18"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-18"> Figma </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-5"
                    id="Radio-sm-19"
                  />
                  <label class="form-check-label" for="Radio-sm-19">
                    Visual Studio Code
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-5"
                    id="Radio-sm-20"
                  />
                  <label class="form-check-label" for="Radio-sm-20"> GitHub </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>What is a wireframe?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
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
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-6"
                    id="Radio-sm-21"
                  />
                  <label class="form-check-label" for="Radio-sm-21">
                    A detailed, interactive prototype
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-6"
                    id="Radio-sm-22"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-22">
                    A low-fidelity representation of a design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-6"
                    id="Radio-sm-23"
                  />
                  <label class="form-check-label" for="Radio-sm-23">
                    The codebase of a website
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-6"
                    id="Radio-sm-24"
                  />
                  <label class="form-check-label" for="Radio-sm-24">
                    A high-fidelity design concept
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <h6>What is the primary goal of UX design?</h6>
                <div class="d-flex align-items-center justify-content-end">
                  <a
                    href="#"
                    class="d-inline-flex fs-14 me-2 action-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_question"
                    ><i class="isax isax-edit-2"></i
                  ></a>
                  <a href="#" class="d-inline-flex fs-14"
                    ><i
                      class="isax isax-trash"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                    ></i
                  ></a>
                </div>
              </div>
              <div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-7"
                    id="Radio-sm-25"
                  />
                  <label class="form-check-label" for="Radio-sm-25">
                    To create a visually appealing design
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-7"
                    id="Radio-sm-26"
                    checked
                  />
                  <label class="form-check-label" for="Radio-sm-26">
                    To enhance user satisfaction and usability
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-7"
                    id="Radio-sm-27"
                  />
                  <label class="form-check-label" for="Radio-sm-27">
                    To develop complex navigation flows
                  </label>
                </div>
                <div class="form-check mb-0">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="qusetion-7"
                    id="Radio-sm-28"
                  />
                  <label class="form-check-label" for="Radio-sm-28">
                    To optimize code performance
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a href="#" class="btn btn-secondary">Load More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
  <instructor-quiz-question-modal></instructor-quiz-question-modal>
</template>
