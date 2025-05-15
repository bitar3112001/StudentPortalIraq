<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Certificates</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Certificates</li>
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
          <div class="certificate">
            <div class="page-title d-flex align-items-center justify-content-between">
              <h5>Certificates</h5>
              <div>
                <a
                  href="#"
                  class="btn btn-secondary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_certificate"
                >
                  <i class="isax isax-add-circle me-1"></i>Add Certificate
                </a>
              </div>
            </div>
            <div class="p-0">
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="mb-3">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#view_certificate"
                          ><img
                            class="img-fluid rounded"
                            src="@/assets/img/instructor/certificate-1.jpg"
                            alt="img"
                        /></a>
                      </div>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                      >
                        <h6>Certificate 01</h6>
                        <ul class="edit-delete-icon d-flex align-items-center">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#view_certificate"
                              ><i class="isax isax-eye"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#"><i class="isax isax-edit-2"></i></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="mb-3">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#view_certificate"
                          ><img
                            class="img-fluid rounded"
                            src="@/assets/img/instructor/certificate-2.jpg"
                            alt="img"
                        /></a>
                      </div>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                      >
                        <h6>Certificate 02</h6>
                        <ul class="edit-delete-icon d-flex align-items-center">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#view_certificate"
                              ><i class="isax isax-eye"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#"><i class="isax isax-edit-2"></i></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="mb-3">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#view_certificate"
                          ><img
                            class="img-fluid rounded"
                            src="@/assets/img/instructor/certificate-3.jpg"
                            alt="img"
                        /></a>
                      </div>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                      >
                        <h6>Certificate 03</h6>
                        <ul class="edit-delete-icon d-flex align-items-center">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#view_certificate"
                              ><i class="isax isax-eye"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#"><i class="isax isax-edit-2"></i></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="mb-3">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#view_certificate"
                          ><img
                            class="img-fluid rounded"
                            src="@/assets/img/instructor/certificate-4.jpg"
                            alt="img"
                        /></a>
                      </div>
                      <div
                        class="d-flex align-items-center flex-wrap justify-content-between gap-2"
                      >
                        <h6>Certificate 04</h6>
                        <ul class="edit-delete-icon d-flex align-items-center">
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#view_certificate"
                              ><i class="isax isax-eye"></i
                            ></a>
                          </li>
                          <li>
                            <a href="#"><i class="isax isax-edit-2"></i></a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </li>
                        </ul>
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
  </div>
  <footer-two></footer-two>
  <instructor-certificate-modal></instructor-certificate-modal>
</template>
