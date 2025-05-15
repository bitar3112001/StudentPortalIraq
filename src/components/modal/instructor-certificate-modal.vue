<template>
  <!-- Add Question -->
  <div class="modal fade" id="add_certificate">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Add New Certificate</h5>
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
              <label class="form-label">Attachments</label>
              <div
                class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column"
              >
                <span class="upload-img mb-2"
                  ><i class="isax isax-folder5 fs-24"></i
                ></span>
                <p class="mb-1 fs-12">Drag and drop your files</p>
                <p class="mb-2 fs-12">Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf</p>
                <input type="file" accept="video/image" />
                <span class="btn btn-secondary rounded-pill"
                  ><i class="isax isax-document-upload me-1"></i>Upload</span
                >
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-light rounded-pill me-2"
              type="button"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button class="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Question -->

  <div class="modal fade" id="view_certificate">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>View Certificate</h5>
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
          <div>
            <img src="@/assets/img/icon/certificate.svg" class="img-fluid" alt="" />
          </div>
          <div class="text-end mt-4">
            <a href="#" class="btn btn-secondary rounded-pill"
              ><i class="isax isax-import me-2"></i>Download</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-gray-100 rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Certificate</h4>
            <p class="mb-3">Are you sure you want to delete certificate?</p>
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
      
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-quiz-questions");
    },
  },
}
</script>