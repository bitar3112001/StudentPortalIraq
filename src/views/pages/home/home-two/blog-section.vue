<template>
  <div class="blog-section position-relative" dir="rtl">
    <div class="container">
      <div class="section-header text-center aos" data-aos="fade-up">
        <span class="section-badge">المدونة</span>
        <h2>أحدث المقالات والأخبار</h2>
        <p>اكتشف محتوى منتقى لتنوير وإمتاع وإشراك القراء حول العالم.</p>
      </div>
      <div class="row row-gap-4 justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="blog-card aos" data-aos="zoom-in">
            <div class="blog-img">
              <router-link to="/blogs/blog-details"
                ><img src="@/assets/img/blog/blog-22.jpg" alt="img" class="img-fluid"
              /></router-link>
            </div>
            <div class="blog-content">
              <h5>
                <router-link to="/blogs/blog-details"
                  >إتقان البرمجة مع مرشد تقني</router-link
                >
              </h5>
              <p>
                تعلم البرمجة قد يكون مرهقاً، لكن وجود مرشد يجعل الرحلة أسهل...
              </p>
              <div class="blog-user d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar ms-2">
                    <img
                      src="@/assets/img/user/user-42.jpg"
                      alt="img"
                      class="img-fluid"
                    />
                  </a>
                  <p class="mb-0 d-flex align-items-center">
                    بواسطة <a href="javascript:void(0);" class="fw-medium me-1">ريني سارو</a>
                  </p>
                </div>
                <p class="d-flex align-items-center">
                  <i class="isax isax-calendar-1 text-gray-7"></i>09 أغسطس 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-card">
            <div class="blog-img">
              <router-link to="/blogs/blog-details"
                ><img src="@/assets/img/blog/blog-23.jpg" alt="img" class="img-fluid"
              /></router-link>
            </div>
            <div class="blog-content">
              <h5>
                <router-link to="/blogs/blog-details"
                  >كيف ترتقي بمهاراتك البرمجية بمساعدة مرشد</router-link
                >
              </h5>
              <p>
                سواء كنت مبتدئاً أو مبرمجاً متقدماً، ستكتشف في هذه المدونة كيف...
              </p>
              <div class="blog-user d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar ms-2">
                    <img
                      src="@/assets/img/user/user-36.jpg"
                      alt="img"
                      class="img-fluid"
                    />
                  </a>
                  <p class="mb-0 d-flex align-items-center">
                    بواسطة
                    <a href="javascript:void(0);" class="fw-medium me-1">كريس دانيال</a>
                  </p>
                </div>
                <p class="d-flex align-items-center">
                  <i class="isax isax-calendar-1 text-gray-72"></i>15 يوليو 2025
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="blog-card">
            <div class="blog-img">
              <router-link to="/blogs/blog-details"
                ><img src="@/assets/img/blog/blog-24.jpg" alt="img" class="img-fluid"
              /></router-link>
            </div>
            <div class="blog-content">
              <h5>
                <router-link to="/blogs/blog-details"
                  >التنقل في عالم التكنولوجيا: الدليل الشامل</router-link
                >
              </h5>
              <p>
                صناعة التكنولوجيا واسعة ودائمة التغير، لكن المرشد يمكنه مساعدتك في البقاء في المقدمة...
              </p>
              <div class="blog-user d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar ms-2">
                    <img
                      src="@/assets/img/user/user-53.jpg"
                      alt="img"
                      class="img-fluid"
                    />
                  </a>
                  <p class="mb-0 d-flex align-items-center">
                    بواسطة <a href="javascript:void(0);" class="fw-medium me-1">أندرو</a>
                  </p>
                </div>
                <p class="d-flex align-items-center">
                  <i class="isax isax-calendar-1 text-gray-7"></i>15 يناير 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="@/assets/img/bg/feature-bg-02.png"
        alt="img"
        class="img-fluid blog-bg-01"
      />
    </div>
  </div>
</template>