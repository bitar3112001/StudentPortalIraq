<template>
  <div class="error-box coming-soon-content">
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
    <div class="coming-soon-topic">
      <h3 class="h2 mb-3">
        We are Coming<span class="text-secondary ms-1"> Soon!!!</span>
      </h3>
      <p>Stay tuned for something amazing</p>
    </div>
    <ul class="coming-soon-timer">
      <li><span class="days">54</span>days</li>
      <li class="seperate-dot"></li>
      <li><span class="hours">10</span>Hrs</li>
      <li class="seperate-dot"></li>
      <li><span class="minutes">47</span>Min</li>
      <li class="seperate-dot"></li>
      <li><span class="seconds">00</span>Sec</li>
    </ul>
    <div class="error-box-img coming-soon-img">
      <img src="@/assets/img/error/coming-soon.svg" alt="Img" class="img-fluid" />
    </div>
    <form class="mt-5">
      <b>Notify me when the website is launched</b>
      <div class="bg-white border rounded-2 p-2 mt-2 mb-3">
        <div class="input-group">
          <input
            class="form-control focus-shadow-none border-0 me-1"
            type="email"
            placeholder="Enter your email"
          />
          <button type="button" class="btn btn-secondary rounded-2 mb-0">
            Notify Me!
          </button>
        </div>
      </div>
    </form>
    <div class="d-flex align-items-center justify-content-center">
      <a
        href="javascript:void(0);"
        class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"
        ><i class="fa-brands fa-facebook-f"></i
      ></a>
      <a
        href="javascript:void(0);"
        class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"
        ><i class="fa-brands fa-instagram"></i
      ></a>
      <a
        href="javascript:void(0);"
        class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center me-2"
        ><i class="fa-brands fa-x-twitter"></i
      ></a>
      <a
        href="javascript:void(0);"
        class="coming-soon media-btn rounded-circle d-inline-flex align-items-center justify-content-center"
        ><i class="fa-brands fa-linkedin-in"></i
      ></a>
    </div>
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

    const isErrorPage = computed(() => route.name === "coming-soon");

    watchEffect(() => {
      if (isErrorPage.value) {
        document.body.classList.add("error-page", "comming-soon-pg");
      } else {
        document.body.classList.remove("error-page", "comming-soon-pg");
      }
    });
    router.beforeEach((to, from, next) => {
      if (from.name === "coming-soon") {
        document.body.classList.remove("error-page", "comming-soon-pg");
      }
      next();
    });

    return { isErrorPage };
  },
});
</script>
