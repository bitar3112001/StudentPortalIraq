<!-- src/views/pages/courses/edit-course/edit-course.vue -->
<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Edit Course</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/home/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <router-link to="/instructor/instructor-course">Courses</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Course</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Course edit -->
    <div class="content">
        <div class="container">
            <instructor-header></instructor-header>
            <div class="row">
                <!-- Sidebar -->
                <instructor-sidebar></instructor-sidebar>
                <!-- /Sidebar -->
                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="nextStep">
                                <div class="form-wizard">
                                    <div class="steps">
                                        <div v-for="(step, index) in steps" :key="index"
                                            :class="['step', { active: currentStep === index + 1, completed: currentStep > index + 1 }]"
                                            @click="currentStep = index + 1">
                                            {{ step.title }}
                                        </div>
                                    </div>

                                    <!-- Step 1: Course Information -->
                                    <div v-if="currentStep === 1">
                                        <course-information :formData="formData" @update:form-data="updateFormData" />
                                    </div>

                                    <!-- Step 2: Course Media -->
                                    <div v-if="currentStep === 2">
                                        <course-media :formData="formData" @update:form-data="updateFormData" />
                                    </div>

                                    <!-- Step 3: Course Pricing -->
                                    <div v-if="currentStep === 3">
                                        <course-pricing :formData="formData" @update:form-data="updateFormData" />
                                    </div>

                                    <!-- Step 4: Course Curriculum -->
                                    <div v-if="currentStep === 4">
                                        <course-curriculum :courseId="courseId" />
                                    </div>

                                    <!-- Step Actions -->
                                    <div class="step-actions">
                                        <button type="button" class="btn btn-secondary" @click="prevStep"
                                            v-if="currentStep > 1">
                                            Previous
                                        </button>
                                        <button type="button" class="btn btn-primary ms-auto" @click="nextStep"
                                            v-if="currentStep < 3">
                                            Next
                                        </button>
                                        <button type="submit" class="btn btn-success ms-auto" v-if="currentStep === 3">
                                            Update Course
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Course edit -->

    <add-course-modal></add-course-modal>
    <footer-two></footer-two>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { courseService } from '@/services/courseService';
import CourseInformation from './course-information.vue';
import CourseMedia from './course-media.vue';
import CoursePricing from './course-pricing.vue';
import CourseCurriculum from './course-curriculam.vue';

