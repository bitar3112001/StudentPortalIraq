<template>
  <div class="subsribe-section">
    <div class="container position-relative">
      <img
        src="@/assets/img/icons/banner-icon-03.svg"
        alt="img"
        class="img-fluid bg-05 d-none d-lg-flex"
      />
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-section">
            <div class="mb-4 aos" data-aos="fade-up">
              <h2 class="text-white mb-1">تحويل الوصول إلى التعليم</h2>
              <p class="text-light fs-16">
                أنشئ حسابًا لتلقي النشرة الإخبارية لدينا، وتوصيات الدورات، والعروض الترويجية.
              </p>
            </div>
            <form action="#" class="subcribe-form">
              <span>
                <i class="isax isax-message-text"></i>
              </span>
              <input type="email" placeholder="عنوان البريد الإلكتروني" class="form-control" />
              <button type="submit" class="btn btn-secondary btn-xl">اشترك</button>
            </form>
          </div>
        </div>
        <div class="col-lg-6 position-relative">
          <img
            src="@/assets/img/bg/subscribe-bg-01.png"
            alt="img"
            class="img-fluid bg-01 d-none d-lg-flex aos"
            data-aos="fade-down"
          />
          <img
            src="@/assets/img/feature/feature-22.png"
            alt="img"
            class="img-fluid bg-02 d-none d-lg-flex aos"
            data-aos="fade-down"
          />
          <img
            src="@/assets/img/icons/subscribe-icon-02.svg"
            alt="img"
            class="img-fluid bg-03 d-none d-lg-flex"
          />
          <img
            src="@/assets/img/icons/subscribe-icon-01.svg"
            alt="img"
            class="img-fluid bg-04 d-none d-lg-flex"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import feature_section from "@/assets/json/feature-section.json";

import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      feature_section: feature_section,
    };
  },
  setup() {
    return {
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },

      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
    };
  },
};
</script>
