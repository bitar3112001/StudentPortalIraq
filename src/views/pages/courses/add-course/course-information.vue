<!-- src/components/CourseInformation.vue -->
<template>
  <div>
    <div class="title">
      <h5>المعلومات الأساسية</h5>
    </div>
    <div class="row">
      <!-- Course Title -->
      <div class="col-md-6">
        <div class="input-block">
          <label class="form-label">عنوان الدورة<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.name"
            @input="updateField('name', $event.target.value)" />
        </div>
      </div>

      <!-- Course Arabic Title -->
      <div class="col-md-6">
        <div class="input-block">
          <label class="form-label">عنوان الدورة باللغة العربية<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.name_ar"
            @input="updateField('name_ar', $event.target.value)" />
        </div>
      </div>

      <!-- Course Alias -->
      <div class="col-md-6">
        <div class="input-block">
          <label class="form-label">الاسم المستعار للدورة<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.course_alias"
            @input="updateField('course_alias', $event.target.value)" />
        </div>
      </div>

      <!-- Search Keywords (tags) -->
      <div class="col-md-6">
        <div class="input-block">
          <label class="form-label">الكلمات المفتاحية للبحث<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.search_keywords"
            @input="updateField('search_keywords', $event.target.value)" placeholder="ادخل الكلمات المفتاحية بفواصل" />
          <small class="text-muted">ادخل الكلمات المفتاحية بفواصل (مثلا: كلمة 1, كلمة 2, كلمة 3)</small>
        </div>
      </div>

      <!-- Category (dropdown) -->
      <div class="col-md-4">
        <div class="input-block">
          <label class="form-label">التصنيف<span class="text-danger ms-1">*</span></label>
          <vue-select :options="Course" id="course-category" placeholder="اختر" :value="formData.category_id"
            @select="updateField('category_id', $event.id)" />
        </div>
      </div>

      <!-- Level -->
      <div class="col-md-4">
        <div class="input-block">
          <label class="form-label">المستوى<span class="text-danger ms-1">*</span></label>
          <vue-select :options="Courselevel" id="course-level" placeholder="اختر" :value="formData.level_id"
            @select="updateField('level_id', $event.id)" />
        </div>
      </div>

      <!-- Instructor -->
      <div class="col-md-4">
        <div class="input-block">
          <label class="form-label">المدرس<span class="text-danger ms-1">*</span></label>
          <vue-select :options="instructors" id="course-instructor" placeholder="اختر" :value="formData.instructor_id"
            @select="updateField('instructor_id', $event.id)" />
        </div>
      </div>

      <!-- Short Description -->
      <div class="col-md-12">
        <div class="input-block">
          <label class="form-label">الوصف المختصر<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.short_description"
            @input="updateField('short_description', $event.target.value)" />
        </div>
      </div>

      <!-- Short Description Arabic -->
      <div class="col-md-12">
        <div class="input-block">
          <label class="form-label">الوصف المختصر باللغة العربية<span class="text-danger ms-1">*</span></label>
          <input type="text" class="form-control" :value="formData.short_description_ar"
            @input="updateField('short_description_ar', $event.target.value)" />
        </div>
      </div>

      <!-- Course Description (rich text) -->
      <div class="col-md-12">
        <div class="input-block">
          <label class="form-label">الوصف الكامل<span class="text-danger ms-1">*</span></label>
          <div class="summernote">
            <ckeditor :editor="editor" :value="formData.description" @input="updateField('description', $event)"
              :config="editorConfig"></ckeditor>
          </div>
        </div>
      </div>

      <!-- Course Description Arabic (rich text) -->
      <div class="col-md-12">
        <div class="input-block">
          <label class="form-label">الوصف الكامل باللغة العربية<span class="text-danger ms-1">*</span></label>
          <div class="summernote">
            <ckeditor :editor="editor" :value="formData.description_ar" @input="updateField('description_ar', $event)"
              :config="editorConfig"></ckeditor>
          </div>
        </div>
      </div>

      <!-- Featured toggle -->
      <div class="col-md-6">
        <div class="form-check form-switch form-check-md mb-0 mt-3">
          <input class="form-check-input form-checked-success" type="checkbox" id="checkFeature"
            :checked="formData.is_featured" @change="updateField('is_featured', $event.target.checked)" />
          <label class="form-check-label" for="checkFeature">
            تحديد هذا للدورة المميزة
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import VueSelect from 'vue3-select2-component';
import { courseService } from '@/services/courseService';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
  components: {
    VueSelect,
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
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'undo',
            'redo'
          ]
        },
        language: 'ar',
        placeholder: 'اكتب وصف الدورة هنا...'
      },

      Course: [],       // will hold array of { id, text } for categories
      Courselevel: [],  // same for levels
      instructors: [],  // same for instructors
    };
  },

  created() {
    // Initialize search_keywords with a default value
    this.$emit('update:form-data', {
      ...this.formData,
      search_keywords: 'default'
    });

    // Fetch initial data
    this.fetchData();
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

        // Map them to { id, text } format for select2
        this.Course = (categories || []).map(cat => ({
          id: cat.id,
          text: cat.name
        }));
        this.Courselevel = (levels || []).map(lv => ({
          id: lv.id,
          text: lv.name
        }));
        this.instructors = (instructors || []).map(ins => ({
          id: ins.id,
          text: ins.name
        }));
      } catch (error) {
        console.error('Error fetching course meta data:', error);
        // Initialize with empty arrays if there's an error
        this.Course = [];
        this.Courselevel = [];
        this.instructors = [];
      }
    },

    // Update any form field
    updateField(field, value) {
      console.log('Updating field:', field, 'with value:', value);
      const newData = {
        ...this.formData,
        [field]: value || 'default'  // Ensure we never send null
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
};
</script>

<style scoped>
.input-block {
  margin-bottom: 1.5rem;
}

.v-select {
  width: 100%;
}

.ck-editor__editable {
  min-height: 200px;
}
</style>
