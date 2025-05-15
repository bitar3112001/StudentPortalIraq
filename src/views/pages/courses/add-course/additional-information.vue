<template>
    <div class="title">
        <div class="row align-items-center row-gap-3">
            <div class="col-md-9">
                <h5 class="mb-0">FAQ’s</h5>
            </div>
            <div class="col-md-3 text-end">
                <a href="javascript:void(0);" class="btn add-edit-btn d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-faq"><i class="isax isax-add-circle5 me-1"></i> Add New</a>
            </div>
        </div>
    </div>
    <div class="pb-3 border-bottom mb-3">
        <div class="accordions-items-seperate" id="accordionSpacingExample1">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSpacingFour">
                    <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#Spacingthree" aria-expanded="false" aria-controls="Spacingthree">
                        <span class="d-flex align-items-center text-gray-9 mb-0">
                            <i class="isax isax-menu-15 me-2"></i>
                            Hello World Project from GitHub
                        </span>
                    </a>
                </h2>
                <div id="Spacingthree" class="accordion-collapse collapse" aria-labelledby="headingSpacingFour" data-bs-parent="#accordionSpacingExample1">
                    <div class="accordion-body">
                        <div class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-3">
                            <div class="d-flex align-items-center">
                                <span><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                <p class="fw-medium text-gray-5 mb-0">Describe SEO Engine</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="edit-btn1"><i class="isax isax-edit-25 fs-16"></i></a>
                                <a href="javascript:void(0);" class="delete-btn1"><i class="isax isax-trash fs-16"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-3">
                            <div class="d-flex align-items-center">
                                <span><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                <p class="fw-medium text-gray-5 mb-0">Know about all marketing</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="edit-btn1"><i class="isax isax-edit-25 fs-16"></i></a>
                                <a href="javascript:void(0);" class="delete-btn1"><i class="isax isax-trash fs-16"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSpacingFive">
                    <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#Spacingone" aria-expanded="false" aria-controls="Spacingone">
                        <span class="d-flex align-items-center text-gray-9">
                            <i class="isax isax-menu-15 me-2"></i>
                            New Update
                        </span>
                    </a>
                </h2>
                <div id="Spacingone" class="accordion-collapse collapse" aria-labelledby="headingSpacingFive" data-bs-parent="#accordionSpacingExample">
                    <div class="accordion-body">
                        <div class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-3">
                            <div class="d-flex align-items-center">
                                <span><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                <p class="fw-medium text-gray-5 mb-0">Describe SEO Engine</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="edit-btn1"><i class="isax isax-edit-25 fs-16"></i></a>
                                <a href="javascript:void(0);" class="delete-btn1"><i class="isax isax-trash fs-16"></i></a>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-3">
                            <div class="d-flex align-items-center">
                                <span><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                <p class="fw-medium text-gray-5 mb-0">Know about all marketing</p>
                            </div>
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="edit-btn1"><i class="isax isax-edit-25 fs-16"></i></a>
                                <a href="javascript:void(0);" class="delete-btn1"><i class="isax isax-trash fs-16"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pb-3 border-bottom mb-3">
        <div class="input-block mb-0">
            <label class="form-label">Tags</label>
            <vue3-tags-input type="text" :tags="tags" class="input-tags form-control" placeholder="input tags" />
            <span class="fs-13 text-gray-6 mt-1 d-block">Maximum of 14 keywords. Keywords should all be in lowercase. e.g. javascript, react, marketing</span>
        </div>
    </div>
    <div class="input-block">
        <label class="form-label">Message to a reviewer</label>
        <textarea class="form-control"></textarea>
    </div>
    <div class="d-flex align-items-center">
        <div class="form-check form-check-md d-flex align-items-center">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label ms-2" for="flexCheckChecked">
                Any images, sounds, or other assets that are not my own work, have been appropriately licensed for use in the file preview or main course. Other than these items, this work is entirely my own and I have full rights to sell it here.
            </label>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Vue3TagsInput from 'vue3-tags-input';

export default defineComponent({
    components: {
        Vue3TagsInput
    },

    data() {
        return {
            tags: ['red', 'black']
        }
    },
})
</script>