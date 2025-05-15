<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Earnings</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Earnings</li>
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
          <div class="page-title d-flex align-items-center justify-content-between">
            <h5>Earnings</h5>
          </div>
          <div class="row">
            <div class="col-xl-4 col-md-6">
              <div class="card bg-light">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="earnings-icon bg-success">
                      <i class="isax isax-dollar-circle4"></i>
                    </span>
                    <div class="ms-3">
                      <h6 class="mb-1">Revenue</h6>
                      <h5 class="fw-bold text-success mb-1">$8420</h5>
                      <p>Earning this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card bg-light">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="earnings-icon bg-secondary">
                      <i class="isax isax-star5"></i>
                    </span>
                    <div class="ms-3">
                      <h6 class="mb-1">Courses Ratings</h6>
                      <h5 class="fw-bold text-secondary mb-1">4.8</h5>
                      <p>Rating this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="card bg-light">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span class="earnings-icon bg-info">
                      <i class="isax isax-profile-tick5"></i>
                    </span>
                    <div class="ms-3">
                      <h6 class="mb-1">Students Enrolled</h6>
                      <h5 class="fw-bold text-info mb-1">12000</h5>
                      <p>New this month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div
                  class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between"
                >
                  <h5>Earnings by Year</h5>
                  <div class="icon-form mb-0">
                    <span class="form-icon"
                      ><i class="isax isax-calendar-1 fs-16"></i
                    ></span>
                    <input
                      type="text"
                      class="form-control yearpicker"
                      placeholder="2025"
                    />
                  </div>
                </div>
                <div class="card-body">
                  <div id="earnigs_chart">
                    <apexchart
                      type="area"
                      height="273"
                      :options="earningOneChart.earningOne"
                      :series="earningOneChart.series"
                    >
                    </apexchart>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-0">
            <div
              class="card-header d-flex flex-wrap gap-2 align-items-center justify-content-between"
            >
              <h5>Earnings</h5>
              <div class="icon-form mb-0">
                <span class="form-icon"><i class="isax isax-calendar-1 fs-16"></i></span>
                <input
                  type="text"
                  class="form-control bookingrange"
                  placeholder="01 Jan 2025 - 31 Jan 2025"
                />
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive custom-table">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Course</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="order"><a href="#">ORD010</a></td>
                      <td>28 Jan 2025</td>
                      <td>
                        <router-link to="/details/course-details-1"
                          >Information about UI/UX Design Degree</router-link
                        >
                      </td>
                      <td>$160</td>
                    </tr>
                    <tr>
                      <td class="order"><a href="#">ORD009</a></td>
                      <td>22 Jan 2025</td>
                      <td>
                        <router-link to="/details/course-details-1"
                          >Wordpress for Beginners - Master Wordpress Quickly</router-link
                        >
                      </td>
                      <td>$140</td>
                    </tr>
                    <tr>
                      <td class="order"><a href="#">ORD008</a></td>
                      <td>17 Jan 2025</td>
                      <td>
                        <router-link to="/details/course-details-1"
                          >Sketch from A to Z (2022): Become an app designer</router-link
                        >
                      </td>
                      <td>$200</td>
                    </tr>
                    <tr>
                      <td class="order"><a href="#">ORD007</a></td>
                      <td>08 Jan 2025</td>
                      <td>
                        <router-link to="/details/course-details-1"
                          >Learn Angular Fundamental From beginning to
                          advance</router-link
                        >
                      </td>
                      <td>$170</td>
                    </tr>
                    <tr>
                      <td class="order"><a href="#">ORD006</a></td>
                      <td>03 Jan 2025</td>
                      <td>
                        <router-link to="/details/course-details-1"
                          >C# Developers Double Your Coding Speed</router-link
                        >
                      </td>
                      <td>$120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-two></footer-two>
</template>
<script>
import { earningOneChart } from "./data";
export default {
  data() {
    return {
      earningOneChart: earningOneChart,
    };
  },
};
</script>
