<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">لوحة التحكم</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">الرئيسية</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">لوحة التحكم</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <div class="content">
    <div class="container">
      <instructor-header></instructor-header>
      <div class="row">
        <!-- Sidebar -->
        <instructor-sidebar></instructor-sidebar>
        <!-- /Sidebar -->

        <div class="col-lg-9">
          <div class="row">
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-primary-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/graduation.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">الدورات المسجلة</span>
                      <h4 class="fs-24 mt-1">12</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-secondary-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/book.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">الدورات النشطة</span>
                      <h4 class="fs-24 mt-1">08</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-success-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/bookmark.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">الدورات المكتملة</span>
                      <h4 class="fs-24 mt-1">06</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-info-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/user-octagon.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">إجمالي الطلاب</span>
                      <h4 class="fs-24 mt-1">17</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-blue-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/book-2.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">إجمالي الدورات</span>
                      <h4 class="fs-24 mt-1">11</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="icon-box bg-purple-transparent me-2 me-xxl-3 flex-shrink-0">
                      <img src="@/assets/img/icon/money-add.svg" alt="" />
                    </span>
                    <div>
                      <span class="d-block">إجمالي الأرباح</span>
                      <h4 class="fs-24 mt-1">$486</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center flex-wrap gap-3 justify-content-between border-bottom mb-2 pb-3">
                <h5 class="fw-bold">الأرباح حسب السنة</h5>
                <div class="input-icon position-relative input-range-picker">
                  <span class="input-icon-addon">
                    <i class="isax isax-calendar"></i>
                  </span>
                  <input type="text" class="form-control date-range bookingrange" ref="dateRangeInput"
                    placeholder="dd/mm/yyyy - dd/mm/yyyy" />
                </div>
              </div>
              <div id="earnnings_chart">
                <apexchart type="bar" height="290" :options="earningChart.earnings" :series="earningChart.series">
                </apexchart>
              </div>
            </div>
          </div>
          <h5 class="mb-3 fw-bold">الدورات المنشأة مؤخراً</h5>
          <div class="table-responsive custom-table">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>الدورات</th>
                  <th>المسجلين</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="course-title d-flex align-items-center">
                      <router-link to="/details/course-details-1" class="avatar avatar-xl flex-shrink-0 me-2"><img
                          src="@/assets/img/instructor/instructor-table-01.jpg" alt="Img" /></router-link>
                      <div>
                        <p class="fw-medium">
                          <router-link to="/details/course-details-1">Complete HTML, CSS and Javascript<br />
                            Course</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>0</td>
                  <td>منشور</td>
                </tr>
                <tr>
                  <td>
                    <div class="course-title d-flex align-items-center">
                      <router-link to="/details/course-details-1" class="avatar avatar-xl flex-shrink-0 me-2"><img
                          src="@/assets/img/instructor/instructor-table-02.jpg" alt="Img" /></router-link>
                      <div>
                        <p class="fw-medium">
                          <router-link to="/details/course-details-1">Complete Course on Fullstack Web<br />
                            Developer</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>منشور</td>
                </tr>
                <tr>
                  <td>
                    <div class="course-title d-flex align-items-center">
                      <router-link to="/details/course-details-1" class="avatar avatar-xl flex-shrink-0 me-2"><img
                          src="@/assets/img/instructor/instructor-table-03.jpg" alt="Img" /></router-link>
                      <div>
                        <p class="fw-medium">
                          <router-link to="/details/course-details-1">Data Science Fundamentals and<br />
                            Advanced Bootcampr</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>منشور</td>
                </tr>
                <tr>
                  <td>
                    <div class="course-title d-flex align-items-center">
                      <router-link to="/details/course-details-1" class="avatar avatar-xl flex-shrink-0 me-2"><img
                          src="@/assets/img/instructor/instructor-table-04.jpg" alt="Img" /></router-link>
                      <div>
                        <p class="fw-medium">
                          <router-link to="/details/course-details-1">Master Microservices with Spring Boot<br />
                            and Spring Cloud</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>منشور</td>
                </tr>
                <tr>
                  <td>
                    <div class="course-title d-flex align-items-center">
                      <router-link to="/details/course-details-1" class="avatar avatar-xl flex-shrink-0 me-2"><img
                          src="@/assets/img/instructor/instructor-table-05.jpg" alt="Img" /></router-link>
                      <div>
                        <p class="fw-medium">
                          <router-link to="/details/course-details-1">Information About UI/UX Design<br />
                            Degree</router-link>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>0</td>
                  <td>منشور</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
</template>
<script>
import { earningChart } from "./data";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      earningChart: earningChart,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
