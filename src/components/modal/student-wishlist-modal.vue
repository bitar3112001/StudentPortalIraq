<template>
  <!-- Edit Review -->
  <div class="modal fade" id="edit_review">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Edit Review</h5>
          <button
            type="button"
            class="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="isax isax-close-circle5"></i>
          </button>
        </div>
        <div class="modal-body pb-0">
          <div class="mb-3">
            <label class="form-label fs-14"
              >Your Rating <span class="text-danger">*</span></label
            >
            <div class="selection-wrap">
              <div class="d-inline-block">
                <div class="rating-selction">
                  <input type="radio" name="rating" value="5" id="rating5" checked />
                  <label for="rating5"><i class="fa-solid fa-star"></i></label>
                  <input type="radio" name="rating" value="4" id="rating4" checked />
                  <label for="rating4"><i class="fa-solid fa-star"></i></label>
                  <input type="radio" name="rating" value="3" id="rating3" checked />
                  <label for="rating3"><i class="fa-solid fa-star"></i></label>
                  <input type="radio" name="rating" value="2" id="rating2" />
                  <label for="rating2"><i class="fa-solid fa-star"></i></label>
                  <input type="radio" name="rating" value="1" id="rating1" />
                  <label for="rating1"><i class="fa-solid fa-star"></i></label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label fs-14"
              >Write Your Review <span class="text-danger">*</span></label
            >
            <textarea class="form-control lh-base" rows="3">
This is the second Photoshop course I have completed with Nancy Duarte. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Nancy Duarte.</textarea
            >
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:void(0);"
            class="btn btn-md bg-gray-100 rounded-pill me-2"
            data-bs-dismiss="modal"
            >Cancel</a
          >
          <button type="submit" class="btn btn-md btn-secondary rounded-pill">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Review -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Review</h4>
            <p class="mb-3">Are you sure you want to delete review?</p>
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
</template>
