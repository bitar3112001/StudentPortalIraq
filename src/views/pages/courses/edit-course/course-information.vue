<!-- src/components/CourseInformation.vue -->
<template>
    <div>
        <div class="title">
            <h5>المعلومات الاساسية</h5>
        </div>
        <div class="row">
            <!-- Course Title -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">اسم الدورة<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.name"
                        @input="updateField('name', $event.target.value)" />
                </div>
            </div>

            <!-- Course Arabic Title -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">اسم الدورة بالعربية<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.name_ar"
                        @input="updateField('name_ar', $event.target.value)" />
                </div>
            </div>

            <!-- Course Alias -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">الاسم المستعار<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.course_alias"
                        @input="updateField('course_alias', $event.target.value)" />
                </div>
            </div>

            <!-- Search Keywords (tags) -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">الكلمات المفتاحية للبحث<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.search_keywords"
                        @input="updateField('search_keywords', $event.target.value)"
                        placeholder="ادخل الكلمات المفتاحية بفواصل" />
                    <small class="text-muted">ادخل الكلمات المفتاحية بفواصل (مثلا: كلمة 1, كلمة 2, كلمة 3)</small>
                </div>
            </div>

            <!-- Category (dropdown) -->
            <div class="col-md-4">
                <div class="input-block">
                    <label class="form-label">التصنيف<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" v-model="localFormData.category_id"
                        @change="handleSelectChange('category_id', $event.target.value)">
                        <option value="">اختر التصنيف</option>
                        <option v-for="category in Course" :key="category.id" :value="category.id">
                            {{ category.text }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Level -->
            <div class="col-md-4">
                <div class="input-block">
                    <label class="form-label">المستوى<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" v-model="localFormData.level_id"
                        @change="handleSelectChange('level_id', $event.target.value)">
                        <option value="">اختر المستوى</option>
                        <option v-for="level in Courselevel" :key="level.id" :value="level.id">
                            {{ level.text }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Instructor -->
            <div class="col-md-4">
                <div class="input-block">
                    <label class="form-label">المدرس<span class="text-danger ms-1">*</span></label>
                    <select class="form-select" v-model="localFormData.instructor_id"
                        @change="handleSelectChange('instructor_id', $event.target.value)">
                        <option value="">اختر المدرس</option>
                        <option v-for="instructor in instructors" :key="instructor.id" :value="instructor.id">
                            {{ instructor.text }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Short Description -->
            <div class="col-md-12">
                <div class="input-block">
                    <label class="form-label">الوصف المختصر<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.short_description"
                        @input="updateField('short_description', $event.target.value)" />
                </div>
            </div>

            <!-- Short Description Arabic -->
            <div class="col-md-12">
                <div class="input-block">
                    <label class="form-label">الوصف المختصر بالعربية<span class="text-danger ms-1">*</span></label>
                    <input type="text" class="form-control" :value="localFormData.short_description_ar"
                        @input="updateField('short_description_ar', $event.target.value)" />
                </div>
            </div>

            <!-- Course Description (rich text) -->
            <div class="col-md-12">
                <div class="input-block">
                    <label class="form-label">الوصف<span class="text-danger ms-1">*</span></label>
                    <div class="summernote">
                        <ckeditor :editor="editor" v-model="localFormData.description"
                            @input="updateField('description', $event)" :config="editorConfig"></ckeditor>
                    </div>
                </div>
            </div>

            <!-- Course Description Arabic (rich text) -->
            <div class="col-md-12">
                <div class="input-block">
                    <label class="form-label">الوصف بالعربية<span class="text-danger ms-1">*</span></label>
                    <div class="summernote">
                        <ckeditor :editor="editor" v-model="localFormData.description_ar"
                            @input="updateField('description_ar', $event)" :config="editorConfig"></ckeditor>
                    </div>
                </div>
            </div>

            <!-- Featured toggle -->
            <div class="col-md-6">
                <div class="form-check form-switch form-check-md mb-0 mt-3">
                    <input class="form-check-input form-checked-success" type="checkbox" id="checkFeature"
                        :checked="localFormData.is_featured"
                        @change="updateField('is_featured', $event.target.checked)" />
                    <label class="form-check-label" for="checkFeature">
                        اختر هذا للدورة المميزة
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { courseService } from '@/services/courseService';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
    name: 'CourseInformation',
    components: {
        ckeditor: CKEditor.component
    },
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'undo', 'redo']
            },
            Course: [],       // will hold array of { id, text } for categories
            Courselevel: [],  // same for levels
            instructors: [],  // same for instructors
            localFormData: {
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
                duration: 0,
                status: 'draft'
            }
        };
    },

    watch: {
        formData: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.localFormData = { ...newVal };
                }
            }
        }
    },

    methods: {
        async fetchData() {
            try {
                // Fetch categories, levels, instructors in parallel
                const [categories, levels, instructors] = await Promise.all([
                    courseService.getCategories(),
                    courseService.getLevels(),
                    courseService.getOnlineInstructors(),
                ]);

                // Map them to { id, text } format
                this.Course = (categories || []).map(cat => ({
                    id: parseInt(cat.id),
                    text: cat.name
                }));
                this.Courselevel = (levels || []).map(lv => ({
                    id: parseInt(lv.id),
                    text: lv.name
                }));
                this.instructors = (instructors || []).map(ins => ({
                    id: parseInt(ins.id),
                    text: ins.name
                }));

                console.log('Fetched data:', {
                    categories: this.Course,
                    levels: this.Courselevel,
                    instructors: this.instructors,
                    formData: this.localFormData
                });
            } catch (error) {
                console.error('Error fetching course meta data:', error);
                this.Course = [];
                this.Courselevel = [];
                this.instructors = [];
            }
        },

        handleSelectChange(field, value) {
            const newValue = value ? parseInt(value) : null;
            this.localFormData[field] = newValue;
            this.updateField(field, newValue);
        },

        // Update any form field
        updateField(field, value) {
            console.log('Updating field:', field, 'with value:', value);
            const newData = {
                ...this.localFormData,
                [field]: value
            };

            // If updating name, also update slug
            if (field === 'name') {
                newData.slug = this.generateSlug(value);
            }

            this.$emit('update:form-data', newData);
        },

        generateSlug(text) {
            return text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        }
    },

    async mounted() {
        // Initialize search_keywords with a default value if not set
        if (!this.localFormData.search_keywords) {
            this.localFormData.search_keywords = 'default';
            this.updateField('search_keywords', 'default');
        }

        // Fetch initial data
        await this.fetchData();
    }
};
</script>

<style scoped>
.input-block {
    margin-bottom: 1.5rem;
}

.ck-editor__editable {
    min-height: 200px;
}
</style>