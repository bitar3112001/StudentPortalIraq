<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Settings</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
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
          <div class="mb-3">
            <h5>Settings</h5>
          </div>
          <instructor-settings-sidebar></instructor-settings-sidebar>

          <form>
            <!-- Title -->
            <div
              class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
            >
              <h5 class="fs-18 mb-0">General Notifications</h5>
              <button class="btn btn-sm btn-dark" type="button">Toggle all</button>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Student Questions</h6>
                <small>Notify me when a student asks a question in the Q&A section</small>
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkPrivacy1"
                  checked
                />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Feedback Received</h6>
                <small>Notify me when receive feedback from students</small>
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="7" checked />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Quiz/Exam Results Submission</h6>
                <small>Notify me when quiz or exam results are submitted</small>
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="4" />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Forum Activity</h6>
                <small
                  >Notify me about new posts or replies in course discussion
                  forums.</small
                >
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="5" />
              </div>
            </div>
          </form>
          <div class="text-center my-5"></div>
          <form>
            <!-- Title -->
            <div
              class="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4"
            >
              <h5 class="fs-18 mb-0">Email Notifications</h5>
              <button class="btn btn-sm btn-dark" type="button">Toggle all</button>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Course Enrolment</h6>
                <small>Send me emails when a new student enrolls the course</small>
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkPrivacy6"
                  checked
                />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Assignment Submission</h6>
                <small
                  >Send me email whenever an assignment is submitted by a student</small
                >
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkPrivacy7"
                  checked
                />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Course Comments</h6>
                <small
                  >Get notified about comments on your posts and replies to your
                  comments.</small
                >
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="8" />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>Course Reminders</h6>
                <small
                  >Receive booking assistance reminders to stay updated on your scheduled
                  sessions.</small
                >
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="9" />
              </div>
            </div>

            <!-- Item -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Content -->
              <div>
                <h6>System Updates</h6>
                <small>Send me emails about updates to the LMS platform </small>
              </div>
              <!-- Switch -->
              <div class="form-check form-switch form-check-md mb-0 ms-3">
                <input class="form-check-input" type="checkbox" id="17" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
</template>
