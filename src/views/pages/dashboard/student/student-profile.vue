<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">My Profile</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">My Profile</li>
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
            <h5 class="fw-bold">My Profile</h5>
            <a href="#" class="edit-profile-icon"><i class="isax isax-edit-2"></i></a>
          </div>
          <div class="card mb-0">
            <div class="card-body">
              <h6 class="fs-18 page-title fw-bold">Basic Information</h6>
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>First Name</h6>
                    <span>Ronald</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Last Name</h6>
                    <span>Richard</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Registration Date</h6>
                    <span>16 Jan 2024, 11:15 AM</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>User Name</h6>
                    <span>studentdemo</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Phone Number</h6>
                    <span>90154-91036</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Email</h6>
                    <span>studentdemo@example.com</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Gender</h6>
                    <span>Male</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>DOB</h6>
                    <span>16 Jan 2020</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <h6>Age</h6>
                    <span>24</span>
                  </div>
                </div>
                <div class="col-md-12">
                  <div>
                    <h6>Bio</h6>
                    <span
                      >Hello! I'm Ronald Richard. I'm passionate about developing
                      innovative software solutions, analyzing classic literature. I
                      aspire to become a software developer, work as an editor. In my free
                      time, I enjoy coding, reading, hiking etc.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
</template>
