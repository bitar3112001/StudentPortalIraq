<template>
  <div class="error-box">
    <img src="@/assets/img/error/img-01.svg" alt="img" class="img-fluid bg-01" />
    <img src="@/assets/img/error/img-02.svg" alt="img" class="img-fluid bg-02" />
    <img src="@/assets/img/error/img-03.svg" alt="img" class="img-fluid bg-03" />
    <img src="@/assets/img/error/img-04.svg" alt="img" class="img-fluid bg-04" />
    <img src="@/assets/img/error/img-05.svg" alt="img" class="img-fluid bg-05" />
    <img src="@/assets/img/error/img-06.svg" alt="img" class="img-fluid bg-06" />
    <div class="error-logo">
      <router-link to="/home/">
        <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
      </router-link>
    </div>
    <div class="error-box-img">
      <img src="@/assets/img/error/error-03.svg" alt="Img" class="img-fluid" />
    </div>
    <h3 class="h2 mb-3">
      The Website is Under<span class="text-secondary ms-1"> Construction</span>
    </h3>
    <p class="h4 font-weight-normal">
      We are working on fixing the problem. We back soon
    </p>
    <router-link to="/home/" class="btn back-to-home-btn d-inline-flex align-items-center"
      ><i class="isax isax-arrow-left-2 me-1"></i> Back to Home</router-link
    >
  </div>
</template>
<script>
import { defineComponent, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "ErrorPage",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const isErrorPage = computed(() => route.name === "under-construction");

    watchEffect(() => {
      if (isErrorPage.value) {
        document.body.classList.add("error-page");
      } else {
        document.body.classList.remove("error-page");
      }
    });
    router.beforeEach((to, from, next) => {
      if (from.name === "under-construction") {
        document.body.classList.remove("error-page");
      }
      next();
    });

    return { isErrorPage };
  },
});
</script>
