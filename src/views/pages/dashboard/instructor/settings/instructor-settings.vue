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
            <div class="card">
              <div class="card-body">
                <div class="profile-upload-group">
                  <div class="d-flex align-items-center">
                    <router-link
                      to="/students/student-profile"
                      class="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3"
                      ><img
                        src="@/assets/img/user/user-01.jpg"
                        alt="Img"
                        class="img-fluid"
                    /></router-link>
                    <div class="profile-upload-head">
                      <h6>
                        <router-link to="/students/student-profile"
                          >Your Avatar</router-link
                        >
                      </h6>
                      <p class="fs-14 mb-0">
                        PNG or JPG no bigger than 800px width and height
                      </p>
                      <div class="new-employee-field">
                        <div class="d-flex align-items-center mt-2">
                          <div class="image-upload position-relative mb-0 me-2">
                            <input type="file" />
                            <a
                              href="#"
                              class="btn bg-gray-100 btn-sm rounded-pill image-uploads"
                              >Upload</a
                            >
                          </div>
                          <div class="img-delete">
                            <a href="#" class="btn btn-secondary btn-sm rounded-pill"
                              >Delete</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="edit-profile-info mb-3">
                    <h5 class="mb-1 fs-18">Personal Details</h5>
                    <p>Edit your personal information</p>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >First Name <span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" value="Eugene" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Last Name <span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" value="Andre" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >User Name <span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" value="instructordemo" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Phone Number <span class="text-danger"> *</span></label
                        >
                        <input type="text" class="form-control" value="90154-91036" />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="mb-4">
                        <label class="form-label"
                          >Bio <span class="text-danger"> *</span></label
                        >
                        <textarea rows="4" class="form-control">
I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices.</textarea
                        >
                      </div>
                    </div>
                    <div class="mt-3 mb-3">
                      <h5 class="mb-1 fs-18">Educational Details</h5>
                      <p>Edit your Educational information</p>
                    </div>
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-xl-7">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >Degree<span class="text-danger"> *</span></label
                                >
                                <input type="text" class="form-control" value="" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >University<span class="text-danger"> *</span></label
                                >
                                <input type="text" class="form-control" value="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-5">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >From Date<span class="text-danger"> *</span></label
                                >
                                <div class="input-icon position-relative calender-input">
                                  <span class="input-icon-addon">
                                    <i class="isax isax-calendar"></i>
                                  </span>
                                  <date-picker
                                    v-model="startdate"
                                    class="form-control datetimepicker"
                                    :editable="true"
                                    :clearable="false"
                                    :input-format="dateFormat"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >To Date<span class="text-danger"> *</span></label
                                >
                                <div class="input-icon position-relative calender-input">
                                  <span class="input-icon-addon calender-input">
                                    <i class="isax isax-calendar"></i>
                                  </span>
                                  <date-picker
                                    v-model="startdateOne"
                                    class="form-control datetimepicker"
                                    :editable="true"
                                    :clearable="false"
                                    :input-format="dateFormat"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center text-secondary fw-medium mb-3"
                        id="add-new-topic-btn"
                      >
                        <i class="isax isax-add me-1"></i> Add New
                      </a>
                    </div>
                    <div class="mt-3 mb-3">
                      <h5 class="mb-1 fs-18">Experience</h5>
                      <p>Edit your Experience</p>
                    </div>
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-xl-7">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >Company<span class="text-danger"> *</span></label
                                >
                                <input type="text" class="form-control" value="" />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >Position<span class="text-danger"> *</span></label
                                >
                                <input type="text" class="form-control" value="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-5">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >From Date<span class="text-danger"> *</span></label
                                >
                                <div class="input-icon position-relative calender-input">
                                  <span class="input-icon-addon">
                                    <i class="isax isax-calendar"></i>
                                  </span>
                                  <date-picker
                                    v-model="startdateTwo"
                                    class="form-control datetimepicker"
                                    :editable="true"
                                    :clearable="false"
                                    :input-format="dateFormat"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >To Date<span class="text-danger"> *</span></label
                                >
                                <div class="input-icon position-relative calender-input">
                                  <span class="input-icon-addon calender-input">
                                    <i class="isax isax-calendar"></i>
                                  </span>
                                  <date-picker
                                    v-model="startdateThree"
                                    class="form-control datetimepicker"
                                    :editable="true"
                                    :clearable="false"
                                    :input-format="dateFormat"
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center text-secondary fw-medium mb-3"
                        id="add-new-topic-btn2"
                      >
                        <i class="isax isax-add me-1"></i> Add New
                      </a>
                    </div>
                    <div class="col-md-12">
                      <button class="btn btn-secondary rounded-pill" type="submit">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-0">
              <div class="card-body">
                <h5 class="fs-18 mb-3">Delete Account</h5>
                <h6 class="mb-1">Are you sure you want to delete your account?</h6>
                <p class="mb-3">
                  Refers to the action of permanently removing a user's account and
                  associated data from a system, service and platform.
                </p>
                <a
                  href="#"
                  class="btn btn-secondary"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_account"
                  >Delete Account</a
                >
              </div>
            </div>
          </form>
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
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
      FemaSel: ["Select", "Male", "Female"],
    };
  },
  submitForm() {
    this.$router.push("/instructor/instructor-settings");
  },
};
</script>
