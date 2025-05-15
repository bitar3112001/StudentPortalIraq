<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Announcements</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Announcements</li>
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
            <h5 class="fw-bold">Announcements</h5>
            <div>
              <a
                href="javascript:void(0);"
                class="btn btn-secondary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_announcement"
              >
                <i class="isax isax-add-circle me-1"></i>Add Announcement
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="mb-3">
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle btn rounded border d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Status
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-3">
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Published</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Draft</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="input-icon mb-3">
                <span class="input-icon-addon">
                  <i class="isax isax-search-normal-14"></i>
                </span>
                <input
                  type="email"
                  class="form-control form-control-md"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div class="table-responsive custom-table">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Date</th>
                  <th>Announcements</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>22 Aug 2025, 05:40 PM</td>
                  <td>
                    <div>
                      <h6 class="mb-1">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_announcement"
                          >Welcome to Introduction to Programming</a
                        >
                      </h6>
                      <p>Course: Introduction to Programming - Python & Java</p>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge badge-sm bg-success d-inline-flex align-items-center"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Published</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        ><i
                          class="isax isax-edit-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_announcement"
                        ></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                        ><i class="isax isax-trash"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>10 Aug 2025, 10:15 AM</td>
                  <td>
                    <div>
                      <h6 class="mb-1">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_announcement"
                          >Essay Assignment Due Date Approaching</a
                        >
                      </h6>
                      <p>Course: Sketch from A to Z (2024): Become an app designer</p>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge badge-sm bg-skyblue d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Draft</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        ><i
                          class="isax isax-edit-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_announcement"
                        ></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                        ><i class="isax isax-trash"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>26 Jul 2025, 01:30 PM</td>
                  <td>
                    <div>
                      <h6 class="mb-1">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_announcement"
                          >Final Exam Schedule and Preparation Tips</a
                        >
                      </h6>
                      <p>Course: Learn Angular Fundamentals Beginners Guide</p>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge badge-sm bg-success d-inline-flex align-items-center"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Published</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        ><i
                          class="isax isax-edit-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_announcement"
                        ></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                        ><i class="isax isax-trash"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>15 May 2025, 04:00 PM</td>
                  <td>
                    <div>
                      <h6 class="mb-1">
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#view_announcement"
                          >New Video Lectures Added</a
                        >
                      </h6>
                      <p>Course: Learn JavaScript and Express to become a Expert</p>
                    </div>
                  </td>
                  <td>
                    <span
                      class="badge badge-sm bg-success d-inline-flex align-items-center"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Published</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_announcement"
                        ><i class="isax isax-edit-2"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex fs-14 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_modal"
                        ><i class="isax isax-trash"></i
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
  <footer-two></footer-two>
  <instructor-announcements-modal></instructor-announcements-modal>
</template>
