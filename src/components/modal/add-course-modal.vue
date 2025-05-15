<template>
    <!-- Add topic -->
    <div class="modal fade" id="add-topic">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>Topic Name</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body">
                        <div class="input-block">
                            <label class="form-label">Add Name<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-secondary">Add New</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add topic -->

    <!-- Add lesson -->
    <div class="modal fade" id="add-lesson">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>New Lesson</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body">
                        <div class="input-block mb-4">
                            <label class="form-label">Add Lesson<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="input-block mb-4">
                            <label class="form-label">Video link<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="input-block mb-4">
                            <label class="form-label">Course Description</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="form-check me-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked>
                                <label class="form-check-label" for="flexRadioDefault4">
                                    free
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5">
                                <label class="form-check-label" for="flexRadioDefault5">
                                    Premium
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-secondary">Add New</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add lesson -->

    <!-- Add Faq -->
    <div class="modal fade" id="add-faq">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>New FAQ</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body">
                        <div class="input-block mb-4">
                            <label class="form-label">Question<span class="text-danger ms-1">*</span></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="input-block mb-4">
                            <label class="form-label">Answer<span class="text-danger ms-1">*</span></label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="form-check me-3">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked>
                                <label class="form-check-label" for="flexRadioDefault6">
                                    Enable
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7">
                                <label class="form-check-label" for="flexRadioDefault7">
                                    Disable
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-secondary">Add New</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add Faq -->

    <!-- success -->
    <div class="modal fade modal-default" id="success">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <div class="text-center">
                        <div class="text-success h1 mb-2">
                            <i class="isax isax-tick-circle5"></i>
                        </div>
                        <h5 class="mb-2">Congratulations! Course Submitted</h5>
                        <p class="mb-3">You’ve successfully Submitted the Course & its under the review, Once the course is reviewed by the reviewer it will go live.</p>
                        <div class="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                            <router-link to="/instructor/instructor-dashboard" class="btn btn-secondary">
                                <i class="isax isax-arrow-left-2 me-1"></i>
                                Back to Dashboard
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /success -->
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        submitForm() {
            this.$router.push("/courses/add-course");
        },
    },
}
</script>