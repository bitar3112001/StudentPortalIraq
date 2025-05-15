<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Quiz Results</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Quiz Results</li>
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
          <h5 class="page-title">Quiz Results</h5>
          <div class="card">
            <div class="card-body">
              <div class="d-sm-flex align-items-center">
                <div class="quiz-img me-3 mb-2 mb-sm-0">
                  <img src="@/assets/img/students/quiz.jpg" alt="" />
                </div>
                <div>
                  <h5 class="mb-2">
                    <a href="#">Information About UI/UX Design Degree</a>
                  </h5>
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
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="card bg-secondary-transparent border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 class="mb-1 fw-normal text-gray-5">Total Particpants</h6>
                      <span class="fs-20 fw-bold mb-1 d-block text-gray-9">30</span>
                    </div>
                    <div class="icon-box bg-soft-secondary">
                      <img src="@/assets/img/icon/user-tick.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card bg-info-transparent border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 class="mb-1 fw-normal text-gray-5">Scores</h6>
                      <span class="fs-20 fw-bold mb-1 d-block text-gray-9">03</span>
                    </div>
                    <div class="icon-box bg-soft-info">
                      <img src="@/assets/img/icon/document.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card bg-purple-transparent border-0">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <h6 class="mb-1 fw-normal text-gray-5">Average Time</h6>
                      <span class="fs-20 fw-bold mb-1 d-block text-gray-9">00:00:55</span>
                    </div>
                    <div class="icon-box bg-soft-purple">
                      <img src="@/assets/img/icon/clock.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive custom-table">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Student Name</th>
                  <th>Score</th>
                  <th>Attemplts</th>
                  <th>Finish Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-01.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Thompson Hicks</router-link
                      >
                    </div>
                  </td>
                  <td>75</td>
                  <td>04</td>
                  <td>22 Aug 2025, 09:00 AM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-06.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Jennifer Tovar</router-link
                      >
                    </div>
                  </td>
                  <td>50</td>
                  <td>03</td>
                  <td>10 Aug 2025, 09:15 AM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-09.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >James Schulte</router-link
                      >
                    </div>
                  </td>
                  <td>60</td>
                  <td>02</td>
                  <td>26 Jul 2025, 02:20 PM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-20.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Kristy Cardona</router-link
                      >
                    </div>
                  </td>
                  <td>55</td>
                  <td>02</td>
                  <td>12 Jul 2025, 11:40 AM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-27.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >William Aragon</router-link
                      >
                    </div>
                  </td>
                  <td>45</td>
                  <td>04</td>
                  <td>02 Jul 2025, 04:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-30.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Shirley Lis</router-link
                      >
                    </div>
                  </td>
                  <td>60</td>
                  <td>01</td>
                  <td>25 Jun 2025, 08:10 AM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-17.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >John Brewer</router-link
                      >
                    </div>
                  </td>
                  <td>45</td>
                  <td>02</td>
                  <td>17 Jun 2025, 06:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-37.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Doris Hughes</router-link
                      >
                    </div>
                  </td>
                  <td>65</td>
                  <td>03</td>
                  <td>04 Jun 2025, 05:00 PM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-04.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Sarah Martinez</router-link
                      >
                    </div>
                  </td>
                  <td>70</td>
                  <td>04</td>
                  <td>20 May 2025, 06:30 PM</td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <router-link
                        to="/instructor-students/student-details"
                        class="avatar avatar-md avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/user/user-18.jpg" alt="" />
                      </router-link>
                      <router-link to="/instructor-students/student-details" class="fs-14"
                        >Sarah Martinez</router-link
                      >
                    </div>
                  </td>
                  <td>40</td>
                  <td>03</td>
                  <td>15 May 2025, 01:40 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /pagination -->
          <div class="row align-items-center mt-4">
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
  <instructor-quiz-modal></instructor-quiz-modal>
</template>
