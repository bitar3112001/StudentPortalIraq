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
                <div class="mb-3">
                  <label class="form-label">Twitter</label>
                  <div class="position-relative input-icon-start">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.twitter.com/"
                    />
                    <span class="social-icon"
                      ><i class="fa-brands fa-x-twitter fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Facebook</label>
                  <div class="position-relative input-icon-start">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.facebook.com/"
                    />
                    <span class="social-icon"
                      ><i class="fa-brands fa-square-facebook fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Instagram</label>
                  <div class="position-relative input-icon-start">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.instagram.com/"
                    />
                    <span class="social-icon"
                      ><i class="fa-brands fa-instagram fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">LinkedIn</label>
                  <div class="position-relative input-icon-start">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.linkedin.com/"
                    />
                    <span class="social-icon"
                      ><i class="fa-brands fa-linkedin-in fs-14"></i
                    ></span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">YouTube</label>
                  <div class="position-relative input-icon-start">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.youtube.com/"
                    />
                    <span class="social-icon"
                      ><i class="fa-brands fa-youtube fs-14"></i
                    ></span>
                  </div>
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
  <footer-two></footer-two>
  <!-- Delete Modal -->
  <div class="modal fade" id="delete_account">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5>Delete Account</h5>
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
            <h6 class="mb-1">Why Are You Deleting Your Account?</h6>
            <p>
              We're sorry to see you go! To help us improve, please let us know your
              reason for deleting your account
            </p>
          </div>
          <div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-1"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-1">
                No longer using the service
              </label>
              <p>I no longer need this service and won’t be using it in the future.</p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-2"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-2">
                Privacy concerns
              </label>
              <p>
                I am concerned about how my data is handled and want to remove my
                information.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-3"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-3">
                Too many notifications/emails
              </label>
              <p>
                I’m overwhelmed by the volume of notifications or emails and would like to
                reduce them.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-4"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-4">
                Poor user experience
              </label>
              <p>
                I’ve had difficulty using the platform, and it didn’t meet my
                expectations.
              </p>
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                name="reason"
                id="Radio-sm-5"
              />
              <label class="fw-medium form-check-label text-gray-9" for="Radio-sm-5">
                Other (Please specify)
              </label>
            </div>
            <div>
              <textarea rows="3" class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            class="btn bg-gray-100 rounded-pill me-2"
            type="button"
            data-bs-dismiss="modal"
          >
            Keep My Account
          </button>
          <button class="btn btn-secondary rounded-pill" type="button">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Modal -->
</template>

<script>
export default{
  data(){
    return{

    }
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-social-profile");
    },
  },
}
</script>