<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">السلة</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><router-link to="/home/index">الرئيسية</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">السلة</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Cart -->
    <div class="content">
        <div class="container">
            <div class="cart-cover">
                <div class="cart-items">
                    <div>
                        <div class="cart-head border-bottom d-flex justify-content-between align-items-center pb-4">
                            <h5 class="mb-0">3 دورات</h5>
                            <button class="btn btn-sm btn-danger-ghost mb-0"><i class="isax isax-close-circle me-1"></i>إفراغ السلة</button>
                        </div>
                        <div class="row row-gap-3 pb-3 mb-3 border-bottom">
                            <div class="col-md-12">
                                <div class="cart-item mb-0">
                                    <div class="row align-items-center row-gap-3">
                                        <div class="col-md-3">
                                            <div class="cart-img">
                                                <router-link to="/details/course-details-1">
                                                    <img src="@/assets/img/course/course-01.jpg" alt="img" class="img-fluid w-100">
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="row align-items-center justify-content-between">
                                                <div class="col-md-9">
                                                    <div class="d-flex align-items-center mb-2">
                                                        <router-link to="/instructor/instructor-profile" class="avatar avatar-sm rounded-circle me-2">
                                                            <img src="@/assets/img/user/user-01.jpg" alt="img" class="img-fluid rounded-circle">
                                                        </router-link>
                                                        <p class="mb-0"><router-link to="/instructor/instructor-profile">David Benitez</router-link></p>
                                                    </div>
                                                    <div class="mb-2">
                                                        <h6 class="fs-18 mb-0"><router-link to="/details/course-details-1">Information About UI/UX Design Degree</router-link></h6>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="star me-2"><i class="fa-solid fa-star"></i></span>
                                                        <p class="mb-0">4.9 (200 Reviews)</p>
                                                        <span class="mx-2 bg-secondary rounded-circle dot"></span>
                                                        <p class="mb-0">Intermediate</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">														
                                                    <div class="d-flex align-items-center justify-content-end gap-4 cart-trash">
                                                        <h5 class="text-secondary">$120</h5>
                                                        <a href="#" class="trash-btn"><i class="isax isax-trash4"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>								
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="cart-item mb-0">
                                    <div class="row align-items-center row-gap-3">
                                        <div class="col-md-3">
                                            <div class="cart-img">
                                                <router-link to="/details/course-details-1">
                                                    <img src="@/assets/img/course/course-03.jpg" alt="img" class="img-fluid w-100">
                                                </router-link>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div class="row align-items-center justify-content-between">
                                                <div class="col-md-9">
                                                    <div class="d-flex align-items-center mb-2">
                                                        <router-link to="/instructor/instructor-profile" class="avatar avatar-sm rounded-circle me-2">
                                                            <img src="@/assets/img/user/user-08.jpg" alt="img" class="img-fluid rounded-circle">
                                                        </router-link>
                                                        <p class="mb-0"><router-link to="/instructor/instructor-profile">Andrew Pirtle</router-link></p>
                                                    </div>
                                                    <div class="mb-2">
                                                        <h6 class="fs-18 mb-0"><router-link to="/details/course-details-1">Sketch from A to Z (2024): Become an app designer</router-link></h6>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <span class="star me-2"><i class="fa-solid fa-star"></i></span>
                                                        <p class="mb-0">4.6 (170 Reviews)</p>
                                                        <span class="mx-2 bg-secondary rounded-circle dot"></span>
                                                        <p class="mb-0">Basic</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">														
                                                    <div class="d-flex align-items-center justify-content-end gap-4 cart-trash">
                                                        <h5 class="text-secondary">$160</h5>
                                                        <a href="#" class="trash-btn"><i class="isax isax-trash4"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light border rounded-2 p-3 mb-4">
                            <div class="row align-items-center justify-content-between row-gap-3">
                                <div class="col-md-6">
                                    <h6 class="mb-1">المجموع الفرعي</h6>
                                    <p class="mb-0">جميع الدورات تشمل <span class="text-gray-9 fw-medium mx-1">ضمان استرجاع الأموال لمدة 30 يومًا</span></p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <h5>$450</h5>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-end flex-wrap">
                            <router-link to="/course/course-grid" class="btn continue-shopping-btn rounded-pill me-2">متابعة التسوق</router-link>
                            <router-link to="/courses/checkout" class="btn checkout-btn rounded-pill">إتمام الشراء</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    <!-- /Cart -->

    <footer-two></footer-two>

</template>