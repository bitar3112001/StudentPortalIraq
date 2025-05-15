<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">My Certificates</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">My Certificates</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <!-- Profile -->
      <student-header></student-header>
      <!-- /Profile -->

      <div class="row">
        <!-- Sidebar -->
        <student-sidebar></student-sidebar>
        <!-- sidebar -->
        <div class="col-lg-9">
          <div class="page-title d-flex align-items-center justify-content-between">
            <h5>My Certificates</h5>
          </div>
          <div class="table-responsive custom-table">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Certificate Name</th>
                  <th>Date</th>
                  <th>Marks</th>
                  <th>Out of</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td><a href="#" class="fw-semibold">UI/UX Design Certificate</a></td>
                  <td>22 Aug 2025</td>
                  <td>20</td>
                  <td>20</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td><a href="#" class="fw-semibold">Wordpress Certificate</a></td>
                  <td>10 Aug 2025</td>
                  <td>18</td>
                  <td>20</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td><a href="#" class="fw-semibold">HTML CSS Certificate</a></td>
                  <td>26 Jul 2025</td>
                  <td>25</td>
                  <td>30</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td><a href="#" class="fw-semibold">JavaScript Certificate</a></td>
                  <td>14 Jul 2025</td>
                  <td>15</td>
                  <td>20</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td><a href="#" class="fw-semibold">Photoshop Certificate</a></td>
                  <td>19 Jun 2025</td>
                  <td>20</td>
                  <td>30</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td><a href="#" class="fw-semibold">Python Certificate</a></td>
                  <td>12 Jun 2025</td>
                  <td>20</td>
                  <td>20</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_certificate"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->

  <!-- View Certificate -->
  <div class="modal fade" id="view_certificate">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5>View Certificate</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="isax isax-close-circle5"></i>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <img src="@/assets/img/icon/certificate.svg" class="img-fluid" alt="" />
          </div>
          <div class="text-end mt-4">
            <a href="#" class="btn btn-secondary rounded-pill"
              ><i class="isax isax-import me-2"></i>Download</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Certificate -->
</template>
