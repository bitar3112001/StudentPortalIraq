<template>
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
                    class="badge bg-success badge-sm d-inline-flex align-items-center fs-10 fw-normal mb-4"
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
            <div class="table-responsive custom-table rounded-0">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th class="w-50">Description</th>
                    <th class="text-center">Qty</th>
                    <th class="text-end">Cost</th>
                    <th class="text-end">Discount</th>
                    <th class="text-end">Total</th>
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
                <h6 class="mb-1 fs-15">Notes</h6>
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
                <h6 class="fs-15 pe-3 mb-2">Ted M. Davis</h6>
                <p>Assistant Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /View Invoice -->
</template>
