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
      <!-- profile box -->
      <student-header></student-header>
      <!-- profile box -->
      <div class="row">
        <!-- sidebar -->
        <student-sidebar></student-sidebar>
        <!-- sidebar -->
        <div class="col-lg-9">
          <div class="mb-3">
            <h5>Settings</h5>
          </div>

          <student-settings-sidebar></student-settings-sidebar>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <form @submit.prevent="submitForm">
                    <div class="mb-3">
                      <label class="form-label">Twitter</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.twitter.com/"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Facebook</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Instagram</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.instagram.com/"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">LinkedIn</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.linkedin.com/"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">YouTube</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.youtube.com/"
                      />
                    </div>
                    <div class="mt-4">
                      <button class="btn btn-secondary" type="submit">
                        Save Social Profile
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
  <!-- Delete Modal -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-center custom-modal-body">
          <span class="avatar avatar-lg bg-secondary-transparent rounded-circle mb-2">
            <i class="isax isax-trash fs-24 text-danger"></i>
          </span>
          <div>
            <h4 class="mb-2">Remove All</h4>
            <p class="mb-3">Are you sure you want to remove all from wishlist?</p>
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
export default{
  methods: {
    submitForm() {
      this.$router.push("/students/student-social-profile");
    },
  },
}
</script>
