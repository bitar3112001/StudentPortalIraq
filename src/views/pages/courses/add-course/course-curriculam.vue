<template>
    <div class="title">
        <div class="row align-items-center row-gap-2">
            <div class="col-md-6">
                <h5 class="mb-0">Curriculum</h5>
            </div>
            <div class="col-md-6 text-md-end">
                <a href="javascript:void(0);" class="btn add-edit-btn d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-topic"><i class="isax isax-add-circle5 me-1"></i> Add New Topic</a>
            </div>
        </div>
    </div>
    <div>
        <div class="accordions-items-seperate" id="accordionSpacingExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSpacingOne">
                    <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#SpacingOne" aria-expanded="false" aria-controls="SpacingOne">
                        <span class="d-flex align-items-center mb-0"><i class="isax isax-menu-15 me-2"></i>Introduction of Digital Marketing</span>
                    </a>
                </h2>
                <div id="SpacingOne" class="accordion-collapse collapse show" aria-labelledby="headingSpacingOne" data-bs-parent="#accordionSpacingExample">
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
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn add-edit-btn d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-lesson"><i class="isax isax-add-circle5 me-2"></i>Add Lesson</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSpacingTwo">
                    <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#SpacingTwo" aria-expanded="false" aria-controls="SpacingTwo">
                            <span class="d-flex align-items-center mb-0">
                                <i class="isax isax-menu-15 me-2"></i>
                                Installing Development Software
                            </span>
                    </a>
                </h2>
                <div id="SpacingTwo" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo" data-bs-parent="#accordionSpacingExample">
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
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-lesson"><i class="isax isax-add-circle5 me-2"></i>Add Lesson</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSpacingThree">
                    <a href="javascript:void(0);" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#SpacingThree" aria-expanded="false" aria-controls="SpacingThree">
                        <span class="d-flex align-items-center mb-0">
                            <i class="isax isax-menu-15 me-2"></i>
                            Hello World Project from GitHub
                        </span>
                    </a>
                </h2>
                <div id="SpacingThree" class="accordion-collapse collapse" aria-labelledby="headingSpacingThree" data-bs-parent="#accordionSpacingExample">
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
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="btn btn-primary d-inline-flex align-items-center" data-bs-toggle="modal" data-bs-target="#add-lesson"><i class="isax isax-add-circle5 me-2"></i>Add Lesson</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>