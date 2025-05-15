<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Order History</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Order History</li>
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
            <h5>Order History</h5>
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
                        >Completed</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item rounded-1"
                        >Pending</a
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
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD010</a
                    >
                  </td>
                  <td>22 Aug 2025</td>
                  <td>$160</td>
                  <td>
                    <span class="badge bg-success d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD009</a
                    >
                  </td>
                  <td>10 Aug 2025</td>
                  <td>$180</td>
                  <td>
                    <span class="badge bg-info d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Pending</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD008</a
                    >
                  </td>
                  <td>26 Jul 2025</td>
                  <td>$200</td>
                  <td>
                    <span class="badge bg-success d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD007</a
                    >
                  </td>
                  <td>12 Jul 2025</td>
                  <td>$220</td>
                  <td>
                    <span class="badge bg-success d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD006</a
                    >
                  </td>
                  <td>02 Jul 2025</td>
                  <td>$170</td>
                  <td>
                    <span class="badge bg-success d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        ><i class="isax isax-eye"></i
                      ></a>
                      <a href="#" class="d-inline-flex fs-14 action-icon"
                        ><i class="isax isax-import"></i
                      ></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      class="text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#view_invoice"
                      >#ORD005</a
                    >
                  </td>
                  <td>25 Jun 2025</td>
                  <td>$150</td>
                  <td>
                    <span class="badge bg-success d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                    >
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <a
                        href="#"
                        class="d-inline-flex fs-14 me-1 action-icon"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
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
  <student-order-history-modal></student-order-history-modal>
</template>
