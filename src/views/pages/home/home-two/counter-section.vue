<template>
  <section class="counter-trending-cover" dir="rtl">
    <div class="container">
      <div class="counter-section">
        <div class="section-header text-center aos" data-aos="fade-up">
          <h2 class="text-white">حقق أهدافك مع منصة احتراف</h2>
          <p class="text-light">
            96٪ من عملاء التعلم الإلكتروني للأعمال يرون نتائج محسنة خلال ستة أشهر.
          </p>
        </div>
        <div class="row row-gap-4">
          <div class="col-md-6 col-lg-3 d-flex">
            <div class="counter-item text-center flex-fill" data-aos="fade-up">
              <h2 class="text-white">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="200"
                  :delay="3"
                  :endAmount="253085"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <p class="text-white">طالب مسجل حول العالم</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex">
            <div class="counter-item text-center flex-fill" data-aos="fade-up">
              <h2 class="text-white">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="200"
                  :delay="3"
                  :endAmount="1205"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <p class="text-white">إجمالي الدورات على منصتنا</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex">
            <div class="counter-item aos text-center flex-fill" data-aos="fade-up">
              <h2 class="text-white">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="200"
                  :delay="3"
                  :endAmount="56"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <p class="text-white">دولة من طلابنا</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex">
            <div
              class="counter-item no-border aos text-center flex-fill"
              data-aos="fade-up"
            >
              <h2 class="text-white">
                <vue3-autocounter
                  class="counter"
                  ref="counter"
                  :startAmount="200"
                  :delay="3"
                  :endAmount="968"
                  :duration="5"
                  :autoinit="true"
                />
              </h2>
              <p class="text-white">مدرب خبير من مختلف المجالات</p>
            </div>
          </div>
        </div>
        <img
          src="@/assets/img/bg/count-icon.png"
          alt="img"
          class="img-fluid counter-bg-01 d-none d-lg-flex"
        />
        <img
          src="@/assets/img/icons/banner-icon-03.svg"
          alt="img"
          class="img-fluid counter-bg-02 d-none d-lg-flex"
        />
      </div>
    </div>
    <topclass-section></topclass-section>
    <img src="@/assets/img/bg/instructor-bg-1.png" alt="img" class="instructor-bg" />
  </section>
</template>