<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Statements</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Statements</li>
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
          <div class="statements">
            <h5 class="page-title">Statements</h5>
            <div class="table-top">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <div class="d-flex align-items-center">
                    <div class="mb-3">
                      <div class="dropdown me-3">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle btn d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Payment Method
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                              >Paypal</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                              >Bank Transfer</a
                            >
                          </li>
                          <li>
                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                              >Stripe</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="dropdown me-3">
                        <a
                          href="javascript:void(0);"
                          class="dropdown-toggle btn d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Status
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
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
            </div>
            <div class="table-responsive custom-table">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD01</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >Information About UI/UX Design<br />
                        Degree</router-link
                      >
                    </td>
                    <td>22 Aug 2025</td>
                    <td>$160</td>
                    <td>Paypal</td>
                    <td>
                      <span
                        class="badge badge-sm bg-success d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
                          ><i class="isax isax-import"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD009</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >Build Responsive Real World Websites<br />
                        with Crash Course</router-link
                      >
                    </td>
                    <td>10 Aug 2025</td>
                    <td>$180</td>
                    <td>Bank Transfer</td>
                    <td>
                      <span
                        class="badge badge-sm bg-info d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Pending</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
                          ><i class="isax isax-import"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD008</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >C# Developers Double Your Coding<br />
                        with Visual Studio</router-link
                      >
                    </td>
                    <td>26 Jul 2025</td>
                    <td>$200</td>
                    <td>Stripe</td>
                    <td>
                      <span
                        class="badge badge-sm bg-success d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
                          ><i class="isax isax-import"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD007</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >Wordpress for Beginners - Master<br />
                        Wordpress Quickly</router-link
                      >
                    </td>
                    <td>12 Jul 2025</td>
                    <td>$220</td>
                    <td>Paypal</td>
                    <td>
                      <span
                        class="badge badge-sm bg-success d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
                          ><i class="isax isax-import"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD006</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >Introduction to Python Programming</router-link
                      >
                    </td>
                    <td>02 Jul 2025</td>
                    <td>$170</td>
                    <td>Stripe</td>
                    <td>
                      <span
                        class="badge badge-sm bg-success d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
                          ><i class="isax isax-import"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="order">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_invoice"
                        >#ORD005</a
                      >
                    </td>
                    <td>
                      <router-link to="/details/course-details-1"
                        >Learn JavaScript and Express to<br />
                        become a Expert</router-link
                      >
                    </td>
                    <td>25 Jun 2025</td>
                    <td>$150</td>
                    <td>Bank Transfer</td>
                    <td>
                      <span
                        class="badge badge-sm bg-success d-inline-flex align-items-center"
                        ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                      >
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 me-1 action-icon"
                          data-bs-toggle="modal"
                          data-bs-target="#view_invoice"
                          ><i class="isax isax-eye"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="d-inline-flex fs-14 action-icon"
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
  </div>
  <footer-two></footer-two>
  <div class="modal fade" id="view_invoice">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Invoice</h5>
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
          <div class="border-bottom mb-3">
            <div
              class="row justify-content-between align-items-center flex-wrap row-gap-4"
            >
              <div class="col-md-6">
                <div class="mb-2 invoice-logo-white">
                  <img src="@/assets/img/logo.svg" class="img-fluid" alt="logo" />
                </div>
                <p class="mb-2">3099 Kennedy Court Framingham, MA 01702</p>
              </div>
              <div class="col-md-6">
                <div class="text-end mb-3">
                  <h6 class="text-default mb-1 text-secondary fs-16">#OI0010</h6>
                  <p class="mb-1">
                    Created Date : <span class="text-gray-9">Aug 25, 2025</span>
                  </p>
                  <p>Due Date : <span class="text-gray-9">Aug 30, 2025</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="border-bottom mb-3">
            <div class="row g-4">
              <div class="col-lg-5">
                <span class="mb-3 d-flex">From</span>
                <div>
                  <h6 class="mb-2 fs-16">Thomas Lawler</h6>
                  <p class="fs-14 mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                  <p class="fs-14 mb-1">Email :thomaslawler@example.com</p>
                  <p class="fs-14">Phone : +1 987 654 3210</p>
                </div>
              </div>
              <div class="col-lg-5">
                <span class="mb-3 d-flex">To</span>
                <div>
                  <h6 class="mb-2">Ronald Richard</h6>
                  <p class="fs-14 mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                  <p class="fs-14 mb-1">
                    Email : <a href="javascript:void(0);">adre3@example.com</a>
                  </p>
                  <p class="fs-14">
                    Phone : <a href="javascript:void(0);">+1 987 471 6589</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="mb-3 text-end">
                  <span class="mb-1 d-block">Payment Status</span>
                  <span
                    class="badge bg-success badge-md d-inline-flex align-items-center fs-10 fw-normal mb-4"
                    ><i class="fa-solid fa-circle fs-5 me-1"></i>Completed</span
                  >
                  <div>
                    <img src="@/assets/img/icon/qr.svg" class="img-fluid" alt="QR" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="table-responsive">
              <table class="table invoice-table">
                <thead class="thead-light">
                  <tr>
                    <th class="w-50 bg-light-400">Description</th>
                    <th class="text-center bg-light-400">Qty</th>
                    <th class="text-end bg-light-400">Cost</th>
                    <th class="text-end bg-light-400">Discount</th>
                    <th class="text-end bg-light-400">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p class="text-gray-9">Information About UI/UX Design Degree</p>
                    </td>
                    <td class="text-gray text-center">1</td>
                    <td class="text-gray text-end">$120</td>
                    <td class="text-gray text-end">$0</td>
                    <td class="text-gray text-end">$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="border-bottom mb-3 pb-3">
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <div
                  class="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3"
                >
                  <p class="text-gray mb-0">Sub Total</p>
                  <p class="text-gray-9 fw-medium">$120</p>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center border-bottom my-2 pb-2 pe-3"
                >
                  <p class="mb-0">Discount (0%)</p>
                  <p class="text-gray-9 fs-14 fw-medium">$0</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-3 pe-3">
                  <p class="mb-0">VAT (5%)</p>
                  <p class="text-gray-9 fs-14 fw-medium mb-2">$0</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2 pe-3">
                  <h6 class="fs-16">Total Amount</h6>
                  <h6 class="fs-16">$120</h6>
                </div>
                <p>Amount in Words : Dollar One Hundred Twenty</p>
              </div>
            </div>
          </div>
          <div class="row align-items-center gy-3">
            <div class="col-lg-9">
              <div class="mb-3">
                <h6 class="mb-1 fs-16">Notes</h6>
                <p>
                  Invoice for course purchase, covering course fee, discounts, and
                  applicable taxes.
                </p>
              </div>
              <div>
                <h6 class="mb-1 fs-16">Terms and Conditions</h6>
                <p>
                  Full payment grants non-transferable access to the course, subject to
                  the provider’s refund policy.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="text-end pe-4 mb-2">
                <img src="@/assets/img/icons/sign.svg" class="img-fluid" alt="sign" />
              </div>
              <div class="text-end">
                <h6 class="fs-16 pe-3 mb-2">Ted M. Davis</h6>
                <p>Assistant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
