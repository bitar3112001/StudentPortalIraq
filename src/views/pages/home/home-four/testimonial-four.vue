<template>
  <!-- Testimonial -->
  <section class="testimonial-sec">
    <div class="container">
      <div class="testimonial-two-img">
        <img src="@/assets/img/bg/bg-14.png" alt="Img" class="img-fluid" />
      </div>
      <div class="testimonial-subhead-two">
        <div class="col-md-12" data-aos="fade-down">
          <div class="testimonial-inner">
            <div class="section-header text-center">
              <h2 data-aos="fade-down">Join over 5 Million Students</h2>
              <p>Get certified, master modern tech skills, and level up your career</p>
            </div>
            <div class="row text-center">
              <div class="col-md-4 col-sm-12" data-aos="fade-up">
                <div class="course-count-two course-count border">
                  <h4>
                    <span class="counterUp text-secondary"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="20085"
                        :delay="3"
                        :endAmount="253085"
                        :duration="5"
                        :autoinit="true"
                    /></span>
                  </h4>
                  <p>Students Enrolled</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-12" data-aos="fade-up">
                <div class="course-count-two course-count border">
                  <h4>
                    <span class="counterUp text-success"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="105"
                        :delay="3"
                        :endAmount="1205"
                        :duration="5"
                        :autoinit="true"
                    /></span>
                  </h4>
                  <p>Total Courses</p>
                </div>
              </div>
              <div class="col-md-4 col-sm-12" data-aos="fade-up">
                <div class="course-count-two course-count border">
                  <h4>
                    <span class="counterUp text-primary"
                      ><vue3-autocounter
                        class="counter"
                        ref="counter"
                        :startAmount="20005"
                        :delay="3"
                        :endAmount="253085"
                        :duration="5"
                        :autoinit="true"
                    /></span>
                  </h4>
                  <p>Students Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Testimonial -->

  <!-- Share your knowledge -->
  <div class="knowledge-sec">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-sm-12 ps-0">
          <div class="featured-img-1"></div>
        </div>
        <div class="col-lg-6 col-sm-12 p-0" data-aos="fade-up">
          <div class="joing-group">
            <div class="section-header">
              <h2 class="mb-2">Want to share your knowledge? Join us a Mentor</h2>
            </div>
            <div class="joing-list">
              <ul>
                <li data-aos="fade-bottom">
                  <div class="joing-header">
                    <span class="joing-icon bg-primary">
                      <img
                        src="@/assets/img/icons/joing-01.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                    </span>
                    <div class="joing-content">
                      <h5 class="title">Project Management Professional</h5>
                      <p>
                        A globally recognized certification for project managers, PMP
                        validates your ability to lead projects efficiently from start to
                        finish.
                      </p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-bottom">
                  <div class="joing-header">
                    <span class="joing-icon bg-warning">
                      <img
                        src="@/assets/img/icons/joing-02.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                    </span>
                    <div class="joing-content">
                      <h5 class="title">Fosters Personal Growth</h5>
                      <p>
                        Pursuing certifications pushes you to learn new things and grow
                        professionally, increasing your confidence and job satisfaction.
                      </p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-bottom">
                  <div class="joing-header">
                    <span class="joing-icon bg-success">
                      <img
                        src="@/assets/img/icons/joing-03.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                    </span>
                    <div class="joing-content aos">
                      <h5 class="title">Build skills your way, from labs to courses</h5>
                      <p>
                        Courses come in various formats, including video tutorials,
                        interactive assignments, quizzes, reading materials, and hands-on
                        projects
                      </p>
                    </div>
                  </div>
                </li>
                <li data-aos="fade-bottom" class="mb-0">
                  <div class="joing-header">
                    <span class="joing-icon bg-secondary">
                      <img
                        src="@/assets/img/icons/joing-04.svg"
                        alt="Img"
                        class="img-fluid"
                      />
                    </span>
                    <div class="joing-content aos">
                      <h5 class="title">Get certified with 100+ certification courses</h5>
                      <p>
                        Employers often value certifications when it comes to promotions
                        and internal career advancement opportunities.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Share your knowledge -->
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {};
  },

  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>
