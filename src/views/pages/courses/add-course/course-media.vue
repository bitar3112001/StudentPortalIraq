<template>
    <div class="title">
        <h5>Course Media</h5>
        <p>Intro Course overview provider type. (.mp4, YouTube, Vimeo etc.)</p>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="input-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <label class="form-label">Course Thumbnail<span class="text-danger ms-1">*</span></label>
                    </div>
                    <div class="col-md-10">
                        <input type="text" class="form-control" placeholder="No File Selected">
                    </div>
                    <div class="col-md-2 d-grid">
                        <label for="file-upload" class="file-upload-btn text-center">Upload File</label>
                        <input type="file" id="file-upload" name="file">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="upload-img-section d-flex align-items-center justify-content-center" id="upload-img-section">
                <input type="file" id="upload-img-input" style="display: none;" accept="image/jpeg, image/png, image/gif, image/webp">
                <div class="upload-content">
                    <span class="d-flex align-items-center justify-content-center mb-1">
                    <i class="isax isax-image5 text-secondary fs-24 text-center"></i>
                    </span>
                    <p class="text-center fw-medium mb-1">Upload Image</p>
                    <span class="text-center">JPEG, PNG, GIF, and WebP formats, up to 2 MB</span>
                </div>
            </div>
            <hr class="mt-4 mb-4">
        </div>
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-4">
                    <div class="input-block-link">
                        <label class="form-label">Course Video<span class="text-danger ms-1">*</span></label>
                        <vue-select 
                            :options="Coursevideo"
                            id="course-video"
                            placeholder="External URL"
                        />
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="input-block-link">
                        <label class="form-label">&nbsp;</label>
                        <input type="text" class="form-control" placeholder="External URL Link">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="position-relative">
                <a href="https://www.youtube.com/embed/1trvO6dqQUI" id="openVideoBtn" target="_blank">
                    <img class="img-fluid rounded" src="@/assets/img/course/add-course-1.jpg" alt="img">
                    <div class="play-icon">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </a>
            </div>
            <div id="videoModal">
                <div class="modal-content1">
                    <span class="close-btn" id="closeModal">&times;</span>
                    <iframe id="youtubeIframe" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Coursevideo: ["External URL", "Youtube", "External", "Vimeo"]
        }
    },
}
</script>