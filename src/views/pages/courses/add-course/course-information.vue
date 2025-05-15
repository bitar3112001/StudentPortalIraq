<template>
  <div class="title">
    <h5>Basic Information</h5>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="input-block">
        <label class="form-label"
          >Course Title<span class="text-danger ms-1">*</span></label
        >
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-block">
        <label class="form-label"
          >Course Category<span class="text-danger ms-1">*</span></label
        >
        <vue-select :options="Course" id="course-category" placeholder="Select" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-block">
        <label class="form-label"
          >Course Level<span class="text-danger ms-1">*</span></label
        >
        <vue-select :options="Courselevel" id="course-level" placeholder="Select" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-block">
        <label class="form-label">Language<span class="text-danger ms-1">*</span></label>
        <vue-select :options="Language" id="language" placeholder="Select" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-block">
        <label class="form-label"
          >Max Number of Students<span class="text-danger ms-1">*</span></label
        >
        <input type="text" class="form-control student-count" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-block">
        <label class="form-label"
          >Public / Private Course<span class="text-danger ms-1">*</span></label
        >
        <vue-select :options="Privatecourse" id="private-course" placeholder="Select" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="input-block">
        <label class="form-label"
          >Short Description<span class="text-danger ms-1">*</span></label
        >
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="input-block">
        <label class="form-label"
          >Course Description<span class="text-danger ms-1">*</span></label
        >
        <div class="summernote">
          <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
          ></ckeditor>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="bg-light border p-4 rounded-3">
        <h6 class="mb-2">What will students learn in your course?</h6>
        <div class="input-block" id="input-block">
          <div class="d-flex align-items-center add-new-input">
            <input type="text" class="form-control" value="Become a UX designer" />
            <a href="javascript:void(0);" class="link-trash" @click="deleteItem()">
              <i class="isax isax-trash"></i>
            </a>
          </div>
          <div
            class="d-flex align-items-center add-new-input"
            v-for="(course, index) in course"
            :key="index"
          >
            <input type="text" class="form-control" placeholder="Enter new item" />
            <a href="javascript:void(0);" class="link-trash" @click="deleteItem(index)">
              <i class="isax isax-trash"></i>
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <a
            href="javascript:void(0);"
            @click="addNewItem"
            class="d-flex align-items-center add-new-topic"
            id="add-new-topic-btn"
          >
            <i class="isax isax-add me-1"></i> Add New Item
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="bg-light border p-4 rounded-3">
        <h6 class="mb-2">Requirements</h6>
        <div class="input-block">
          <div class="d-flex align-items-center add-new-input">
            <input type="text" class="form-control" />
            <a href="javascript:void(0);" class="link-trash"
              ><i class="isax isax-trash"></i
            ></a>
          </div>
          <div
            class="d-flex align-items-center add-new-input"
            v-for="(requirements, index) in requirements"
            :key="index"
          >
            <input type="text" class="form-control" />
            <a
              href="javascript:void(0);"
              class="link-trash"
              @click="deleteRequirements(index)"
            >
              <i class="isax isax-trash"></i>
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-end">
          <a
            href="javascript:void(0);"
            @click="addNewRequirements"
            class="d-flex align-items-center add-new-topic"
          >
            <i class="isax isax-add me-1"></i> Add New Item
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-check form-switch form-check-md mb-0 mt-3">
        <input
          class="form-check-input form-checked-success"
          type="checkbox"
          id="checkFeature"
          checked=""
        />
        <label class="form-check-label" for="checkFeature"
          >Check this for featured course</label
        >
      </div>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Enter Ticket Detail",
      editorConfig: {},
      Course: [
        "Select",
        "Management",
        "IT & Softwares",
        "Marketing",
        "Finance",
        "Productivity",
      ],
      Courselevel: ["Select", "Beginner", "Intermediate", "Advanced", "Expert"],
      Language: ["Select", "French", "German", "Arabic"],
      Privatecourse: ["Select", "Private", "Public"],
      course: [],
      requirements: [],
    };
  },
  methods: {
    addNewItem() {
      this.course.push({
        course: "",
      });
    },
    deleteItem(index) {
      this.course.splice(index, 1);
    },
    addNewRequirements() {
      this.requirements.push({
        requirements: "",
      });
    },
    deleteRequirements(index) {
      this.requirements.splice(index, 1);
    },
  },
};
</script>
