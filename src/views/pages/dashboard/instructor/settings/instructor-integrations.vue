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
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div
                  class="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3"
                >
                  <div class="meet-icon me-3 flex-shrink-0">
                    <img src="@/assets/img/icons/meet-icon-1.svg" alt="img" />
                  </div>
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div>
                      <h6 class="mb-1">Zoom Meeting</h6>
                      <p class="small">
                        A virtual platform for real-time video, audio, and screen-sharing
                        collaboration.
                      </p>
                    </div>
                    <div class="form-check form-switch form-check-md mb-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="checkZoom"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Client ID <span class="text-danger"> *</span></label
                      >
                      <input type="text" class="form-control" value="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Client Secret Key <span class="text-danger"> *</span></label
                      >
                      <input type="text" class="form-control" value="" />
                    </div>
                  </div>
                </div>
                <hr class="mb-4 mt-1" />
                <div
                  class="d-flex align-items-center justify-content-between border mb-3 p-3 rounded-3"
                >
                  <div class="meet-icon me-3 flex-shrink-0">
                    <img src="@/assets/img/icons/meet-icon-2.svg" alt="img" />
                  </div>
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div>
                      <h6 class="mb-1">Google Meet</h6>
                      <p class="small">
                        A video conferencing platform for seamless virtual meetings,
                        collaboration, and screen sharing.
                      </p>
                    </div>
                    <div class="form-check form-switch form-check-md mb-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="checkGoogle"
                        checked
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Client ID <span class="text-danger"> *</span></label
                      >
                      <input type="text" class="form-control" value="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label"
                        >Client Secret Key <span class="text-danger"> *</span></label
                      >
                      <input type="text" class="form-control" value="" />
                    </div>
                  </div>
                </div>
                <a href="#" class="btn btn-secondary">Save Changes</a>
              </form>
            </div>
          </div>
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
      this.$router.push("/instructor/instructor-settings");
    },
  },
}
</script>