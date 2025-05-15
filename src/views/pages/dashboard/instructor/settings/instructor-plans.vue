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
          <div class="row">
            <div class="col-xl-5">
              <div class="card mb-3">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center border-bottom pb-3"
                  >
                    <h5 class="fs-18">Active Plan</h5>
                    <a href="#" class="btn download-btn fs-12">Download PDF</a>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between border-bottom mb-3 py-4"
                  >
                    <div>
                      <h6 class="mb-1">Standard Plan</h6>
                      <span class="fs-14">Valid till: May 2025 - Jun 2025</span>
                    </div>
                    <h4>$199</h4>
                  </div>
                  <div class="justify-content-end d-flex row-gap-2 flex-wrap">
                    <button class="btn bg-gray-100 rounded-pill me-1 fs-12" type="button">
                      Cancel Subscription
                    </button>
                    <button
                      class="btn btn-secondary rounded-pill fs-12"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      type="submit"
                    >
                      Update Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-7">
              <div class="card saved-card-items p-0 mb-3">
                <div class="card-body">
                  <div
                    class="d-flex flex-wrap gap-2 justify-content-between align-items-center border-bottom mb-3 pb-3"
                  >
                    <h5 class="fs-18">Saved Cards</h5>
                    <a
                      href="#"
                      class="btn btn-secondary fs-12"
                      data-bs-toggle="modal"
                      data-bs-target="#add_new_card"
                      ><i class="isax isax-add-circle me-1"></i>Add New Card</a
                    >
                  </div>
                  <div class="row row-gap-3">
                    <div class="col-sm-6 px-2">
                      <div class="border rounded p-3">
                        <div class="d-flex align-items-center mb-3">
                          <div class="border p-2 rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/icons/visa-logo.svg" alt="img" />
                          </div>
                          <div>
                            <h6>Credit Card</h6>
                            <small>Visa •••• 1568</small>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <a href="#" class="btn btn-secondary fs-12">Default</a>
                          <div class="d-flex gap-2">
                            <a
                              href="#"
                              class="fs-14 text-gray-5 action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_card"
                              ><i class="isax isax-edit"></i
                            ></a>
                            <a
                              href="#"
                              class="fs-14 text-gray-5 action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 px-2">
                      <div class="border rounded p-3">
                        <div class="d-flex align-items-center mb-3">
                          <div class="border p-2 rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/icons/Mastercard.svg" alt="img" />
                          </div>
                          <div>
                            <h6>Debit Card</h6>
                            <small>•••• 1279</small>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between mt-4"
                        >
                          <a
                            href="#"
                            class="fs-14 text-secondary text-decoration-underline fw-normal"
                            >Set as Default</a
                          >
                          <div class="d-flex gap-2">
                            <a
                              href="#"
                              class="fs-14 text-gray-5 action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_card"
                              ><i class="isax isax-edit"></i
                            ></a>
                            <a
                              href="#"
                              class="fs-14 text-gray-5 action-icon"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><i class="isax isax-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-wrap gap-2 align-items-center justify-content-between p-3"
          >
            <h5 class="fs-18">Transaction History</h5>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Paid</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Pending</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Cancelled</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="table-responsive custom-table">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Order ID</th>
                  <th>Plan Name</th>
                  <th>Payment Method</th>
                  <th>Subscribed On</th>
                  <th>Last Date</th>
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
                      >#INV1245</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Standard Plan</a
                    >
                  </td>
                  <td>Credit Card</td>
                  <td>11 May 2025</td>
                  <td>14 Jun 2025</td>
                  <td>$199</td>
                  <td>
                    <span
                      class="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span
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
                      >#INV3215</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Basic Plan</a
                    >
                  </td>
                  <td>Debit Card</td>
                  <td>12 Apr 2025</td>
                  <td>14 May 2025</td>
                  <td>$99</td>
                  <td>
                    <span
                      class="badge badge-sm bg-skyblue rounded-pill d-inline-flex align-items-center me-1"
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
                      >#INV4581</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Premium Plan</a
                    >
                  </td>
                  <td>Paypal</td>
                  <td>14 Mar 2025</td>
                  <td>14 Apr 2025</td>
                  <td>$299</td>
                  <td>
                    <span
                      class="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span
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
                      >#INV6545</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Basic Plan</a
                    >
                  </td>
                  <td>Debit Card</td>
                  <td>13 Feb 2025</td>
                  <td>13 Mar 2025</td>
                  <td>$99</td>
                  <td>
                    <span
                      class="badge badge-sm fs-10 bg-danger rounded-pill d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Cancelled</span
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
                      >#INV6546</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Basic Plan</a
                    >
                  </td>
                  <td>Debit Card</td>
                  <td>12 Feb 2025</td>
                  <td>12 Mar 2025</td>
                  <td>$99</td>
                  <td>
                    <span
                      class="badge badge-sm fs-10 bg-danger rounded-pill d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Cancelled</span
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
                      >#INV5769</a
                    >
                  </td>
                  <td>
                    <a
                      href="#"
                      class="fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#pricing-plan"
                      >Standard Plan</a
                    >
                  </td>
                  <td>Stripe</td>
                  <td>05 Jan 2025</td>
                  <td>05 Feb 2025</td>
                  <td>$199</td>
                  <td>
                    <span
                      class="badge badge-sm fs-10 bg-success rounded-pill d-inline-flex align-items-center me-1"
                      ><i class="fa-solid fa-circle fs-5 me-1"></i>Paid</span
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
  <footer-two></footer-two>
  <instructor-plans-modal></instructor-plans-modal>
</template>
