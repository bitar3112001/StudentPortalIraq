<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">شبكة الدورات</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><router-link to="/home/index">الرئيسية</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">شبكة الدورات</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Course -->
    <section class="course-content">
        <div class="container">
            <div class="row align-items-baseline">
                <course-sidebar></course-sidebar>
                <div class="col-lg-9">
                
                    <!-- Filter -->
                    <div class="showing-list mb-4">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                    <div class="show-result text-center text-lg-start">
                                        <h6 class="fw-medium">عرض 1-9 من 50 نتيجة</h6>
                                    </div>
                            </div>
                            <div class="col-lg-8">	
                                <div class="show-filter add-course-info">
                                    <form action="#">
                                        <div class="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                                            <div class="view-icons mb-2 mb-sm-0">
                                                <router-link to="/course/course-grid" class="grid-view active"><i class="feather-grid"></i></router-link>
                                                <router-link to="/course/course-list" class="list-view"><i class="isax isax-task"></i></router-link>
                                            </div>
                                            <select class="form-select">
                                                <option>نشر حديثاً</option>
                                                <option>الدورات الرائجة</option>
                                                <option>الأعلى تقييماً</option>
                                                <option>الدورات المجانية</option>
                                            </select>
                                            <div class="search-group">
                                                <i class="isax isax-search-normal-1"></i>
                                                <input type="text" class="form-control" placeholder="بحث" >
                                            </div>
                                        </div>
                                    </form>
                                </div>	
                            </div>
                        </div>
                    </div>
                    <!-- /Filter -->
                    
                    <div class="row">
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <div class="badge text-bg-danger">خصم 15%</div>
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-29.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">بريندا سلاتون</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            تصميم
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">معلومات عن درجة تصميم واجهة المستخدم/تجربة المستخدم</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.9 (200 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$120</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-30.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">آنا رييس</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            ووردبريس
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">ووردبريس للمبتدئين - إتقان ووردبريس بسرعة</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$140</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-31.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">أندرو بيرتل</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            تصميم
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">سكتش من الألف إلى الياء (2024): كن مصمم تطبيقات</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (160 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$140</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">كريستي غارنر</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            برمجة
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">بناء مواقع ويب متجاوبة مع العالم الحقيقي</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.2 (220 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$200</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-32.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">جاستن غريغوري</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            برمجة
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">تعلم جافاسكريبت وإكسبريس لتصبح خبيراً</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$130</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-33.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">كارولين هاينز</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            برمجة
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">مقدمة في برمجة بايثون</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$130</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-34.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">رافائيل ميلر</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            برمجة
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">بناء مواقع ويب متجاوبة مع HTML5 و CSS3</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$170</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-35.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">نانسي دوارتي</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            تصميم
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">معلومات عن درجة تصميم فوتوشوب</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$170</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div class="course-item-two course-item mx-0">
                                <div class="course-img">
                                    <router-link to="/details/course-details-1">
                                        <img src="@/assets/img/best-course-img-3.jpg" alt="img" class="img-fluid">  
                                    </router-link>
                                    <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                                        <a href="javascript:void(0);" class="fav-icon ms-auto"><i class="isax isax-heart"></i></a>
                                    </div>
                                </div>
                                <div class="course-content">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex align-items-center">
                                            <router-link to="/pages-instructor/instructor-details" class="avatar avatar-sm">
                                                <img src="@/assets/img/user/user-36.jpg" alt="img" class="img-fluid avatar avatar-sm rounded-circle">
                                            </router-link>
                                            <div class="ms-2">
                                                <router-link to="/pages-instructor/instructor-details" class="link-default fs-14">جيمس كاغان</router-link>
                                            </div>
                                        </div>
                                        <span class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                                            تصميم
                                        </span>
                                    </div>
                                    <h6 class="title mb-2"><router-link to="/details/course-details-1">مطوري C# - ضاعفوا برمجتكم مع Visual Studio</router-link></h6>
                                    <p class="d-flex align-items-center mb-3"><i class="fa-solid fa-star text-warning me-2"></i>4.4 (180 تقييم)</p>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="text-secondary mb-0">$180</h5>
                                        <router-link to="/details/course-details-1" class="btn btn-dark btn-sm d-inline-flex align-items-center">عرض الدورة<i class="isax isax-arrow-right-3 ms-1"></i></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- /pagination -->
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <p class="pagination-text">الصفحة 1 من 2</p>
                        </div>
                        <div class="col-md-10">
                            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                                <li class="page-item prev">
                                    <a class="page-link" href="javascript:void(0)" tabindex="-1"><i class="fas fa-angle-right"></i></a>
                                </li>
                                <li class="page-item first-page active">
                                    <a class="page-link" href="javascript:void(0)">1</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="javascript:void(0)">3</a>
                                </li>
                                <li class="page-item next">
                                    <a class="page-link" href="javascript:void(0)"><i class="fas fa-angle-left"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /pagination -->
                    
                </div>
            </div>
        </div>
    </section>
    <!-- /Course -->

     <footer-two></footer-two>
</template>