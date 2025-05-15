<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">مشاهدة الدورة</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><router-link to="/home/index">الرئيسية</router-link></li>
                            <li class="breadcrumb-item active" aria-current="page">مشاهدة الدورة</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Course watch -->
    <div class="content pt-0">
        <div class="container-fluid">
            <div class="course-watch-section">
                <div class="row">
                    <div class="col-lg-4  border-end">
                        <div class="progress-overview-section">
                            <div class="mb-4">
                                <a href="javascript:void(0);" class="back-to-course"><i class="isax isax-arrow-left me-1"></i>العودة إلى الدورة</a>
                            </div>
                            <h3>
                                تعلم أساسيات تصميم الويب المتجاوب
                            </h3>
                            <div class="mb-4">
                                <p class="mb-1">اكتمل بنسبة 46%</p>
                                <div class="progress progress-xs mb-2" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-success" style="width: 70%"></div>
                                </div>
                                <span class="fw-medium">آخر نشاط في 20 أبريل 2025</span>
                            </div>

                            <div class="accordions-items-seperate" id="accordionSpacingExample">
                                <div class="accordion-item">
                                    <div class="accordion-header" id="headingSpacingOne3">
                                        <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#SpacingOne" aria-expanded="false" aria-controls="SpacingOne">
                                            <div>
                                                <span class="d-block mb-1">القسم 1</span>
                                                <h6 class="mb-0">مقدمة HTML</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="SpacingOne" class="accordion-collapse collapse show" aria-labelledby="headingSpacingOne3" data-bs-parent="#accordionSpacingExample">
                                        <div class="accordion-body">
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">مقدمة</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هو HTML</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هي صفحة الويب؟</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header" id="headingSpacingTwo">
                                        <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#SpacingTwo" aria-expanded="false" aria-controls="SpacingTwo">
                                            <div>
                                                <span class="d-block mb-1">القسم 2</span>
                                                <h6 class="mb-0">موقعك الأول</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="SpacingTwo" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo" data-bs-parent="#accordionSpacingExample">
                                        <div class="accordion-body">
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">مقدمة</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هو HTML</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هي صفحة الويب؟</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <div class="accordion-header" id="headingSpacingThree">
                                        <div class="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#SpacingThree" aria-expanded="false" aria-controls="SpacingThree">
                                            <div>
                                                <span class="d-block mb-1">القسم 3</span>
                                                <h6 class="mb-0">موقعك الأول</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="SpacingThree" class="accordion-collapse collapse" aria-labelledby="headingSpacingThree" data-bs-parent="#accordionSpacingExample">
                                        <div class="accordion-body">
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">مقدمة</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-3">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هو HTML</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div class="d-flex align-items-center">
                                                    <span class="d-flex"><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                                                    <p class="accordian-content mb-0">ما هي صفحة الويب؟</p>
                                                </div>
                                                <span>
                                                    2 دقيقة 10 ثانية
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="course-watch-content">
                            <div class="position-relative video-btn">
                                <a href="https://www.youtube.com/embed/1trvO6dqQUI" id="openVideoBtn" target="_blank">
                                    <img class="img-fluid" src="@/assets/img/best-course-img-3.jpg" alt="img" width="100%" height="100%">
                                    
                                    <div class="play-icon">
                                        <i class="fa-solid fa-play fs-28"></i>
                                    </div>
                                </a>
                            </div>
                            <div id="videoModal">
                                <div class="modal-content1">
                                    <span class="close-btn" id="closeModal">&times;</span>
                                    <iframe id="youtubeIframe" allowfullscreen></iframe>
                                </div>
                            </div>
                            <ul class="nav-tabs mb-4 nav-justified border-0 nav-style-1 d-sm-flex d-block" role="tablist">
                                <li class="nav-item active">
                                <a class="btn nav-link active" data-bs-toggle="tab" role="tab" href="#overview"
                                    aria-selected="false">نظرة عامة</a>
                                </li>
                                <li class="nav-item">
                                <a class="btn nav-link" data-bs-toggle="tab" role="tab" href="#notes"
                                    aria-selected="false">الملاحظات</a>
                                </li>
                                <li class="nav-item">
                                <a class="btn nav-link" data-bs-toggle="tab" role="tab"
                                    href="#faq" aria-selected="true">الأسئلة الشائعة</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active show" id="overview" role="tabpanel">
                                    <div class="mb-4">
                                        <h6 class="fs-18 fw-semibold mb-1">عن هذه الدورة</h6>
                                        <p>تعلم تطوير الويب بدون كتابة الكثير من الكود</p>
                                    </div>
                                    <div class="mb-4">
                                        <h6 class="fs-18 fw-semibold mb-2">الوصف</h6>
                                        <p>انطلق في رحلة تحويلية إلى عالم الذكاء الاصطناعي مع مايك ويلر، مرشدك في هذه الدورة الأكثر مبيعاً على Udemy حول ChatGPT وهندسة النصوص. كمدرب ذو خبرة قام بتدريس أكثر من 300,000 طالب، يكشف مايك أسرار تطوير نماذج GPT المخصصة الخاصة بك، مما يضمن تميز مهاراتك في السوق الرقمية المزدهرة.</p>
                                        <p class="mb-1">ستتعرف في هذه الدورة على الذكاء الاصطناعي التوليدي والاستخدام الفعال لـ ChatGPT وهي مثالية للمبتدئين. كما ستتعلم تقنيات متقدمة في هندسة النصوص لرفع مهاراتك إلى المستوى التالي!</p>
                                        <a href="javascript:void(0);" class="readmore-btn">اقرأ المزيد</a>
                                    </div>
                                    <div class="mb-4">
                                        <h6 class="fs-18 fw-semibold mb-2">ما سوف تتعلمه</h6>
                                        <ul class="list-unstyled what-you-learn ms-4" style="list-style-type: disc;">
                                            <li class="mb-2">إعداد البيئة</li>
                                            <li class="mb-2">ممارسات HTML المتقدمة</li>
                                            <li class="mb-2">بناء موقع محفظة أعمال</li>
                                            <li class="mb-2">تصاميم متجاوبة</li>
                                            <li class="mb-2">فهم برمجة HTML</li>
                                            <li class="mb-2">كتابة كود HTML</li>
                                            <li class="mb-0">ابدأ ببناء مواقع ويب جميلة</li>
                                        </ul>
                                    </div>
                                    <div class="mb-0">
                                        <h6 class="fs-18 fw-semibold mb-2">المتطلبات</h6>
                                        <ul class="list-unstyled what-you-learn ms-4" style="list-style-type: disc;">
                                            <li class="mb-2">أي جهاز كمبيوتر سيعمل: Windows أو macOS أو Linux</li>
                                            <li class="mb-2">معرفة أساسية بـ HTML و CSS</li>
                                            <li class="mb-0">فهم أساسي/محدود لـ JavaScript</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane" id="notes" role="tabpanel">
                                    <div class="mb-0">
                                        <h6 class="fs-18 fw-semibold mb-1">الملاحظات</h6>
                                        <p>انطلق في رحلة تحويلية إلى عالم الذكاء الاصطناعي مع مايك ويلر، مرشدك في هذه الدورة الأكثر مبيعاً على Udemy حول ChatGPT وهندسة النصوص. كمدرب ذو خبرة قام بتدريس أكثر من 300,000 طالب، يكشف مايك أسرار تطوير نماذج GPT المخصصة الخاصة بك، مما يضمن تميز مهاراتك في السوق الرقمية المزدهرة.</p>
                                        <p class="mb-0">ستتعرف في هذه الدورة على الذكاء الاصطناعي التوليدي والاستخدام الفعال لـ ChatGPT وهي مثالية للمبتدئين. كما ستتعلم تقنيات متقدمة في هندسة النصوص لرفع مهاراتك إلى المستوى التالي!</p>
                                    </div>
                                </div>
                                <div class="tab-pane" id="faq" role="tabpanel">
                                    <div class="faq-accordion">
                                        <div class="accordions-items-seperate" id="accordionSpacingExample2">
                                            <div class="accordion-item">
                                                <div class="accordion-header" id="headingSpacingOne2">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionOne" aria-expanded="false" aria-controls="accordionOne">
                                                        How do I enroll in a course?
                                                    </button>
                                                </div>
                                                <div id="accordionOne" class="accordion-collapse collapse" aria-labelledby="headingSpacingOne2" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSpacingTwo2">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionTwo" aria-expanded="false" aria-controls="accordionTwo">
                                                        How long do I have access to a course?
                                                    </button>
                                                </h2>
                                                <div id="accordionTwo" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo2" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSpacingTwo3">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionThree" aria-expanded="false" aria-controls="accordionThree">
                                                        What payment methods are accepted?
                                                    </button>
                                                </h2>
                                                <div id="accordionThree" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo3" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSpacingTwo4">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionFour" aria-expanded="false" aria-controls="accordionFour">
                                                        Will I receive a certificate after completing a course?
                                                    </button>
                                                </h2>
                                                <div id="accordionFour" class="accordion-collapse collapse show" aria-labelledby="headingSpacingTwo4" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">
                                                            Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSpacingTwo5">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionFive" aria-expanded="false" aria-controls="accordionFive">
                                                        What is the purpose of this DreamLMS ?
                                                    </button>
                                                </h2>
                                                <div id="accordionFive" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo5" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">
                                                            Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingSpacingTwo6">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionSix" aria-expanded="false" aria-controls="accordionSix">
                                                        What can I do with my certificate?
                                                    </button>
                                                </h2>
                                                <div id="accordionSix" class="accordion-collapse collapse" aria-labelledby="headingSpacingTwo6" data-bs-parent="#accordionSpacingExample2">
                                                    <div class="accordion-body">
                                                        <p class="mb-0">
                                                            Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
    <!-- /Course watch -->

    <footer-two></footer-two>
</template>