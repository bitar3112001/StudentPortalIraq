<template>
  <!-- Add Announcement -->
  <div class="modal fade" id="add_announcement">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Add New Announcement</h5>
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
                    >Course <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="InstruAnn" id="instruann" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Title <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea
                    class="form-control"
                    placeholder="Enter Description"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="StatInst" id="statinst" placeholder="Select" />
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
  <!-- /Add Announcement -->

  <!-- Edit Announcement -->
  <div class="modal fade" id="edit_announcement">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Edit Announcement</h5>
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
                    >Course <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="InstruAnnEdit"
                    id="instruannedit"
                    placeholder="Information About UI/UX Design Degree"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Announcement Title <span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    value="Welcome to Introduction to Programming"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control">Enter Description</textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="StatInstEdit"
                    id="statinstedit"
                    placeholder="Published"
                  />
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
  <!-- /Edit Announcement -->

  <!-- Announcement Details -->
  <div class="modal fade" id="view_announcement">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Announcement Details</h5>
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
            <h6 class="mb-1">Course</h6>
            <p>Introduction to Programming - Python & Java</p>
          </div>
          <div class="mb-3">
            <h6 class="mb-1">Title</h6>
            <p>Guest Lecture Announcement</p>
          </div>
          <div class="mb-3">
            <h6 class="mb-1">Description</h6>
            <p>
              I am excited to inform you that we will be having a guest lecture from , an
              expert . This will be an excellent opportunity to gain insight into and ask
              any questions you might have. Please make every effort to attend, as
              participation will count towards.
            </p>
          </div>
          <div class="mb-0">
            <h6 class="mb-1">Added On</h6>
            <p>26 Jul 2025, 01:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Announcement Details -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Announcements</h4>
            <p class="mb-3">Are you sure you want to delete announcements?</p>
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
      InstruAnn: [
        "Select",
        "Information About UI/UX Design Degree",
        "Wordpress for Beginners - Master Wordpress Quickly",
        "Introduction to Python Programming",
      ],
      StatInst: ["Select", "Published", "Draft"],
      InstruAnnEdit: [
        "Select",
        "Information About UI/UX Design Degree",
        "Wordpress for Beginners - Master Wordpress Quickly",
        "Introduction to Python Programming",
      ],
      StatInstEdit: ["Select", "Published", "Draft"],
    };
  },
 methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-announcements");
    },
  },
};
</script>
