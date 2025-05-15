<template>
  <div class="home-six">
    <layouts-header></layouts-header>
    <banner-six></banner-six>
    <course-six></course-six>
    <counter-six></counter-six>
    <feature-six></feature-six>
    <master-six></master-six>
    <experience-six></experience-six>
    <share-six></share-six>
    <testimonial-six></testimonial-six>
    <blogs-six></blogs-six>
    <footer-six></footer-six>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/course-list");
    },
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
