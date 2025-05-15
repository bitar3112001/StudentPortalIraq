<template>
  <!-- Add Assignment -->
  <div class="modal fade" id="add_assignment">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Add New Assignments</h5>
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
                    >Course <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="Instruass" id="instruass" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Assingment Title <span class="text-danger"> *</span></label
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
                <div class="mb-3">
                  <label class="form-label"
                    >Instructions <span class="text-danger"> *</span></label
                  >
                  <textarea rows="4" class="form-control">Enter Instructions</textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Last Date <span class="text-danger"> *</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                      placeholder=""
                    />
                    <span class="input-icon-addon">
                      <i class="isax isax-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="Statass" id="statass" placeholder="Select" />
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
  <!-- /Add Assignment -->

  <!-- Edit Assignment -->
  <div class="modal fade" id="edit_assignment">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Edit Assignments</h5>
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
                    :options="InstruassEdit"
                    id="instruassedit"
                    placeholder="Information About UI/UX Design Degree"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Assingment Title <span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    value="Building Your First Landing Page"
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
                <div class="mb-3">
                  <label class="form-label"
                    >Instructions <span class="text-danger"> *</span></label
                  >
                  <textarea rows="4" class="form-control">Enter Instructions</textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3 mb-md-0">
                  <label class="form-label"
                    >Last Date <span class="text-danger"> *</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdate"
                      class="form-control datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                      placeholder=""
                    />
                    <span class="input-icon-addon">
                      <i class="isax isax-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="StatassEdit"
                    id="statassedit"
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
            <button class="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Assignment -->

  <!-- Assignment Details -->
  <div class="modal fade" id="view_assignment">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold">Assignments Details</h5>
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
          <div class="mb-4">
            <h6 class="mb-1">Course</h6>
            <p>Introduction to Programming - Python & Java</p>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Title</h6>
            <p>Guest Lecture Announcement</p>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Description</h6>
            <p>
              I am excited to inform you that we will be having a guest lecture from , an
              expert . This will be an excellent opportunity to gain insight into and ask
              any questions you might have. Please make every effort to attend, as
              participation will count towards.
            </p>
          </div>
          <div class="mb-4">
            <h6 class="mb-1">Instructions</h6>
            <p>
              Explain the specific instructions or requirements for the assignment. For
              example, "The assignment should be 3-5 pages long, formatted in APA style.
              You must use at least 5 peer-reviewed articles.
            </p>
          </div>
          <div class="mb-0">
            <h6 class="mb-1">Last Date</h6>
            <p>26 Jul 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Assignment Details -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Assignments</h4>
            <p class="mb-3">Are you sure you want to delete assignments?</p>
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
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Instruass: [
        "Select",
        "Information About UI/UX Design Degree",
        "Wordpress for Beginners - Master Wordpress Quickly",
        "Introduction to Python Programming",
      ],
      Statass: ["Select", "Published", "Draft"],
      InstruassEdit: [
        "Select",
        "Information About UI/UX Design Degree",
        "Wordpress for Beginners - Master Wordpress Quickly",
        "Introduction to Python Programming",
      ],
      StatassEdit: ["Select", "Published", "Draft"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-assignment");
    },
  },
};
</script>
