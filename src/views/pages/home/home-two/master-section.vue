<template>
  <div class="skill-section">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-6 col-xl-7">
          <div class="skill-image">
            <div class="row position-relative">
              <img
                src="@/assets/img/bg/book-bg.png"
                alt="img"
                class="img-fluid img-04 d-none d-xl-flex"
              />
              <img
                src="@/assets/img/icons/icon-31.png"
                alt="img"
                class="img-fluid img-05 d-none d-xl-flex"
              />
              <div class="col-md-6 d-flex">
                <div class="flex-fill">
                  <img
                    src="@/assets/img/feature/feature-27.jpg"
                    alt="img"
                    class="img-fluid flex-fill img-01 aos"
                    data-aos="fade-right"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <img
                    src="@/assets/img/feature/feature-26.jpg"
                    alt="img"
                    class="img-fluid img-02 aos"
                    data-aos="fade-down"
                  />
                </div>
                <div>
                  <img
                    src="@/assets/img/feature/feature-28.jpg"
                    alt="img"
                    class="img-fluid img-03 aos"
                    data-aos="fade-up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-5 aos" data-aos="fade-up">
          <div class="skill-content">
            <h2>أتقن المهارات لدفع مسيرتك المهنية</h2>
            <p>
              احصل على شهادة، وأتقن مهارات التقنية الحديثة، وارتقِ بمسيرتك المهنية سواء كنت مبتدئًا أو محترفًا. 95% من متعلمي التعليم الإلكتروني أفادوا بأن محتوياتنا العملية ساعدتهم بشكل مباشر في مسيرتهم المهنية.
            </p>
            <div class="skill-list mb-4">
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>الوصول إلى صفك من أي مكان
              </p>
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>خطة دراسية مرنة
              </p>
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>ضمان الجودة
              </p>
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>فعالية التكلفة
              </p>
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>أفضل المدربين العالميين
              </p>
              <p class="d-flex align-items-center">
                <i class="isax isax-tick-circle5 text-success fs-24 me-2"></i>ضمان الجودة
              </p>
            </div>
            <router-link
              to="/course/course-list"
              class="btn btn-dark btn-xl rounded-pill d-inline-flex align-items-center"
              >ابدأ الآن<i class="isax isax-arrow-right-3 ms-2"></i
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
