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
          <div class="card mb-0">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="d-flex align-items-center border-bottom mb-4 pb-4">
                    <div class="flex-shrink-0 me-3">
                      <img src="@/assets/img/icon/fb-icon.svg" alt="Img" />
                    </div>
                    <div
                      class="d-sm-flex align-items-center justify-content-between w-100"
                    >
                      <div class="mb-2 mb-sm-0">
                        <h6 class="mb-1">Facebook</h6>
                        <p class="mb-0">
                          Facebook is a social platform for connecting, sharing, and
                          building communities globally.
                        </p>
                      </div>
                      <a href="#" class="btn btn-dark flex-shrink-0">Remove</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center border-bottom mb-4 pb-4">
                    <div class="flex-shrink-0 me-3">
                      <img src="@/assets/img/icon/google-icon.svg" alt="Img" />
                    </div>
                    <div
                      class="d-sm-flex align-items-center justify-content-between w-100"
                    >
                      <div class="mb-2 mb-sm-0">
                        <h6 class="mb-1">Google</h6>
                        <p class="mb-0">
                          Google is widely used for search, maps, email, and other
                          services.
                        </p>
                      </div>
                      <a href="#" class="btn btn-light flex-shrink-0">Link Account</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center border-bottom mb-4 pb-4">
                    <div class="flex-shrink-0 me-3">
                      <img src="@/assets/img/icon/github-icon.svg" alt="Img" />
                    </div>
                    <div
                      class="d-sm-flex align-items-center justify-content-between w-100"
                    >
                      <div class="mb-2 mb-sm-0">
                        <h6 class="mb-1">Github</h6>
                        <p class="mb-0">
                          GitHub is a version control and collaboration platform for
                          hosting, managing, and sharing code.
                        </p>
                      </div>
                      <a href="#" class="btn btn-light flex-shrink-0">Link Account</a>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                      <img src="@/assets/img/icon/twitter-x-icon.svg" alt="Img" />
                    </div>
                    <div
                      class="d-sm-flex align-items-center justify-content-between w-100"
                    >
                      <div class="mb-2 mb-sm-0">
                        <h6 class="mb-1">Twitter</h6>
                        <p class="mb-0">
                          Twitter is a platform for sharing news, updates, and global
                          conversations.
                        </p>
                      </div>
                      <a href="#" class="btn btn-light flex-shrink-0">Link Account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-light rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Remove All</h4>
            <p class="mb-3">Are you sure you want to remove all from wishlist?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a href="#" class="btn btn-light rounded-pill me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="#" class="btn btn-secondary rounded-pill">Yes, Remove All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
