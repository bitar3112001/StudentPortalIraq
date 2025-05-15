<template>
  <!-- View Invoice -->
  <div class="modal fade" id="withdraw_request">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Withdrawal Request</h5>
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
            <div class="card withdraw-item">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                      <p class="mb-1">Withdrawal Balance</p>
                      <h6>$15000</h6>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <p class="mb-1">Selected</p>
                      <h6>PayPal</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Amount <span class="text-danger"> *</span></label>
              <input type="text" class="form-control" placeholder="$" />
              <p class="d-flex align-items-center pt-1">
                <i class="isax isax-info-circle me-1"></i>
                Minimum withdraw amount is $50
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn bg-gray-100 rounded-pill me-2" data-bs-dismiss="modal"
              >Cancel</a
            >
            <button class="btn btn-secondary rounded-pill" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /View Invoice -->
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-referral");
    },
  },
}
</script>