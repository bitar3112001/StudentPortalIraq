<template>
  <!-- Counter Five-->
  <section class="counter-section-five">
    <div class="container">
      <div class="row align-items-center text-center justify-content-between">
        <!-- col -->
        <div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
          <div class="count-five">
            <div class="count-content-five course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="145"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p class="mb-0">Expert Tutors</p>
            </div>
          </div>
        </div>
        <!--/ col -->

        <!-- col -->
        <div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
          <div class="count-five">
            <div class="count-content-five course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="2495"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p class="mb-0">Cetified Courses</p>
            </div>
          </div>
        </div>
        <!--/ col -->

        <!-- col -->
        <div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
          <div class="count-five">
            <div class="count-content-five course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="20"
                    :duration="5"
                    :autoinit="true" /></span
                >+
              </h4>
              <p class="mb-0">Online students</p>
            </div>
          </div>
        </div>
        <!--/ col -->

        <!-- col -->
        <div class="col-lg-3 col-md-3 col-sm-12" data-aos="fade-down">
          <div class="count-five count-five-last count-five-0">
            <div class="count-content-five course-count ms-0">
              <h4>
                <span class="counterUp"
                  ><vue3-autocounter
                    class="counter"
                    ref="counter"
                    :startAmount="0"
                    :delay="3"
                    :endAmount="58370"
                    :duration="5"
                    :autoinit="true"
                /></span>
              </h4>
              <p class="mb-0">Online Courses</p>
            </div>
          </div>
        </div>
        <!--/ col -->
      </div>
    </div>
  </section>
  <!-- /Counter Five-->
</template>
