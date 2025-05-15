<template>
  <!-- Add Ticket -->
  <div class="modal fade" id="add_ticket">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Add Ticket</h5>
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
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Ticket Title <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Category <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="ErrorSel" id="errorsel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Priority <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="HigtSel" id="higtsel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <div class="summernote">
                    <ckeditor
                      :editor="editor"
                      v-model="editorData"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <div
                    class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column"
                  >
                    <span class="upload-img mb-2"
                      ><i class="isax isax-folder5 fs-24"></i
                    ></span>
                    <p class="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                    <p class="mb-2 fs-12">
                      Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf
                    </p>
                    <input type="file" accept="video/image" />
                    <span class="btn mt-2 btn-secondary rounded-pill"
                      ><i class="isax isax-document-upload me-1"></i>Upload</span
                    >
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
            <button class="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Ticket -->

  <!-- Edit Ticket -->
  <div class="modal fade" id="edit_ticket">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Edit Ticket</h5>
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
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Ticket Title <span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    value="Issue with Course Notification Emails"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Category <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="ErrorSelEdit"
                    id="errorseledit"
                    placeholder="Mailing Issues"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Priority <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="HigtSelEdit"
                    id="higtseledit"
                    placeholder="High"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <div class="summernote">
                    <ckeditor
                      :editor="editor"
                      v-model="editorData"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Attachments</label>
                  <div
                    class="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column"
                  >
                    <span class="upload-img mb-2"
                      ><i class="isax isax-folder5 fs-24"></i
                    ></span>
                    <p class="mb-1 text-gray-9 fw-medium">Drag and drop your files</p>
                    <p class="mb-2 fs-12">
                      Accept File Type: doc,docx,jpg,jpeg,png,txt,pdf
                    </p>
                    <input type="file" accept="video/image" />
                    <span class="btn mt-2 btn-secondary rounded-pill"
                      ><i class="isax isax-document-upload me-1"></i>Upload</span
                    >
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
  <!-- /Edit Ticket -->

  <!-- Ticket Details -->
  <div class="modal fade" id="ticket_details">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="d-inline-flex align-items-center">
            Ticket Details <span class="text-primary fs-14 ms-2">#TIC010</span>
          </h5>
          <div class="d-flex align-items-center justify-content-end">
            <span class="badge badge-sm bg-purple d-inline-flex align-items-center me-2"
              ><i class="fa-solid fa-circle fs-5 me-1"></i>Opened</span
            >
            <button
              type="button"
              class="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="isax isax-close-circle5"></i>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-4">
              <div class="mb-3">
                <h6 class="mb-1">Category</h6>
                <p>Mailing Issues</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <h6 class="mb-1">Date</h6>
                <p>26 Jul 2025</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <h6 class="mb-1">Priority</h6>
                <span
                  class="badge bg-soft-danger badge-sm d-inline-flex align-items-center"
                  ><i class="fa-solid fa-circle fs-5 me-1"></i>High</span
                >
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <h6 class="mb-1">Subject</h6>
                <p>Issue with Course Notification Emails</p>
              </div>
            </div>
            <div class="col-lg-12">
              <div>
                <h6 class="mb-1">Description</h6>
                <p>
                  I am not receiving important emails from the LMS platform, such as
                  course notifications, enrollment confirmations, or assignment updates.
                  Additionally, some students have reported that they are not receiving
                  emails about live classes or announcements. This issue is affecting
                  communication and timely updates for both instructors and students.
                  Please investigate and resolve this issue as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Ticket Details -->
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: " ",
      editorConfig: {},
      ErrorSel: ["Select", "Mailing Issue", "Language Issue", "Installation Error"],
      HigtSel: ["Select", "high", "Low", "Medium"],
      ErrorSelEdit: ["Select", "Mailing Issue", "Language Issue", "Installation Error"],
      HigtSelEdit: ["Select", "high", "Low", "Medium"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-tickets");
    },
  },
};
</script>
