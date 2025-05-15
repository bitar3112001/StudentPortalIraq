<template>
  <!-- pricing plan -->
  <div class="modal fade pricing-modal" id="pricing-plan">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Pricing Plan</h5>
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
          <div
            class="enable-item mb-3 d-flex align-items-center justify-content-center text-gray-9"
          >
            <label class="mb-0 me-2 fs-14">Monthly</label>
            <div class="form-check form-switch check-on m-0">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <label class="mb-0 ms-2 fs-14">Annualy</label>
          </div>
          <div class="row row-gap-4">
            <div class="col-xl-4 col-lg-6 d-flex">
              <div class="pricing-item flex-fill">
                <h5 class="mb-2">Basic</h5>
                <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>99</h1>
                <h6 class="fw-normal">
                  Ideal for individuals or small teams starting with online education.
                </h6>
                <div class="border-top pt-3 mt-3">
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>10 active courses
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Basic course creation
                    tools
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Student progress tracking
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>1 GB storage
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Email notifications
                  </p>
                  <p class="d-flex align-items-center mb-0">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Community support
                  </p>
                </div>
                <a
                  href="#"
                  class="btn btn-secondary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#pricing-plan-two"
                  >Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i
                ></a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 d-flex">
              <div class="pricing-item flex-fill">
                <h5 class="mb-2">Standard</h5>
                <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>199</h1>
                <h6 class="fw-normal">
                  Ideal for growing institutions that need advanced tools and greater
                  flexibility.
                </h6>
                <div class="border-top pt-3 mt-3">
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Access to 20 courses
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Custom course certificates
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Basic analytics
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>10 GB storage
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Course scheduling
                  </p>
                  <p class="d-flex align-items-center mb-0">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Priority email and chat
                    support
                  </p>
                </div>
                <a
                  href="#"
                  class="btn btn-secondary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#pricing-plan-two"
                  >Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i
                ></a>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 d-flex">
              <div class="pricing-item flex-fill">
                <h5 class="mb-2">Premium</h5>
                <h1 class="mb-2 text-primary"><sup class="me-1">$</sup>299</h1>
                <h6 class="fw-normal">
                  Designed for large-scale learning with robust features and custom
                  branding.
                </h6>
                <div class="border-top pt-3 mt-3">
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Unlimited courses
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Advanced course creation
                    tools
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Detailed student analytics
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>100 GB storage
                  </p>
                  <p class="d-flex align-items-center mb-2">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Integration with
                    third-party tools
                  </p>
                  <p class="d-flex align-items-center mb-0">
                    <i class="fa-solid fa-circle fs-5 me-2"></i>Completion certificates
                  </p>
                </div>
                <a
                  href="#"
                  class="btn btn-secondary w-100 mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#pricing-plan-two"
                  >Choose Plan<i class="isax isax-arrow-right-3 fs-10 ms-1"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- pricing plan -->

  <!-- pricing plan -->
  <div class="modal fade pricing-modal" id="pricing-plan-two">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Pricing Plan</h5>
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
          <form @submit.prevent="submitForm">
            <div class="row row-gap-3">
              <div class="col-lg-8">
                <div class="pay-meth">
                  <h5 class="fs-18 mb-3">Payment Method</h5>
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item mb-3" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Debit or Credit Card
                      </button>
                    </li>
                    <li class="nav-item mb-3" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        PayPal
                      </button>
                    </li>
                    <li class="nav-item mb-3" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Stripe
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Name on Card<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Card Number<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Expiration Date<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >CVV<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <hr class="mt-2" />
                      <h5 class="fs-18 mb-3">Billing Address</h5>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >Address<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Country<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="FranceSel"
                              id="francesel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >State<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="CaliSel"
                              id="calisel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >City<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="LosSel"
                              id="lossel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Postal Code <span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Email Address<span class="text-danger"> *</span></label
                            >
                            <input type="email" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Password<span class="text-danger"> *</span></label
                            >
                            <div class="position-relative">
                              <input
                                :type="showPassword ? 'text' : 'password'"
                                class="pass-inputa form-control"
                              />
                              <span
                                @click="togglePassword"
                                class="isax toggle-passworda text-gray-7 fs-14"
                                :class="showPassword ? 'isax-eye' : 'isax-eye-slash'"
                              >
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="mt-2" />
                      <h5 class="fs-18 mb-3">Billing Address</h5>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >Address<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Country<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="CanadSel"
                              id="candasel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >State<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="NewYor"
                              id="newyor"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >City<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="SeleCity"
                              id="selecity"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Postal Code <span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Email Address<span class="text-danger"> *</span></label
                            >
                            <input type="email" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Password<span class="text-danger"> *</span></label
                            >
                            <div class="position-relative">
                              <input
                                :type="showPassword ? 'text' : 'password'"
                                class="pass-inputa form-control"
                              />
                              <span
                                @click="togglePassword"
                                class="isax toggle-passworda text-gray-7 fs-14"
                                :class="showPassword ? 'isax-eye' : 'isax-eye-slash'"
                              >
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="mt-2" />
                      <h5 class="fs-18 mb-3">Billing Address</h5>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="mb-3">
                            <label class="form-label"
                              >Address<span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Country<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="FranCoun"
                              id="francoun"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >State<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="FlordSel"
                              id="flordsel"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >City<span class="text-danger"> *</span></label
                            >
                            <vue-select
                              :options="SanFr"
                              id="sanfr"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="mb-3">
                            <label class="form-label"
                              >Postal Code <span class="text-danger"> *</span></label
                            >
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <a
                      href="#"
                      class="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#successful-modal"
                      >Proceed to Pay $99.00</a
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="subscription-details">
                  <h5 class="fs-18 mb-3">Subscription Details</h5>
                  <p class="mb-2">
                    Plan Name: <span class="text-gray-9 float-end fw-medium">Basic</span>
                  </p>
                  <p class="mb-2">
                    Plan Amount:
                    <span class="text-gray-9 float-end fw-medium">$99.00</span>
                  </p>
                  <p class="mb-2">
                    Tax: <span class="text-gray-9 float-end fw-medium">$0.00</span>
                  </p>
                  <p>
                    Total: <span class="text-gray-9 float-end fw-medium">$99.00</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- pricing plan -->

  <div class="modal fade successful-modal" id="successful-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-success rounded-circle mb-3">
            <i class="fa-solid fa-check fs-14 text-white"></i>
          </span>
          <div>
            <h5 class="mb-1">Payment Successful</h5>
            <p class="mb-3">
              Your purchase of the Basic Plan has been completed with reference number
              <a
                href="#"
                class="text-primary"
                data-bs-toggle="modal"
                data-bs-target="#view_invoice"
                >#INV1245</a
              >
            </p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="#"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-toggle="modal"
                data-bs-target="#pricing-plan"
                >Back to Plans</a
              >
              <a
                href="#"
                class="btn btn-secondary rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#view_invoice"
                >View Details</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- View Invoice -->
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
                  <p class="fs-14 mb-1">Email : <a href="#">adre3@example.com</a></p>
                  <p class="fs-14">Phone : <a href="#">+1 987 471 6589</a></p>
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
                      <p class="text-gray-9 fw-semibold">Basic Plan</p>
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
                <p>Invoice for course purchase, covering course fee.</p>
              </div>
              <div>
                <h6 class="mb-1 fs-16">Terms and Conditions</h6>
                <p>Full payment grants non-transferable access to the course.</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="text-end pe-4 mb-2">
                <img src="@/assets/img/icon/sign.svg" class="img-fluid" alt="sign" />
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
  <!-- /View Invoice -->

  <!-- add new card -->
  <div class="modal fade" id="add_new_card">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Add New Card</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="isax isax-close-circle5"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Payment Method<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PaySel" id="paysel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Card Number<span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3 add-card-date">
                  <label class="form-label"
                    >Expiration Date<span class="text-danger"> *</span></label
                  >
                  <div class="input-icon position-relative calender-input">
                    <span class="input-icon-addon">
                      <i class="isax isax-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">CVV<span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Name on Card<span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn bg-gray-100 rounded-pill me-2"
              type="button"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button class="btn btn-secondary rounded-pill" type="submit">Add Card</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- add new card -->

  <!-- edit card -->
  <div class="modal fade" id="edit_card">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Edit Card</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="isax isax-close-circle5"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Payment Method<span class="text-danger"> *</span></label
                  >
                  <vue-select :options="PaySelOne" id="payselone" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Card Number<span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="9834 7923 4098 1568" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3 add-card-date">
                  <label class="form-label"
                    >Expiration Date<span class="text-danger"> *</span></label
                  >
                  <div class="input-icon position-relative calender-input">
                    <span class="input-icon-addon">
                      <i class="isax isax-calendar"></i>
                    </span>
                    <date-picker
                      v-model="startdateOne"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">CVV<span class="text-danger"> *</span></label>
                  <input type="text" class="form-control" value="725" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Name on Card<span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="Eugene Andre" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn bg-gray-100 rounded-pill me-2"
              type="button"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button class="btn btn-secondary rounded-pill" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- edit card -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Card</h4>
            <p class="mb-3">Are you sure you want to delete card?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="#"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
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
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      showPassword: false,
      CaliSel: ["Select", "California", "New York", "Texas", "Florida"],
      FranceSel: ["Select", "USA", "Canada", "Germany", "France"],
      LosSel: ["Select", "Los Angeles", "San Diego", "Fresno", "San Francisco"],
      PaySel: ["Select", "Credit Card", "Debit Card", "Paypal", "Stripe"],
      PaySelOne: ["Select", "Credit Card", "Debit Card", "Paypal", "Stripe"],
      FranCoun: ["Select", "USA", "Canada", "Germany", "France"],
      FlordSel: ["Select", "California", "New York", "Texas", "Florida"],
      SanFr: ["Select", "Los Angeles", "San Diego", "Frasno", "San francisco"],
      CanadSel: ["Select", "USA", "Canada", "Germany", "France"],
      NewYor: ["Select", "California", "New York", "Texas", "Florida"],
      SeleCity: ["Select", "Los Angeles", "San Diego", "Fresno", "San Francisco"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-plans");
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
