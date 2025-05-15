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
      <!-- profile box -->
      <student-header></student-header>
      <!-- profile box -->
      <div class="row">
        <!-- sidebar -->
        <student-sidebar></student-sidebar>
        <!-- sidebar -->
        <div class="col-lg-9">
          <div class="mb-3">
            <h5>Settings</h5>
          </div>
          <student-settings-sidebar></student-settings-sidebar>

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
                <h6>Subscriptions</h6>
                <small>Notify me about activity from profile I’m subscribe to</small>
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
                <h6>Recommended Courses</h6>
                <small>Notify me about courses that suits for me</small>
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
                <h6>Reply to my comments</h6>
                <small>Notify me about replies for my comments</small>
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
                <h6>Activity on my comments</h6>
                <small>Notify me about replies for my comments.</small>
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
                <h6>Courses Activity</h6>
                <small
                  >Send me emails about my courses activity and updates I request</small
                >
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
                <h6>Promotions & Recommendations</h6>
                <small
                  >Send me emails about my courses promotions and recommendations</small
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
                <input class="form-check-input" type="checkbox" id="6" />
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
                <input class="form-check-input" type="checkbox" id="17" />
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
                <input class="form-check-input" type="checkbox" id="8" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
</template>
