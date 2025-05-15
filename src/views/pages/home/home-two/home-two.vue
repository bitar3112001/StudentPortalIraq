<template>
  <layouts-header></layouts-header>
  <!-- Banner section -->
  <banner-section></banner-section>
  <!-- /Banner section -->

  <!-- favorite  section -->
  <favourite-section></favourite-section>
  <!-- /favorite  section -->

  <!-- our benefits -->
  <benefits-section></benefits-section>
  <!-- /our benefits -->

  <!-- whats new -->
  <feature-section></feature-section>
  <!-- /whats new -->

  <!-- counter trending section -->
  <counter-section></counter-section>
  <!-- /counter trending section -->

  <!-- subscribe section -->
  <subscribe-section></subscribe-section>
  <!-- /subscribe section -->

  <!-- master skill -->
  <master-section></master-section>
  <!-- /master skill -->

  <!-- client -->
  <client-section></client-section>
  <!-- /client -->

  <!-- about us -->
  <about-section></about-section>
  <!-- /about us -->

  <!-- faq -->
  <faq-section></faq-section>
  <!-- faq -->

  <!-- blog section -->
  <blog-section></blog-section>
  <!-- /blog section -->

  <!-- Footer -->
  <footer-two></footer-two>
  <!-- /Footer -->
</template>
<script>
import AOS from "aos";
export default {
  mounted() {
    AOS.refresh();
  },
};
</script>
