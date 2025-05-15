<template>
  <!-- Add Billing -->
  <div class="modal fade" id="add_billing">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Add Billing Address</h5>
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
                    >Title <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Address <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Country <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="UnitSel" id="unitsel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >State <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="TexasSel" id="texassel" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >City <span class="text-danger"> *</span></label
                  >
                  <vue-select :options="LosSelan" id="losselan" placeholder="Select" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Postal Code <span class="text-danger"> *</span></label
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
            <button class="btn btn-secondary rounded-pill" type="submit">
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Billing -->

  <!-- Edit Billing -->
  <div class="modal fade" id="edit_billing">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Edit Billing Address</h5>
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
                    >Title <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="Home" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Address <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="16 Lake Floyd Circle" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Country <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="UnitSelEdit"
                    id="unitseledit"
                    placeholder="United states of America"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >State <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="TexasSelEdit"
                    id="texasseledit"
                    placeholder="California"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >City <span class="text-danger"> *</span></label
                  >
                  <vue-select
                    :options="LosSelanEdit"
                    id="losselanedit"
                    placeholder="Los Angeles"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Postal Code <span class="text-danger"> *</span></label
                  >
                  <input type="text" class="form-control" value="90001" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-check form-check-md my-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultaccount"
                  />
                  <label class="form-check-label" for="defaultaccount"
                    >Yes, I'd like to delete my account</label
                  >
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
  <!-- /Edit Billing -->

  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Delete Address</h4>
            <p class="mb-3">Are you sure you want to delete address?</p>
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
export default {
  data() {
    return {
      UnitSel: ["Select", "United States of America", "Canada", "Germany"],
      TexasSel: ["Select", "California", "New York", "Texas"],
      LosSelan: ["Select", "Los Angeles", "San Diego", "Fresno"],
      UnitSelEdit: ["Select", "United States of America", "Canada", "Germany"],
      TexasSelEdit: ["Select", "California", "New York", "Texas"],
      LosSelanEdit: ["Select", "Los Angeles", "San Diego", "Fresno"],
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-billing-address");
    },
  },
};
</script>
