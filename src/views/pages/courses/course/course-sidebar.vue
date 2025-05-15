<template>
    <div class="col-lg-3 theiaStickySidebar">
        <div class="stickysidebar">
            <div class="filter-clear">
                <div class="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
                    <h5><i class="feather-filter me-2"></i>التصفية</h5>
                    <a href="javascript:void(0);" class="clear-text">
                        مسح
                    </a>
                </div>

                <div class="accordion accordion-customicon1 accordions-items-seperate">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1One">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1One" aria-expanded="false" aria-controls="collapsecustomicon1One">
                            الفئات <i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1One" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example" style="">
                            <div class="accordion-body">
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> الخلفية (3)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> CSS (2)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> الواجهة الأمامية (2)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> عام (2)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" checked>
                                        <span class="checkmark"></span> تكنولوجيا المعلومات والبرمجيات (2)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> التصوير الفوتوغرافي (2)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> لغات البرمجة (3)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> التكنولوجيا (2)
                                    </label>
                                </div>
                                <a href="javascript:void(0);" class="see-more-btn">عرض المزيد</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Two">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Two" aria-expanded="false" aria-controls="collapsecustomicon1Two">
                            المدربون<i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Two" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> كيني وايت (10)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> هيناتا هيوغا (5)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> جون دو (3)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="select_specialist" checked>
                                        <span class="checkmark"></span> نيكول براون
                                    </label>
                                </div>
                                <a href="javascript:void(0);" class="see-more-btn">عرض المزيد</a>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Three">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Three" aria-expanded="false" aria-controls="collapsecustomicon1Three">
                            السعر<i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Three" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> الكل (10)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> مجاني (5)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one mb-0">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span> مدفوع (3)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Four">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Four" aria-expanded="false" aria-controls="collapsecustomicon1Four">
                            النطاق<i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Four" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Four" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <div class="filter-range">
                                    <a-slider v-model:value="value" range />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Five">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Five" aria-expanded="false" aria-controls="collapsecustomicon1Five">
                            المستوى<i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Five" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Five" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span>مبتدئ (10)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span> متوسط (5)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span>متقدم (21)
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one mb-0">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span>خبير (3)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingcustomicon1Six">
                            <a href="#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapsecustomicon1Six" aria-expanded="false" aria-controls="collapsecustomicon1Six">
                            التقييمات <i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </h2>
                        <div id="collapsecustomicon1Six" class="accordion-collapse collapse show" aria-labelledby="headingcustomicon1Six" data-bs-parent="#accordioncustomicon1Example">
                            <div class="accordion-body">
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist" >
                                        <span class="checkmark"></span>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-light"></i>
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light"></i>
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light"></i>
                                    </label>
                                </div>
                                <div>
                                    <label class="custom_check custom_one mb-0">
                                        <input type="checkbox" name="select_specialist">
                                        <span class="checkmark"></span>
                                        <i class="fa-solid fa-star text-warning me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light me-1"></i>
                                        <i class="fa-solid fa-star text-light"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
const value = ref([10, 50]);
export default {
  data() {
    return {
      value,
    };
  },
};
</script>