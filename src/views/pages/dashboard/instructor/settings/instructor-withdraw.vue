<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Settings</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Settings</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <instructor-header></instructor-header>
      <div class="row">
        <!-- Sidebar -->
        <instructor-sidebar></instructor-sidebar>
        <!-- /Sidebar -->

        <div class="col-lg-9">
          <div class="mb-3">
            <h5>Settings</h5>
          </div>
          <instructor-settings-sidebar></instructor-settings-sidebar>
          <form @submit.prevent="submitForm">
            <div class="withdraw-method">
              <h5 class="fs-18 mb-3">Select a withdraw method</h5>
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item mb-3" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Bank Transfer <span>Minimum withdraw $50</span>
                  </button>
                </li>
                <li class="nav-item mb-3" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Stripe<span>Minimum withdraw $50</span>
                  </button>
                </li>
                <li class="nav-item mb-3" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    PayPal<span>Minimum withdraw $50</span>
                  </button>
                </li>
              </ul>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Account Name<span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Account Number<span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Bank Name<span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >IBAN<span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >BIC / SWIFT<span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button class="btn btn-secondary" type="submit">
                        Save Withdrawal Account
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div class="mb-3">
                    <label class="form-label"
                      >Stripe Email Address<span class="text-danger"> *</span></label
                    >
                    <input
                      type="text"
                      class="form-control mb-1"
                      value="test@example.com"
                    />
                    <span class="fs-14"
                      >We will use this email address to send the money to your Stripe
                      account</span
                    >
                  </div>
                  <button class="btn btn-secondary" type="submit">
                    Save Withdrawal Account
                  </button>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div class="mb-3">
                    <label class="form-label"
                      >PayPal Email Address<span class="text-danger"> *</span></label
                    >
                    <input
                      type="text"
                      class="form-control mb-1"
                      value="test@example.com"
                    />
                    <span class="fs-14"
                      >We will use this email address to send the money to your PayPal
                      account</span
                    >
                  </div>
                  <button class="btn btn-secondary" type="submit">
                    Save Withdrawal Account
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
</template>


<script>
export default{
  data(){
    return{

    }
  },
  methods: {
    submitForm() {
      this.$router.push("/instructor/instructor-withdraw");
    },
  },
}
</script>