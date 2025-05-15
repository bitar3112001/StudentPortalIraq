<template>
  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Remove All</h4>
            <p class="mb-3">Are you sure you want to remove all from wishlist?</p>
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

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_account">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Delete Account</h5>
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
          <div class="mb-3">
            <h6 class="mb-1">Why Are You Deleting Your Account?</h6>
            <p>
              We're sorry to see you go! To help us improve, please let us know your
              reason for deleting your account
            </p>
          </div>
          <div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-1"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-1">
                No longer using the service
              </label>
              <p>I no longer need this service and won’t be using it in the future.</p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-2"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-2">
                Privacy concerns
              </label>
              <p>
                I am concerned about how my data is handled and want to remove my
                information.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-3"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-3">
                Too many notifications/emails
              </label>
              <p>
                I’m overwhelmed by the volume of notifications or emails and would like to
                reduce them.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-4"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-4">
                Poor user experience
              </label>
              <p>
                I’ve had difficulty using the platform, and it didn’t meet my
                expectations.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-5"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-5">
                Other (Please specify)
              </label>
            </div>
            <div>
              <textarea rows="3" class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn bg-gray-100 rounded-pill me-2"
            type="button"
            data-bs-dismiss="modal"
          >
            Keep My Account
          </button>
          <button class="btn btn-secondary rounded-pill" type="button">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
