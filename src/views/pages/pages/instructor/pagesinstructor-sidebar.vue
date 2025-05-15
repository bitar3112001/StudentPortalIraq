<template>
  <div class="col-lg-3 theiaStickySidebar">
    <div class="stickysidebar">
      <div class="filter-clear">
        <div
          class="clear-filter d-flex align-items-center justify-content-between mb-4 pb-lg-2"
        >
          <h5><i class="feather-filter me-2"></i>التصفية</h5>
          <div class="clear-text">
            <a href="javascript:void(0);" class="clear-text">مسح</a>
          </div>
        </div>
        <div class="accordion accordion-customicon1 accordions-items-seperate">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingcustomicon1One">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsecustomicon1One"
                aria-expanded="true"
                aria-controls="collapsecustomicon1One"
              >
                الفئات <i class="fa-solid fa-chevron-down"></i>
              </button>
            </h2>
            <div
              id="collapsecustomicon1One"
              class="accordion-collapse collapse show"
              aria-labelledby="headingcustomicon1One"
              data-bs-parent="#accordioncustomicon1Example"
              style=""
            >
              <div class="accordion-body">
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Backend (3)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> CSS (2)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Frontend (2)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> General (2)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" checked />
                    <span class="checkmark"></span> IT & Software (2)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Photography (2)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Programming Language (3)
                  </label>
                </div>
                <div>
                  <label class="custom_check mb-0">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Technology (2)
                  </label>
                </div>
                <a href="javascript:void(0);" class="see-more-btn">عرض المزيد</a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingcustomicon1Two">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsecustomicon1Two"
                aria-expanded="true"
                aria-controls="collapsecustomicon1Two"
              >
                المدربون<i class="fa-solid fa-chevron-down"></i>
              </button>
            </h2>
            <div
              id="collapsecustomicon1Two"
              class="accordion-collapse collapse show"
              aria-labelledby="headingcustomicon1Two"
              data-bs-parent="#accordioncustomicon1Example"
            >
              <div class="accordion-body">
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Keny White (10)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Hinata Hyuga (5)
                  </label>
                </div>
                <div>
                  <label class="custom_check">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> John Doe (3)
                  </label>
                </div>
                <div>
                  <label class="custom_check mb-0">
                    <input type="checkbox" name="select_specialist" checked />
                    <span class="checkmark"></span> Nicole Brown
                  </label>
                </div>
                <a href="javascript:void(0);" class="see-more-btn">عرض المزيد</a>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingcustomicon1Three">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsecustomicon1Three"
                aria-expanded="true"
                aria-controls="collapsecustomicon1Three"
              >
                السعر<i class="fa-solid fa-chevron-down"></i>
              </button>
            </h2>
            <div
              id="collapsecustomicon1Three"
              class="accordion-collapse collapse show"
              aria-labelledby="headingcustomicon1Three"
              data-bs-parent="#accordioncustomicon1Example"
            >
              <div class="accordion-body">
                <div>
                  <label class="custom_check custom_one">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> All (10)
                  </label>
                </div>
                <div>
                  <label class="custom_check custom_one">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Free (5)
                  </label>
                </div>
                <div>
                  <label class="custom_check custom_one mb-0">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Paid (3)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingcustomicon1Four">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsecustomicon1Four"
                aria-expanded="true"
                aria-controls="collapsecustomicon1Four"
              >
                النطاق<i class="fa-solid fa-chevron-down"></i>
              </button>
            </h2>
            <div
              id="collapsecustomicon1Four"
              class="accordion-collapse collapse show"
              aria-labelledby="headingcustomicon1Four"
              data-bs-parent="#accordioncustomicon1Example"
            >
              <div class="accordion-body">
                <div class="filter-range">
                  <a-slider v-model:value="value" range />
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingcustomicon1Five">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsecustomicon1Five"
                aria-expanded="true"
                aria-controls="collapsecustomicon1Five"
              >
                المستوى<i class="fa-solid fa-chevron-down"></i>
              </button>
            </h2>
            <div
              id="collapsecustomicon1Five"
              class="accordion-collapse collapse show"
              aria-labelledby="headingcustomicon1Five"
              data-bs-parent="#accordioncustomicon1Example"
            >
              <div class="accordion-body">
                <div>
                  <label class="custom_check custom_one">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span>Beginner (10)
                  </label>
                </div>
                <div>
                  <label class="custom_check custom_one">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span> Intermediate (5)
                  </label>
                </div>
                <div>
                  <label class="custom_check custom_one">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span>Advanced (21)
                  </label>
                </div>
                <div>
                  <label class="custom_check custom_one mb-0">
                    <input type="checkbox" name="select_specialist" />
                    <span class="checkmark"></span>Expert (3)
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
const value = ref([20, 50]);
export default {
  data() {
    return {
      value,
    };
  },
};
</script>
