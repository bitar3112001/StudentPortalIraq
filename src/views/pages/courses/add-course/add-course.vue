<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Add New Course</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><router-link to="/home/index">Home</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Add New Course</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Course add -->
    <div class="content">
        <div class="container">            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="add-course-item">
                        <div class="wizard">
                            <ul class="form-wizard-steps" id="progressbar2" v-show="currentStep === 1">
                                <li class="progress-active">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">01</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Information</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">02</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Media</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">03</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Curriculam</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">04</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Additional information</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">05</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Pricing</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="form-wizard-steps" id="progressbar2" v-show="currentStep === 2">
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">01</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Information</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-active">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">02</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Media</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">03</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Curriculam</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">04</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Additional information</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">05</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Pricing</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="form-wizard-steps" id="progressbar2" v-show="currentStep === 3">
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">01</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Information</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">02</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Media</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-active">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">03</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Curriculam</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">04</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Additional information</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">05</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Pricing</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="form-wizard-steps" id="progressbar2" v-show="currentStep === 4">
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">01</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Information</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">02</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Media</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">03</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Curriculam</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-active">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">04</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Additional information</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">05</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Pricing</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="form-wizard-steps" id="progressbar2" v-show="currentStep === 5">
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">01</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Information</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">02</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Course Media</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">03</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Curriculam</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-activated">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">04</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Additional information</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="progress-active">
                                    <div class="profile-step">
                                        <span class="dot-active mb-2">
                                            <span class="number">05</span>
                                            <span class="tickmark"><i class="fa-solid fa-check"></i></span>
                                        </span>
                                        <div class="step-section">
                                            <p>Pricing</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="initialization-form-set">
                            <fieldset class="form-inner wizard-form-card" id="first" v-if="currentStep === 1">
                                <course-information></course-information>
                                <div class="add-form-btn widget-next-btn submit-btn d-flex justify-content-end mb-0">
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" @click="nextStep" :disabled="currentStep === totalSteps" class="btn main-btn next_btns">Next 
                                            <i class="isax isax-arrow-right-3 ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-inner wizard-form-card" v-if="currentStep === 2">
                                <course-media></course-media>
                                <div class="add-form-btn widget-next-btn submit-btn">
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-light main-btn prev_btns d-flex align-items-center" 
                                            @click="previousStep" :disabled="currentStep === 1">
                                            <i class="isax isax-arrow-left-2 me-1"></i>Prev
                                        </a>
                                    </div>
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-secondary main-btn next_btns d-flex align-items-center"
                                            @click="nextStep" :disabled="currentStep === totalSteps">
                                            Next <i class="isax isax-arrow-right-3 ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-inner wizard-form-card" v-if="currentStep === 3">
                                <course-curriculam></course-curriculam>
                                <div class="add-form-btn widget-next-btn submit-btn">
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-light main-btn prev_btns"
                                            @click="previousStep" :disabled="currentStep === 2">
                                            <i class="isax isax-arrow-left-2 me-1"></i>
                                            Prev
                                        </a>
                                    </div>
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-secondary main-btn next_btns"
                                            @click="nextStep" :disabled="currentStep === totalSteps">
                                            Next 
                                            <i class="isax isax-arrow-right-3 ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-inner wizard-form-card" v-if="currentStep === 4">
                                <additional-information></additional-information>
                                <div class="add-form-btn widget-next-btn submit-btn">
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-light main-btn prev_btns"
                                            @click="previousStep" :disabled="currentStep === 3">
                                            <i class="isax isax-arrow-left-2 me-1"></i>
                                            Prev
                                        </a>
                                    </div>
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-secondary main-btn next_btns"
                                            @click="nextStep" :disabled="currentStep === totalSteps">
                                            Next <i class="isax isax-arrow-right-3 ms-1"></i>
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="form-inner wizard-form-card" v-if="currentStep === 5">
                                <course-pricing></course-pricing>
                                <div class="add-form-btn widget-next-btn submit-btn">
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-light main-btn prev_btns" 
                                            @click="previousStep" :disabled="currentStep === 4">
                                            <i class="isax isax-arrow-left-2 me-1"></i>Prev
                                        </a>
                                    </div>
                                    <div class="btn-left">
                                        <a href="javascript:void(0);" class="btn btn-secondary main-btn next_btns" 
                                            data-bs-toggle="modal" data-bs-target="#success">
                                            Submit Course
                                        </a>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>			
            </div>			
        </div>	
    </div>
    <!-- /Course watch -->

    <add-course-modal></add-course-modal>

    <footer-two></footer-two>

</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      totalSteps: 5,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    showProgress(step) {
      return this.currentStep === step;
    },
  },
};
</script>

