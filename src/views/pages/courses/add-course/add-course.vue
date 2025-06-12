<!-- src/views/AddCourse.vue -->
<template>
    <layouts-header></layouts-header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">اضافة دورة جديدة</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/home/index">الرئيسية</router-link>
                            </li>

                            <li  class="breadcrumb-item active"
                                aria-current="page">اضافة دورة جديدة</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Course add -->
    <div v-if="auth.hasPermission('add-online-courses')"  class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="add-course-item">
                        <div class="add-course-container">
                            <div class="form-wizard">
                                <div class="steps">
                                    <div v-for="(step, index) in steps" :key="index"
                                        :class="['step', { active: n === index, completed: n > index }]"
                                        @click="n = index">
                                        {{ step.title }}
                                    </div>
                                </div>

                                <div class="step-content">
                                    <component :is="steps[n].component" v-model:form-data="formData"
                                        @update:form-data="updateFormData" />
                                </div>

                                <div class="step-actions">
                                    <button v-if="n > 0" class="btn btn-secondary" @click="n--">
                                        السابق
                                    </button>
                                    <button class="btn btn-primary" @click="nextStep">
                                        {{ n === steps.length - 1 ? 'إنشاء الدورة' : 'التالي' }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Course add -->

    <add-course-modal></add-course-modal>
    <footer-two></footer-two>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { courseService } from '@/services/courseService';
import { mapGetters } from 'vuex';

export default {
    name: 'AddCourse',
    components: {
        CourseInformation: defineAsyncComponent(() => import('./course-information.vue')),
        CourseMedia: defineAsyncComponent(() => import('./course-media.vue')),
        CoursePricing: defineAsyncComponent(() => import('./course-pricing.vue')),
    },

    setup() {
        console.log('Add Course component is running!');
        const router = useRouter();
        const store = useStore();
        const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
        const currentUser = computed(() => store.getters['auth/currentUser']);
        const role = computed(() => store.getters['auth/role'])
        const userType = computed(() => store.getters['auth/user_type']);
        const auth = computed(() => ({
            hasPermission: (permission) => store.getters['auth/hasPermission'](permission)
        }));
        const is_instructor_online= computed(()=> store.getters['auth/is_online']);
        const n = ref(0);
        const formData = ref({
            // Course Information
            name: '',
            name_ar: '',
            slug: '',
            course_alias: '',
            short_description: '',
            short_description_ar: '',
            description: '',
            description_ar: '',
            category_id: '',
            level_id: '',
            instructor_id: '',
            search_keywords: 'default',  // Initialize with default value
            is_featured: false,
            status: 'draft',
            // Course Media
            image: null,
            trailer_url: 'default',  // Initialize with default value
            // Course Pricing
            price: '',
            discount_price: '',
            is_free: false,
        });

        const steps = [
            {
                title: 'معلومات الدورة',
                component: 'CourseInformation',
            },
            {
                title: 'وسائط الدورة',
                component: 'CourseMedia',
            },
            {
                title: 'تسعير الدورة',
                component: 'CoursePricing',
            },
        ];

        const generateSlug = (text) => {
            return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        };

        const updateFormData = (newData) => {
            console.log('Updating form data:', newData);

            // Ensure required fields are never null
            const sanitizedData = {
                ...newData,
                search_keywords: newData.search_keywords?.trim() || 'default',  // Use default value
                trailer_url: newData.trailer_url?.trim() || 'default',
                status: newData.status || 'draft',
                is_featured: newData.is_featured || false,
                is_free: newData.is_free || false
            };

            // Generate slug from name if name is being updated
            if (newData.name && newData.name !== formData.value.name) {
                sanitizedData.slug = generateSlug(newData.name);
            }

            formData.value = { ...formData.value, ...sanitizedData };
            console.log('Updated form data:', formData.value);
        };

        const validateStep = (stepIndex) => {
            console.log('Validating step:', stepIndex, 'with data:', formData.value);

            switch (stepIndex) {
                case 0: // Course Information
                    if (!formData.value.name) {
                        alert('اسم الدورة مطلوب');
                        return false;
                    }
                    if (!formData.value.name_ar) {
                        alert('اسم الدورة بالعربية مطلوب');
                        return false;
                    }
                    if (!formData.value.course_alias) {
                        alert('الاسم المستعار للدورة مطلوب');
                        return false;
                    }
                    if (!formData.value.description) {
                        alert('وصف الدورة مطلوب');
                        return false;
                    }
                    if (!formData.value.category_id) {
                        alert('تصنيف الدورة مطلوب');
                        return false;
                    }
                    if (!formData.value.level_id) {
                        alert('مستوى الدورة مطلوب');
                        return false;
                    }
                    if (!formData.value.instructor_id) {
                        alert('المدرب مطلوب');
                        return false;
                    }
                    break;

                case 1: // Course Media
                    if (!formData.value.image) {
                        alert('صورة الدورة مطلوبة');
                        return false;
                    }
                    break;

                case 2: // Course Pricing
                    if (!formData.value.is_free && !formData.value.price) {
                        alert('سعر الدورة مطلوب');
                        return false;
                    }
                    break;
            }
            return true;
        };

        const nextStep = async () => {
            console.log('Current step:', n.value);
            console.log('Form data:', formData.value);

            if (!validateStep(n.value)) {
                return;
            }

            if (n.value === steps.length - 1) {
                try {
                    const formDataToSend = new FormData();

                    // Generate slug from name if it's empty
                    if (!formData.value.slug && formData.value.name) {
                        formData.value.slug = generateSlug(formData.value.name);
                    }

                    // First, set the required fields that must not be null
                    formDataToSend.append('search_keywords', formData.value.search_keywords?.trim() || 'default');

                    // Ensure trailer_url is never null
                    const trailerUrl = formData.value.trailer_url?.trim() || 'default';
                    console.log('Setting trailer_url to:', trailerUrl);
                    formDataToSend.append('trailer_url', trailerUrl);

                    // Add all form fields
                    Object.keys(formData.value).forEach(key => {
                        if (key === 'image' && formData.value[key]) {
                            formDataToSend.append('image', formData.value[key]);
                        } else if (formData.value[key] !== null && formData.value[key] !== undefined) {
                            // Convert boolean values to strings
                            if (typeof formData.value[key] === 'boolean') {
                                formDataToSend.append(key, formData.value[key] ? '1' : '0');
                            } else {
                                // Skip search_keywords and trailer_url as they're already set
                                if (key !== 'search_keywords' && key !== 'trailer_url') {
                                    formDataToSend.append(key, formData.value[key]);
                                }
                            }
                        }
                    });

                    // Double-check search_keywords is set
                    if (!formDataToSend.get('search_keywords')) {
                        formDataToSend.set('search_keywords', 'default');
                    }

                    // Log the final form data being sent
                    const formDataObj = {};
                    for (let [key, value] of formDataToSend.entries()) {
                        formDataObj[key] = value;
                    }
                    console.log('Final form data being sent:', formDataObj);

                    // Log the raw FormData entries for debugging
                    console.log('Raw FormData entries:');
                    for (let pair of formDataToSend.entries()) {
                        console.log(pair[0], '→', pair[1]);
                    }

                    const response = await courseService.createCourse(formDataToSend);
                    console.log('Course created:', response);
                    router.push('/instructor/instructor-course');
                } catch (error) {
                    console.error('Error creating course:', error);
                    if (error.response?.data?.errors) {
                        const errors = error.response.data.errors;
                        Object.values(errors).forEach(errorMessages => {
                            alert(errorMessages[0]);
                        });
                    } else {
                        alert('حدث خطأ أثناء إنشاء الدورة');
                    }
                }
            } else {
                n.value++;
            }
        };

        // Check authentication on component mount
        onMounted(async () => {

            await store.dispatch('auth/fetchUserData');
       
        });

        return {
            n,
            steps,
            formData,
            updateFormData,
            nextStep,
            auth,
        };
    },
};
</script>

<style scoped>
.add-course-container {
    padding: 2rem;
}

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
</style>