<template>
  <layouts-header></layouts-header>
  <!-- Breadcrumb -->
  <div class="breadcrumb-bar text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-12">
          <h2 class="breadcrumb-title mb-2">Blog Details</h2>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <router-link to="/home/index">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Blog Details</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- /Breadcrumb -->

  <!-- blog -->
  <div class="blog-sec blog-details">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <img
            class="img-fluid rounded-2"
            src="@/assets/img/blog/blog-detail-image.jpg"
            alt="img"
          />
          <div class="blog-info my-3">
            <ul class="d-flex align-items-center flex-wrap gap-2">
              <li>
                <div class="avatar avatar-sm rounded-pill me-2 flex-shrink-0">
                  <span>
                    <router-link to="/pages-instructor/instructor-details"
                      ><img
                        class="rounded-pill w-auto"
                        src="@/assets/img/user/user-52.jpg"
                        alt="img"
                    /></router-link>
                  </span>
                </div>
                <p><router-link to="/pages-instructor/instructor-details">John Miller</router-link></p>
              </li>
              <li>
                <img class="me-1" src="@/assets/img/icons/calendar.svg" alt="img" />
                <p>20 Apr 2024</p>
              </li>
              <li>
                <img class="me-1" src="@/assets/img/icons/tag.svg" alt="img" />
                <p>Programming, Web Design</p>
              </li>
            </ul>
          </div>
          <h5 class="mb-3">Learn Web App Development from Experts in 2024</h5>
          <p>
            Web app development continues to be one of the most sought-after skills in the
            tech industry, and 2024 is the perfect year to start your journey. With
            businesses across the globe increasingly relying on web applications for their
            operations, the demand for skilled developers is at an all-time high. From
            lucrative job opportunities to the chance to work on cutting-edge
            technologies, learning web app development opens doors to a wide array of
            possibilities. Emerging trends like Progressive Web Apps (PWAs), serverless
            architectures, and AI integration are transforming the field, making it an
            exciting time to dive in.
          </p>
          <div class="p-3 my-4 bg-light-900 blog-blockquote">
            <p class="text-gray-9">
              To succeed in web app development, it’s crucial to master a range of skills.
              On the frontend, knowledge of HTML5, CSS3, and JavaScript is foundational,
              along with frameworks like React or Vue.js. For backend development,
              expertise in Node.js, Python (Django or Flask), or PHP is essential.
              Familiarity with databases, including SQL and NoSQL options like MongoDB and
              PostgreSQL, is equally important. Tools like Git for version control and
              Jest or Selenium for testing round out the technical skill set.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <img
                  class="img-fluid rounded-2"
                  src="@/assets/img/blog/blog-29.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <img
                  class="img-fluid rounded-2"
                  src="@/assets/img/blog/blog-30.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <p>
            One of the key advantages of starting in 2024 is the availability of advanced
            tools, frameworks, and learning resources. Frameworks like React, Angular, and
            Vue.js have matured, making development more efficient and user-friendly.
            Additionally, the rise of online platforms and boot camps provides access to
            high-quality training, whether you're a beginner or an experienced programmer.
            The developer community is also thriving, with frequent conferences, virtual
            meetups, and forums that offer networking and collaborative opportunities.
          </p>
          <p>
            If you’re ready to embark on this exciting journey, now is the time to invest
            in your future. With expert mentorship, practical experience, and a commitment
            to continuous learning, you can unlock a world of opportunities in web app
            development in 2024 and beyond.
          </p>
          <div
            class="p-3 text-center text-md-start p-lg-4 my-4 bg-light-900 rounded-2 d-md-flex align-items-center"
          >
            <div class="avatar flex-shrink-0 blog-avatar">
              <router-link to="/pages-instructor/instructor-details"
                ><img
                  class="img-fluid rounded-pill"
                  src="@/assets/img/user/user-52.jpg"
                  alt="img"
              /></router-link>
            </div>
            <div class="ps-md-3 mt-2 mt-md-0">
              <span class="text-secondary mb-1">Author</span>
              <h5 class="mb-1 fs-18">
                <router-link to="/pages-instructor/instructor-details">Robert Hollenbeck</router-link>
              </h5>
              <p>
                I am experienced project manager and consultant with a rich background in
                digital project execution and freelance talent acquisition. With over 10
                years in the industry, I have mastered the art of identifying and
                collaborating with top-tier freelance talent across various fields
                including technology, marketing, and creative services.
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between mb-3">
            <div class="previous-post d-flex flex-column">
              <a href="#" class="fs-14 fw-medium mb-1"
                ><i class="isax isax-arrow-left me-1"></i> Previous Post</a
              >
              <span class="fs-14 d-none d-md-flex"
                >Transform Education with the Power of an LMS</span
              >
            </div>
            <div class="next-post d-flex flex-column text-end">
              <a href="#" class="fs-14 fw-medium mb-1"
                >Previous Post<i class="isax isax-arrow-right-1 ms-1"></i
              ></a>
              <span class="fs-14 d-none d-md-flex"
                >Revolutionize Learning with a Modern LMS</span
              >
            </div>
          </div>
          <div class="blog-widget">
            <h5 class="fs-18 mb-3">Latest Tags</h5>
            <div class="latest-tags">
              <ul class="tags d-flex flex-wrap">
                <li>
                  <a
                    href="javascript:void(0);"
                    class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                    >HTML</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                    >Web Design</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="tag rounded-1 p-2 fs-10 fw-medium d-flex"
                    >Programming</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="blog-reviews mb-3">
            <h5 class="mb-3 fs-18">Reviews</h5>
            <div class="review-item shadow-none mb-3">
              <div class="review-info">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                >
                  <div class="d-flex align-items-center mb-2">
                    <span class="avatar avatar-lg me-2 flex-shrink-0">
                      <router-link to="/instructor-students/student-details"
                        ><img
                          src="@/assets/img/user/user-05.jpg"
                          class="rounded-circle"
                          alt="img"
                      /></router-link>
                    </span>
                    <div>
                      <h5 class="fs-16 fw-medium">
                        <router-link to="/instructor-students/student-details">Adrian Hendriques</router-link>
                      </h5>
                      <div class="d-flex align-items-center flex-wrap date-info">
                        <span class="mb-0 fs-14">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"
                    ><i class="isax isax-repeat me-1"></i>Reply</a
                  >
                </div>
                <p class="mb-2 mt-1">
                  I highly recommend to anyone looking to learn . Their passion for the
                  subject and dedication to students make them an outstanding instructor.
                  I would definitely take another course with them in the future.
                </p>
                <div class="d-inline-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-like-15 me-1"></i>21</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-dislike5 me-1"></i>50</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-heart5 text-danger me-1"></i>45</a
                  >
                </div>
              </div>
            </div>
            <div class="review-item shadow-none mb-0">
              <div class="review-info">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                >
                  <div class="d-flex align-items-center mb-2">
                    <span class="avatar avatar-lg me-2 flex-shrink-0">
                      <router-link to="/instructor-students/student-details"
                        ><img
                          src="@/assets/img/user/user-26.jpg"
                          class="rounded-circle"
                          alt="img"
                      /></router-link>
                    </span>
                    <div>
                      <h5 class="fs-16 fw-medium">
                        <router-link to="/instructor-students/student-details">Adrian Hendriques</router-link>
                      </h5>
                      <div class="d-flex align-items-center flex-wrap date-info">
                        <span class="mb-0 fs-14">2 days ago</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-md d-inline-flex align-items-center mb-2 text-gray-5"
                    ><i class="isax isax-repeat me-1"></i>Reply</a
                  >
                </div>
                <p class="mb-2 mt-1">
                  While I learned a lot from this course, I feel like I could have used
                  more practical examples or exercises that apply the theory. The course
                  focused a lot on lecture-based content and could have incorporated more
                  real-world scenarios.
                </p>
                <div class="d-inline-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-like-15 me-1"></i>21</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-dislike5 me-1"></i>50</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                    ><i class="isax isax-heart5 text-danger me-1"></i>45</a
                  >
                </div>
                <div class="review-info border-0 bg-light-900 reply mt-4 p-3 rounded-2">
                  <div
                    class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                  >
                    <div class="d-flex align-items-center mb-2">
                      <span class="avatar avatar-lg me-2 flex-shrink-0">
                        <router-link to="/pages-instructor/instructor-details"
                          ><img
                            src="@/assets/img/user/user-25.jpg"
                            class="rounded-circle"
                            alt="img"
                        /></router-link>
                      </span>
                      <div>
                        <h6 class="fs-16 fw-medium">
                          <router-link to="/pages-instructor/instructor-details"
                            >Rolands Granger</router-link
                          >
                        </h6>
                        <div class="d-flex align-items-center flex-wrap date-info">
                          <span class="mb-0 fs-14">2 days ago</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5"
                      ><i class="isax isax-repeat me-1"></i>Reply</a
                    >
                  </div>
                  <p class="mb-2">Thanks! Best luck for Future</p>
                  <div class="d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      ><i class="isax isax-like-15 me-1"></i>21</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      ><i class="isax isax-dislike5 me-1"></i>50</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-gray-5 d-inline-flex align-items-center me-3 fs-14"
                      ><i class="isax isax-heart5 text-danger me-1"></i>45</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="comment">
            <h5 class="fs-18 mb-3">Leave a Comment</h5>
            <form>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label mb-1">Name</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label mb-1">Email</label>
                    <input type="email" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="form-label mb-1">Comment</label>
                    <textarea class="form-control"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <label class="custom_check">
                      <input type="checkbox" name="select_specialist" />
                      <span class="checkmark"></span>Save my name & email in this browser
                      for the next time I comment
                    </label>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button class="btn btn-secondary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- blog -->
</template>
