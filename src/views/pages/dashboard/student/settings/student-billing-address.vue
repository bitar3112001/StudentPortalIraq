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
      <!-- Profile -->
      <student-header></student-header>
      <!-- /Profile -->

      <div class="row">
        <!-- Sidebar -->
        <student-sidebar></student-sidebar>
        <!-- Sidebar -->

        <div class="col-lg-9">
          <div class="mb-3">
            <h5>Settings</h5>
          </div>
          <student-settings-sidebar></student-settings-sidebar>
          <div class="card mb-0">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div
                  class="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3"
                >
                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                    <div>
                      <h6 class="mb-1">
                        Home
                        <span class="badge bg-soft-success ms-1 fs-12 fw-normal"
                          >Default</span
                        >
                      </h6>
                      <p>16 Lake Floyd Circle, Newark, DE 19714</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="btn btn-light btn-sm border me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_billing"
                      ><i class="isax isax-edit-2 me-2"></i>Edit</a
                    >
                    <a
                      href="#"
                      class="btn btn-secondary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="isax isax-trash me-1"></i>Delete</a
                    >
                  </div>
                </div>
                <div
                  class="d-sm-flex align-items-center justify-content-between border-bottom mb-3 pb-3"
                >
                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                    <div>
                      <h6 class="mb-1">Work</h6>
                      <p>33 Hart Country Lane, West Point, GA 31833</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="btn btn-light btn-sm border me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_billing"
                      ><i class="isax isax-edit-2 me-2"></i>Edit</a
                    >
                    <a
                      href="#"
                      class="btn btn-secondary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="isax isax-trash me-1"></i>Delete</a
                    >
                  </div>
                </div>
              </form>
              <div class="mt-4">
                <a
                  href="#"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#add_billing"
                  >Add New Address</a
                >
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
  <student-billing-address-modal></student-billing-address-modal>
</template>

<script>
export default{
  data(){
    return{

    }
  },
  methods: {
    submitForm() {
      this.$router.push("/students/student-change-password");
    },
  },
}
</script>