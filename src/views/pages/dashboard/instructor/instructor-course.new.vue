<template>
    <layouts-header></layouts-header>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Courses</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/home/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Courses</li>
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
                        <div class="col-xxl col-lg-4 col-md-6">
                            <div class="card bg-success">
                                <div class="card-body">
                                    <h6 class="fw-medium mb-1 text-white">Active Courses</h6>
                                    <h4 class="fw-bold text-white">{{ activeCoursesCount }}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl col-lg-4 col-md-6">
                            <div class="card bg-secondary">
                                <div class="card-body">
                                    <h6 class="fw-medium mb-1 text-white">Pending Courses</h6>
                                    <h4 class="fw-bold text-white">{{ pendingCoursesCount }}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl col-lg-4 col-md-6">
                            <div class="card bg-info">
                                <div class="card-body">
                                    <h6 class="fw-medium mb-1 text-white">Draft Courses</h6>
                                    <h4 class="fw-bold text-white">{{ draftCoursesCount }}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl col-lg-4 col-md-6">
                            <div class="card bg-skyblue">
                                <div class="card-body">
                                    <h6 class="fw-medium mb-1 text-white">Free Courses</h6>
                                    <h4 class="fw-bold text-white">{{ freeCoursesCount }}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl col-lg-4 col-md-6">
                            <div class="card bg-purple">
                                <div class="card-body">
                                    <h6 class="fw-medium mb-1 text-white">Paid Courses</h6>
                                    <h4 class="fw-bold text-white">{{ paidCoursesCount }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="page-title d-flex align-items-center justify-content-between">
                        <h5 class="fw-bold">Courses</h5>
                        <div class="d-flex align-items-center list-icons">
                            <router-link to="/instructor/instructor-course" class="me-2"><i
                                    class="isax isax-task"></i></router-link>
                            <router-link to="/instructor/instructor-course-grid"><i
                                    class="isax isax-element-3"></i></router-link>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8">
                            <div class="mb-3">
                                <div class="dropdown">
                                    <a href="javascript:void(0);"
                                        class="dropdown-toggle text-gray-6 btn rounded border d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Status
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end p-3">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                                @click="filterByStatus('published')">Published</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                                @click="filterByStatus('pending')">Pending</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item rounded-1"
                                                @click="filterByStatus('draft')">Draft</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="input-icon mb-3">
                                <span class="input-icon-addon">
                                    <i class="isax isax-search-normal-14"></i>
                                </span>
                                <input type="text" class="form-control form-control-md" placeholder="Search"
                                    v-model="searchQuery" @input="searchCourses" />
                            </div>
                        </div>
                    </div>

                    <div class="table-responsive custom-table">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                    <th>Course Name</th>
                                    <th>Students</th>
                                    <th>Price</th>
                                    <th>Ratings</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="loading">
                                    <td colspan="6" class="text-center">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else-if="error">
                                    <td colspan="6" class="text-center text-danger">
                                        {{ error }}
                                    </td>
                                </tr>
                                <tr v-else-if="filteredCourses.length === 0">
                                    <td colspan="6" class="text-center">
                                        No courses found
                                    </td>
                                </tr>
                                <tr v-for="course in filteredCourses" :key="course.id">
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <router-link :to="'/details/course-details-' + course.id"
                                                class="avatar avatar-lg me-2 flex-shrink-0">
                                                <img class="img-fluid object-fit-cover" :src="course.image"
                                                    :alt="course.name" />
                                            </router-link>

                                            <div>
                                                <h6 class="fw-medium mb-2">
                                                    <router-link :to="'/details/course-details-' + course.id">
                                                        {{ course.name }}
                                                    </router-link>
                                                </h6>
                                                <div class="d-flex align-items-center">
                                                    <span
                                                        class="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end">
                                                        <i class="isax isax-video-circle me-1 text-gray-9 fw-bold"></i>
                                                        {{ course.lessons_count || 0 }} Lessons
                                                    </span>
                                                    <span
                                                        class="d-inline-flex fs-12 align-items-center me-2 pe-2 border-end">
                                                        <i
                                                            class="isax isax-message-question me-1 text-gray-9 fw-bold"></i>
                                                        {{ course.quizzes_count || 0 }} Quizzes
                                                    </span>
                                                    <span class="d-inline-flex fs-12 align-items-center">
                                                        <i class="isax isax-clock me-1 text-gray-9 fw-bold"></i>
                                                        {{ course.duration || '00:00:00' }} Hours
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{ course.students_count || 0 }}</td>
                                    <td>${{ course.price }}</td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <i class="fa-solid fa-star fs-12 filled text-warning me-1"></i>
                                            <span>{{ course.rating || '0.0' }} ({{ course.ratings_count || 0 }})</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span :class="getStatusBadgeClass(course.status)"
                                            class="badge badge-sm d-inline-flex align-items-center me-1">
                                            <i class="fa-solid fa-circle fs-5 me-1"></i>
                                            {{ getStatusText(course.status) }}
                                        </span>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a href="#" class="d-inline-flex fs-14 me-1 action-icon"
                                                @click.prevent="editCourse(course)">
                                                <i class="isax isax-edit-2"></i>
                                            </a>
                                            <a href="#" class="d-inline-flex fs-14 action-icon" data-bs-toggle="modal"
                                                data-bs-target="#delete_modal"
                                                @click.prevent="setCourseToDelete(course)">
                                                <i class="isax isax-trash"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Pagination -->
                    <div class="row align-items-center mt-4">
                        <div class="col-md-2">
                            <p class="fs-14 fw-500 text-center text-md-start">Page {{ currentPage }} of {{ totalPages }}
                            </p>
                        </div>
                        <div class="col-md-10">
                            <ul class="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
                                <li class="page-item prev" :class="{ disabled: currentPage === 1 }">
                                    <a class="page-link" href="javascript:void(0)"
                                        @click.prevent="changePage(currentPage - 1)">
                                        <i class="fas fa-angle-left"></i>
                                    </a>
                                </li>
                                <li v-for="page in totalPages" :key="page" class="page-item"
                                    :class="{ active: page === currentPage }">
                                    <a class="page-link" href="javascript:void(0)" @click.prevent="changePage(page)">{{
                                        page }}</a>
                                </li>
                                <li class="page-item next" :class="{ disabled: currentPage === totalPages }">
                                    <a class="page-link" href="javascript:void(0)"
                                        @click.prevent="changePage(currentPage + 1)">
                                        <i class="fas fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Pagination -->
                </div>
            </div>
        </div>
    </div>
    <footer-two></footer-two>

    <!-- Delete Modal -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center custom-modal-body">
                    <span class="avatar avatar-lg bg-danger-transparent rounded-circle mb-2">
                        <i class="isax isax-trash fs-24 text-danger"></i>
                    </span>
                    <div>
                        <h4 class="mb-2">Delete Course</h4>
                        <p class="mb-3">Are you sure you want to delete this course?</p>
                        <div class="d-flex align-items-center justify-content-center">
                            <a href="javascript:void(0);" class="btn bg-gray-100 rounded-pill me-2"
                                data-bs-dismiss="modal">Cancel</a>
                            <a href="javascript:void(0);" class="btn btn-secondary rounded-pill"
                                @click="deleteCourse">Yes, Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal -->
