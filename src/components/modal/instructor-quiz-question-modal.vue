<template>
  <!-- Add Question -->
  <div class="modal fade" id="add_question">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Add New Question</h5>
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
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Question <span class="text-danger"> *</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Question Type <span class="text-danger"> *</span></label
              >
              <vue-select :options="MultipleCho" id="multiplecho" placeholder="Select" />
            </div>
            <h6 class="mb-3">Answer</h6>
            <div class="add-choice-data">
              <div class="mb-3">
                <div class="d-flex align-items-center justify-content-between">
                  <label class="form-label"
                    >Choice 1 <span class="text-danger"> *</span></label
                  >
                  <div class="form-check form-switch form-switch-end">
                    <label class="form-check-label" for="switch-sm">Correct Answer</label>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                      checked
                    />
                  </div>
                </div>
                <input type="text" class="form-control" />
              </div>
            </div>
            <a
              href="#"
              class="text-secondary d-inline-flex align-items-center fw-medium add-choice"
            >
              <i class="isax isax-add me-1"></i>Add New
            </a>
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
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Question -->

  <!-- Add Question -->
  <div class="modal fade" id="edit_question">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Edit Question</h5>
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
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Question <span class="text-danger"> *</span></label
              >
              <input
                type="text"
                class="form-control"
                value="Which of the following is a principle of UX design?"
              />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Question Type <span class="text-danger"> *</span></label
              >
              <vue-select
                :options="MultipleChoEdit"
                id="multiplechoedit"
                placeholder="Multiple choice"
              />
            </div>
            <h6 class="mb-3">Answer</h6>
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Choice 1 <span class="text-danger"> *</span></label
                >
                <div class="form-check form-switch form-switch-end">
                  <label class="form-check-label correct-ans" for="switch-sm3"
                    >Correct Answer</label
                  >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switch-sm3"
                    checked
                  />
                </div>
              </div>
              <input type="text" class="form-control" value="Minimalistic Design" />
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Choice 2 <span class="text-danger"> *</span></label
                >
                <div class="form-check form-switch form-switch-end">
                  <label class="form-check-label" for="switch-sm4">Correct Answer</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switch-sm4"
                  />
                </div>
              </div>
              <input type="text" class="form-control" value="User-Centered Design" />
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Choice 3 <span class="text-danger"> *</span></label
                >
                <div class="form-check form-switch form-switch-end">
                  <label class="form-check-label" for="switch-sm5">Correct Answer</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switch-sm5"
                  />
                </div>
              </div>
              <input type="text" class="form-control" value="Gradient Usage" />
            </div>
            <div class="mb-3">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Choice 4 <span class="text-danger"> *</span></label
                >
                <div class="form-check form-switch form-switch-end">
                  <label class="form-check-label" for="switch-sm6">Correct Answer</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="switch-sm6"
                  />
                </div>
              </div>
              <input type="text" class="form-control" value="Typography Hierarchy" />
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
  <!-- /Add Question -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Quiz</h4>
            <p class="mb-3">
              Are you sure you want to delete Quiz “Information About UI/UX Design
              Degree”?
            </p>
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
      MultipleCho: ["Select", "Multiple Check", "True or False"],
      MultipleChoEdit: ["Select", "Multiple Check", "True or False"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-quiz-questions");
    },
  },
};
</script>