export default {
    name: 'EditCourse',
    components: {
        CourseInformation,
        CourseMedia,
        CoursePricing,
        CourseCurriculum
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const currentStep = ref(1);
        const courseId = ref(route.params.id);
        const steps = [
            {
                title: 'معلومات الدورة',
                component: 'CourseInformation',
            },
            {
                title: 'الوسائط المرفوعة',
                component: 'CourseMedia',
            },
            {
                title: 'التسعير',
                component: 'CoursePricing',
            },
            {
                title: 'المحتوى',
                component: 'CourseCurriculum',
            },
        ];
        const formData = ref({
            name: '',
            name_ar: '',
            course_alias: '',
            search_keywords: '',
            category_id: null,
            level_id: null,
            instructor_id: null,
            short_description: '',
            short_description_ar: '',
            description: '',
            description_ar: '',
            is_featured: false,
            image: null,
            trailer_url: '',
            price: 0,
            discount: 0,

        });

        const fetchCourseData = async () => {
            try {
                const courseId = route.params.id;
                const response = await courseService.getCourse(courseId);
                console.log('Fetched course data:', response);

                // Extract the course data from the response
                const courseData = response.data.data;

                // Map the response data to our form data structure
                formData.value = {
                    name: courseData.name || '',
                    name_ar: courseData.name_ar || '',
                    course_alias: courseData.course_alias || '',
                    search_keywords: courseData.search_keywords || '',
                    category_id: parseInt(courseData.category_id) || null,
                    level_id: parseInt(courseData.level_id) || null,
                    instructor_id: parseInt(courseData.instructor_id) || null,
                    short_description: courseData.short_description || '',
                    short_description_ar: courseData.short_description_ar || '',
                    description: courseData.description || '',
                    description_ar: courseData.description_ar || '',
                    is_featured: courseData.is_featured === 1 || courseData.is_featured === true,
                    image: courseData.image || null,
                    trailer_url: courseData.trailer_url || '',
                    price: parseFloat(courseData.price) || 0,
                    discount: parseFloat(courseData.discount) || 0,

                };

                console.log('Mapped form data:', formData.value);
            } catch (error) {
                console.error('Error fetching course data:', error);
                alert('Failed to fetch course data. Please try again.');
            }
        };

        const updateFormData = (newData) => {
            formData.value = { ...newData };
        };

        const validateStep = () => {
            switch (currentStep.value) {
                case 1:
                    return formData.value.name &&
                        formData.value.name_ar &&
                        formData.value.course_alias &&
                        formData.value.category_id &&
                        formData.value.level_id &&
                        formData.value.instructor_id &&
                        formData.value.short_description &&
                        formData.value.description;
                case 2:
                    return formData.value.image && formData.value.trailer_url;
                case 3:
                    return formData.value.price >= 0;
                default:
                    return false;
            }
        };

        const nextStep = async () => {
            if (!validateStep()) {
                //alert('Please fill in all required fields');
                return;
            }

            if (currentStep.value === 3) {
                try {
                    const courseId = route.params.id;
                    // Get the original course data
                    const originalData = await courseService.getCourse(courseId);
                    const originalCourseData = originalData.data.data;

                    // Create the data object with all required fields
                    const data = {
                        name: formData.value.name || originalCourseData.name,
                        name_ar: formData.value.name_ar || originalCourseData.name_ar,
                        course_alias: formData.value.course_alias || originalCourseData.course_alias,
                        description: formData.value.description || originalCourseData.description,
                        description_ar: formData.value.description_ar || originalCourseData.description_ar,
                        short_description: formData.value.short_description || originalCourseData.short_description,
                        short_description_ar: formData.value.short_description_ar || originalCourseData.short_description_ar,
                        search_keywords: formData.value.search_keywords || originalCourseData.search_keywords,
                        category_id: formData.value.category_id || originalCourseData.category_id,
                        level_id: formData.value.level_id || originalCourseData.level_id,
                        instructor_id: formData.value.instructor_id || originalCourseData.instructor_id,
                        price: formData.value.price || originalCourseData.price,
                        discount: formData.value.discount || originalCourseData.discount || '0',
                        is_featured: formData.value.is_featured ? '1' : '0',
                        trailer_url: formData.value.trailer_url || originalCourseData.trailer_url,
                    };

                    // Handle image separately
                    if (formData.value.image instanceof File) {
                        console.log('Appending image file to FormData:', {
                            name: formData.value.image.name,
                            type: formData.value.image.type,
                            size: formData.value.image.size
                        });
                        data.image = formData.value.image;
                    } else if (formData.value.image) {
                        console.log('Using existing image path:', formData.value.image);
                        data.image = formData.value.image;
                    }

                    // Log the data being sent
                    console.log('Original data:', originalCourseData);
                    console.log('Form data:', formData.value);
                    console.log('Data object:', data);

                    // Send the request using the course service
                    const response = await courseService.updateCourse(courseId, data);
                    console.log('Update response:', response);
                    router.push('/instructor/instructor-course');
                } catch (error) {
                    console.error('Error updating course:', error);
                    if (error.response) {
                        console.error('Error response:', error.response.data);
                        if (error.response.data.errors) {
                            // Show specific error messages
                            const errorMessages = Object.values(error.response.data.errors).flat();
                            alert(errorMessages.join('\n'));
                        } else {
                            alert(error.response.data.message || 'Failed to update course');
                        }
                    } else if (error.message) {
                        alert(error.message);
                    } else {
                        alert('Failed to update course. Please try again.');
                    }
                }
            } else {
                currentStep.value++;
            }
        };

        const prevStep = () => {
            if (currentStep.value > 1) {
                currentStep.value--;
            }
        };

        onMounted(() => {
            fetchCourseData();
        });

        return {
            currentStep,
            formData,
            updateFormData,
            nextStep,
            prevStep,
            steps,
            courseId
        };
    }
};
</script>

<style scoped>
.form-wizard {
    max-width: 800px;
    margin: 0 auto;
}

.steps {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.step {
    flex: 1;
    text-align: center;
    padding: 1rem;
    background: #f5f5f5;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 4px;
}

.step.active {
    background: #007bff;
    color: white;
}

.step.completed {
    background: #28a745;
    color: white;
}

.step-content {
    margin-bottom: 2rem;
}

.step-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
}

.btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary {
    background: #007bff;
    color: white;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-success {
    background: #28a745;
    color: white;
}
</style>