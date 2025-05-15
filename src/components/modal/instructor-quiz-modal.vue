<template>
  <!-- Add Question -->
  <div class="modal fade" id="add_quiz">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Add New Quiz</h5>
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
            <div class="mb-3">
              <label class="form-label">Course <span class="text-danger"> *</span></label>
              <vue-select :options="InformS" id="infroms" placeholder="Select" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Quiz Title <span class="text-danger"> *</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >No of Questions <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Total Marks <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Pass Mark <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Duration <span class="text-danger"> *</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="Choose"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                    <span class="input-icon-addon">
                      <i class="isax isax-clock"></i>
                    </span>
                  </div>
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
            <button class="btn btn-secondary rounded-pill" type="submit">Add Quiz</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Question -->

  <!-- Edit Question -->
  <div class="modal fade" id="edit_quiz">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Edit Quiz</h5>
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
            <div class="mb-3">
              <label class="form-label">Course <span class="text-danger"> *</span></label>
              <vue-select
                :options="InformSEdit"
                id="infromsedit"
                placeholder="Information About UI/UX Design Degree"
              />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Quiz Title <span class="text-danger"> *</span></label
              >
              <input
                type="text"
                class="form-control"
                value="Information About UI/UX Design Degree"
              />
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >No of Questions <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="10" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Total Marks <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="100" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Pass Mark <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="50" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Duration <span class="text-danger"> *</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <a-time-picker
                      class="form-control timepicker"
                      placeholder="Choose"
                      use12-hours
                      format="h:mm a"
                      type="text"
                    />
                    <span class="input-icon-addon">
                      <i class="isax isax-clock"></i>
                    </span>
                  </div>
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
  <!-- /Edit Question -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Quiz</h4>
            <p class="mb-3">Are you sure you want to delete Quiz?</p>
            <div class="d-flex align-items-center justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn bg-gray-100 rounded-pill me-2"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                >Yes, Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>
<script>
export default {
  data() {
    return {
      InformS: [
        "Select",
        "Information About UI/UX Design Degree",
        "Learn JavaScript and Express to become a Expert",
        "Introduction to Python Programming",
      ],
      InformSEdit: [
        "Select",
        "Information About UI/UX Design Degree",
        "Learn JavaScript and Express to become a Expert",
        "Introduction to Python Programming",
      ],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-quiz-questions");
    },
  },
};
</script>