</template>

<script>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'InstructorCourse',
    setup() {
        const router = useRouter();
        const courses = ref([]);
        const loading = ref(true);
        const error = ref(null);
        const searchQuery = ref('');
        const statusFilter = ref('');
        const currentPage = ref(1);
        const perPage = ref(10);
        const totalCourses = ref(0);
        const courseToDelete = ref(null);

        const fetchCourses = async () => {
            try {
                loading.value = true;
                const response = await axios.get('/online-courses');
                courses.value = response.data.data;
                totalCourses.value = courses.value.length;
                error.value = null;
            } catch (err) {
                error.value = 'Failed to fetch courses. Please try again later.';
                console.error('Error fetching courses:', err);
            } finally {
                loading.value = false;
            }
        };

        const filteredCourses = computed(() => {
            let filtered = courses.value;

            if (statusFilter.value) {
                filtered = filtered.filter(course => course.status === statusFilter.value);
            }

            if (searchQuery.value) {
                const query = searchQuery.value.toLowerCase();
                filtered = filtered.filter(course =>
                    course.name.toLowerCase().includes(query) ||
                    course.description.toLowerCase().includes(query)
                );
            }

            const start = (currentPage.value - 1) * perPage.value;
            const end = start + perPage.value;
            return filtered.slice(start, end);
        });

        const totalPages = computed(() => Math.ceil(filteredCourses.value.length / perPage.value));

        const activeCoursesCount = computed(() =>
            courses.value.filter(course => course.status === 'published').length
        );

        const pendingCoursesCount = computed(() =>
            courses.value.filter(course => course.status === 'pending').length
        );

        const draftCoursesCount = computed(() =>
            courses.value.filter(course => course.status === 'draft').length
        );

        const freeCoursesCount = computed(() =>
            courses.value.filter(course => course.price === 0).length
        );

        const paidCoursesCount = computed(() =>
            courses.value.filter(course => course.price > 0).length
        );

        const filterByStatus = (status) => {
            statusFilter.value = status;
            currentPage.value = 1;
        };

        const searchCourses = () => {
            currentPage.value = 1;
        };

        const changePage = (page) => {
            if (page >= 1 && page <= totalPages.value) {
                currentPage.value = page;
            }
        };

        const getStatusBadgeClass = (status) => {
            switch (status) {
                case 'published':
                    return 'bg-success';
                case 'pending':
                    return 'bg-skyblue';
                case 'draft':
                    return 'bg-info';
                default:
                    return 'bg-secondary';
            }
        };

        const getStatusText = (status) => {
            switch (status) {
                case 'published':
                    return 'Published';
                case 'pending':
                    return 'Pending';
                case 'draft':
                    return 'Draft';
                default:
                    return 'Unknown';
            }
        };

        const editCourse = (course) => {
            router.push(`/instructor/edit-course/${course.id}`);
        };

        const setCourseToDelete = (course) => {
            courseToDelete.value = course;
        };

        const deleteCourse = async () => {
            if (!courseToDelete.value) return;

            try {
                await axios.delete(`/online-courses/${courseToDelete.value.id}`);
                await fetchCourses();
                const modal = document.getElementById('delete_modal');
                const bsModal = bootstrap.Modal.getInstance(modal);
                bsModal.hide();
            } catch (err) {
                error.value = 'Failed to delete course. Please try again later.';
                console.error('Error deleting course:', err);
            }
        };

        onMounted(() => {
            fetchCourses();
        });

        return {
            courses,
            loading,
            error,
            searchQuery,
            currentPage,
            totalPages,
            filteredCourses,
            activeCoursesCount,
            pendingCoursesCount,
            draftCoursesCount,
            freeCoursesCount,
            paidCoursesCount,
            filterByStatus,
            searchCourses,
            changePage,
            getStatusBadgeClass,
            getStatusText,
            editCourse,
            setCourseToDelete,
            deleteCourse
        };
    }
};
</script>

<style scoped>
.action-icon {
    color: #6c757d;
    transition: color 0.2s;
}

.action-icon:hover {
    color: #0d6efd;
}

.badge {
    font-size: 0.75rem;
    padding: 0.35em 0.65em;
}

.badge i {
    font-size: 0.5rem;
}
</style>