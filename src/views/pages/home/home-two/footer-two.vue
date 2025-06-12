<template>
  <footer class="footer">
    <div class="footer-bg">
      <img src="@/assets/img/bg/footer-bg-01.png" class="footer-bg-1" alt="" />
      <img src="@/assets/img/bg/footer-bg-02.png" class="footer-bg-2" alt="" />
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row row-gap-4">
          <div class="col-lg-4">
            <div class="footer-about">
              <div class="footer-logo">
                <img src="@/assets/img/logo1.jpg" alt=""  style="width: 50px; height: 50px;"/>
              </div>
              <p>
                منصة مصممة لمساعدة المؤسسات والمعلمين والمتعلمين على إدارة وتقديم وتتبع أنشطة التعلم والتدريب.
              </p>
              <div class="d-flex align-items-center">
                <a href="#" class="me-2"
                  ><img src="@/assets/img/icon/appstore.svg" alt=""
                /></a>
                <a href="#"><img src="@/assets/img/icon/googleplay.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row row-gap-4">
              <div class="col-lg-3">
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">للمدرب</h5>
                  <ul>
                    <li>
                      <router-link to="/course/course-grid">البحث عن المرشدين</router-link>
                    </li>
                    <li><router-link to="/">تسجيل الدخول</router-link></li>
                    <li><router-link to="/register">تسجيل حساب جديد</router-link></li>
                    <li><router-link to="/course/course-list">الحجز</router-link></li>
                    <li>
                      <router-link to="/students/student-dashboard"
                        >لوحة تحكم الطلاب</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-widget footer-menu">
                  <h5 class="footer-title">للطالب</h5>
                  <ul>
                    <li><a href="javascript:void(0);">المواعيد</a></li>
                    <li>
                      <router-link to="/instructor/instructor-message">الدردشة</router-link>
                    </li>
                    <li><router-link to="/">تسجيل الدخول</router-link></li>
                    <li><router-link to="/register">تسجيل حساب جديد</router-link></li>
                    <li>
                      <router-link to="/instructor/instructor-dashboard"
                        >لوحة تحكم المدرب</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer-widget footer-contact">
                  <h5 class="footer-title">النشرة البريدية</h5>
                  <div class="subscribe-input">
                    <form action="#">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                      <button
                        type="submit"
                        class="btn btn-primary btn-sm inline-flex align-items-center"
                      >
                        <i class="isax isax-send-2 me-1"></i>اشترك
                      </button>
                    </form>
                  </div>
                  <div class="footer-contact-info">
                    <div class="footer-address d-flex align-items-center">
                      <img
                        src="@/assets/img/icon/icon-20.svg"
                        alt="Img"
                        class="img-fluid me-2"
                      />
                      <p>
                          بغداد <br />
                      </p>
                    </div>
                    <div class="footer-address d-flex align-items-center">
                      <img
                        src="@/assets/img/icon/icon-19.svg"
                        alt="Img"
                        class="img-fluid me-2"
                      />
                      <p>IHTIRAF@example.com</p>
                    </div>
                    <div class="footer-address d-flex align-items-center">
                      <img
                        src="@/assets/img/icon/icon-21.svg"
                        alt="Img"
                        class="img-fluid me-2"
                      />
                      <p>+١٩ ١٢٣-٤٥٦-٧٨٩٠</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row row-gap-2">
          <div class="col-md-6">
            <div class="text-center text-md-start">
              <p class="text-white">
                جميع الحقوق محفوظة © ٢٠٢٥ .Youbee.ai
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <ul
                class="d-flex align-items-center justify-content-center justify-content-md-end footer-link"
              >
                <li>
                  <router-link to="/pages/terms-and-conditions"
                    >الشروط والأحكام</router-link
                  >
                </li>
                <li>
                  <router-link to="/pages/privacy-policy">سياسة الخصوصية</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
