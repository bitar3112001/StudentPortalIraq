<!-- src/components/CourseMedia.vue -->
<template>
    <div>
        <div class="title">
            <h5>الوسائط المرفوعة</h5>
            <p>مقدمة للدورة</p>
        </div>
        <div class="row">
            <!-- 1. Thumbnail Upload -->
            <div class="col-md-12">
                <div class="input-block">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            <label class="form-label">
                                صورة الدورة<span class="text-danger ms-1">*</span>
                            </label>
                        </div>
                        <div class="col-md-10">
                            <!-- Show the file name or placeholder -->
                            <input type="text" class="form-control" :value="thumbnailName" readonly
                                placeholder="لا يوجد ملف محدد" />
                        </div>
                        <div class="col-md-2 d-grid">
                            <label for="thumbnail-upload" class="file-upload-btn text-center">
                                رفع الملف
                            </label>
                            <input type="file" id="thumbnail-upload"
                                accept="image/jpeg, image/png, image/gif, image/webp" @change="onThumbnailChange"
                                style="display: none;" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thumbnail Preview Section -->
            <div class="col-md-12 mt-3">
                <div class="thumbnail-preview">
                    <img v-if="imagePreview || formData.image"
                        :src="imagePreview || (typeof formData.image === 'string' ? `http://localhost:8000/storage/${formData.image}` : '')"
                        class="img-fluid rounded" alt="Course Thumbnail Preview" />
                    <div v-else class="no-image-placeholder">
                        <i class="fas fa-image"></i>
                        <p>لا يوجد صورة محددة</p>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="upload-img-section d-flex align-items-center justify-content-center"
                    id="upload-img-section">
                    <input type="file" id="upload-img-input" style="display: none;"
                        accept="image/jpeg, image/png, image/gif, image/webp" />
                    <div class="upload-content">
                        <label class="form-label">الرابط المدمج (غير قابل للتعديل)</label>
                        <textarea type="text" class="form-control" v-model="videoEmbedUrl"
                            placeholder="عند الانتهاء، يظهر الرابط المدمج هنا" />
                    </div>
                </div>
                <hr class="mt-4 mb-4" />
            </div>

            <!-- 2. Video Dropzone -->
            <div class="col-md-12">
                <div class="row">
                    <div ref="dropzoneContainer" class="dropzone">
                        <div class="dz-message">قم بإرفاق الفيديو هنا أو انقر لرفع</div>
                    </div>
                </div>
            </div>

            <!-- 3. Video Preview (once embedUrl is available) -->
            <div class="col-md-12" v-if="videoEmbedUrl">
                <div class="position-relative d-flex justify-content-center align-items-center">
                    <div v-html="videoEmbedUrl" class="video-container text-center"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import axios from 'axios';

export default {
    name: 'CourseMedia',
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            dropzoneInstance: null,
            currentVideoId: null,
            videoEmbedUrl: '',
            isProcessing: false,
            thumbnailFile: null,
            thumbnailName: '',
            imagePreview: null,
            imageFile: null,
        };
    },
    created() {
        // Initialize with existing data if available
        if (this.formData.trailer_url) {
            this.videoEmbedUrl = this.formData.trailer_url;
        }
        if (this.formData.image) {
            if (typeof this.formData.image === 'string') {
                // If image is a URL string, extract the filename
                this.thumbnailName = this.formData.image.split('/').pop() || 'Current Image';
            } else if (this.formData.image instanceof File) {
                // If image is a File object, use its name
                this.thumbnailName = this.formData.image.name;
            }
        }
    },
    watch: {
        'formData.thumbnailFile': {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.thumbnailFile = newVal;
                    this.thumbnailName = newVal.name;
                }
            }
        },
        videoEmbedUrl: {
            immediate: true,
            handler(newVal) {
                // If newVal is missing OR only whitespace, use default
                const trailerUrl = newVal?.trim() || 'default';
                console.log('Updating trailer_url:', trailerUrl);
                this.$emit('update:form-data', {
                    ...this.formData,
                    trailer_url: trailerUrl
                });
            }
        }
    },
    methods: {
        /**
         * Poll GET /api/vdocipher/status/{videoId} every 10 seconds
         * until status === "ready", or throw after ~30 attempts (≈5 minutes).
         */
        async waitForVideoProcessing(videoId) {
            const maxAttempts = 30;
            let attempts = 0;

            while (attempts < maxAttempts) {
                try {
                    const resp = await axios.get(`/vdocipher/status/${videoId}`);
                    console.log(`[poll ${attempts + 1}] status of ${videoId} →`, resp.data);

                    if (resp.data.success && resp.data.status.toLowerCase() === 'ready') {
                        return;
                    }

                    // Show message after 10 attempts
                    if (attempts === 10) {
                        const embedRetry = await axios.get(`/vdocipher/embed/${this.currentVideoId}`);
                        if (!embedRetry.data.success) {
                            throw new Error(embedRetry.data.message || 'Embed retry also failed');
                        }
                        console.log('[10] Embed URL received (retry):', embedRetry.data.iframeHtml);
                        this.videoEmbedUrl = embedRetry.data.iframeHtml;
                    }
                } catch (err) {
                    console.error('[error] checking video status:', err);
                    throw err;
                }

                await new Promise((resolve) => setTimeout(resolve, 10000));
                attempts++;
            }

            throw new Error('Video processing timed out after 5 minutes');
        },
        // Called when the user picks a thumbnail file
        onThumbnailChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Validate file type
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                if (!allowedTypes.includes(file.type)) {
                    alert('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
                    return;
                }

                // Validate file size (max 5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB in bytes
                if (file.size > maxSize) {
                    alert('File size exceeds 5MB limit');
                    return;
                }

                // Create preview URL
                this.imagePreview = URL.createObjectURL(file);

                this.thumbnailFile = file;
                this.thumbnailName = file.name;
                this.$emit('update:form-data', {
                    ...this.formData,
                    image: file  // Changed from thumbnailFile to image to match server expectation
                });
            }
        },
        updateVideoUrl(url) {
            this.videoEmbedUrl = url || 'default';
            this.$emit('update:form-data', {
                ...this.formData,
                trailer_url: url || 'default'
            });
        },
        // Expose thumbnailFile and embed URL so parent can read them
        getMediaData() {
            return {
                image: this.thumbnailFile,  // Changed from thumbnailFile to image
                trailer_url: this.videoEmbedUrl,  // Changed from trailerUrl to trailer_url
            };
        },
    },
    mounted() {
        Dropzone.autoDiscover = false;

        // Point Axios at our Laravel API (not VdoCipher directly).
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.defaults.withCredentials = false;

        this.dropzoneInstance = new Dropzone(this.$refs.dropzoneContainer, {
            url: '#',
            autoProcessQueue: false,
            maxFilesize: 5120,
            acceptedFiles: 'video/*',
            addRemoveLinks: true,
            dictDefaultMessage: 'قم بإرفاق الفيديو هنا أو انقر لرفع',
            chunking: false,
            forceChunking: false,
            parallelChunkUploads: false,
            uploadMultiple: false,
            createImageThumbnails: false,
            maxFiles: 1,
            timeout: 0,
        });

        this.dropzoneInstance.on('addedfile', async (file) => {
            if (file.size > 5 * 1024 * 1024 * 1024) {
                this.dropzoneInstance.removeFile(file);
                alert('حجم الملف يتجاوز الحد المسموح به');
                return;
            }

            this.isProcessing = true;

            try {
                console.log('[1] Requesting upload credentials for:', file.name);
                const resp = await axios.put('/vdocipher/upload', {
                    title: file.name,
                });

                console.log('[2] Server response:', resp.data);
                if (!resp.data.success) {
                    throw new Error(resp.data.message || 'Failed to get upload credentials');
                }

                const creds = resp.data.clientPayload;
                this.currentVideoId = resp.data.videoId;

                // Verify required fields:
                if (
                    !creds.uploadLink ||
                    !creds.key ||
                    !creds.policy ||
                    !creds['x-amz-algorithm'] ||
                    !creds['x-amz-credential'] ||
                    !creds['x-amz-date'] ||
                    !creds['x-amz-signature']
                ) {
                    throw new Error('Invalid upload credentials from server');
                }

                console.log('[3] Upload credentials:', {
                    uploadLink: creds.uploadLink,
                    key: creds.key,
                    policy: creds.policy,
                    videoId: this.currentVideoId,
                });

                // Override Dropzone's URL so it POSTS to S3:
                this.dropzoneInstance.options.url = creds.uploadLink;
                console.log('[4] Dropzone will POST to:', this.dropzoneInstance.options.url);

                // In "sending", append all presigned fields; let Dropzone append the file automatically:
                this.dropzoneInstance.on('sending', (uploadFile, xhr, formData) => {
                    formData.delete('key');
                    formData.delete('policy');
                    formData.delete('x-amz-algorithm');
                    formData.delete('x-amz-credential');
                    formData.delete('x-amz-date');
                    formData.delete('x-amz-signature');
                    formData.delete('success_action_status');
                    formData.delete('success_action_redirect');

                    formData.append('key', creds.key);
                    formData.append('policy', creds.policy);
                    formData.append('x-amz-algorithm', creds['x-amz-algorithm']);
                    formData.append('x-amz-credential', creds['x-amz-credential']);
                    formData.append('x-amz-date', creds['x-amz-date']);
                    formData.append('x-amz-signature', creds['x-amz-signature']);
                    formData.append('success_action_status', '201');
                    formData.append('success_action_redirect', '');

                    console.log(
                        '[5] Form fields appended (file will be appended automatically):',
                        {
                            key: creds.key,
                            policy: creds.policy,
                            'x-amz-algorithm': creds['x-amz-algorithm'],
                            'x-amz-credential': creds['x-amz-credential'],
                            'x-amz-date': creds['x-amz-date'],
                            'x-amz-signature': creds['x-amz-signature'],
                            'success_action_status': '201',
                            'success_action_redirect': '',
                            file: uploadFile.name + ' (appended by Dropzone)',
                        }
                    );
                });

                this.dropzoneInstance.on('uploadprogress', (uploadFile, progress) => {
                    console.log(`[6] Upload progress: ${progress.toFixed(2)}%`);
                });

                this.dropzoneInstance.on('success', async (uploadFile, s3Response) => {
                    console.log('[7] S3 upload succeeded');
                    try {
                        console.log('[8] Polling VdoCipher status for videoId =', this.currentVideoId);
                        await this.waitForVideoProcessing(this.currentVideoId);

                        console.log('[9] VdoCipher says "ready". Waiting 5 s before embed…');
                        await new Promise((r) => setTimeout(r, 5000));

                        let embedResp;
                        try {
                            embedResp = await axios.get(`/vdocipher/embed/${this.currentVideoId}`);
                            if (!embedResp.data.success) {
                                throw new Error(embedResp.data.message || 'Embed failed');
                            }
                            console.log('[10] Embed URL received (first try):', embedResp.data.iframeHtml);
                            this.videoEmbedUrl = embedResp.data.iframeHtml;
                        } catch (e1) {
                            console.warn('[10] First embed attempt failed:', e1.message);
                            console.log('[10] Retrying embed in another 5 s…');
                            await new Promise((r) => setTimeout(r, 5000));

                            const embedRetry = await axios.get(`/vdocipher/embed/${this.currentVideoId}`);
                            if (!embedRetry.data.success) {
                                throw new Error(embedRetry.data.message || 'Embed retry also failed');
                            }
                            console.log('[10] Embed URL received (retry):', embedRetry.data.iframeHtml);
                            this.videoEmbedUrl = embedRetry.data.iframeHtml;
                        }
                    } catch (err) {
                        console.error('[error] after S3 upload:', err);
                        alert('Error processing video: ' + err.message);
                    } finally {
                        this.isProcessing = false;
                    }
                });

                this.dropzoneInstance.on('error', (uploadFile, errorMessage, xhr) => {
                    console.error('[S3 upload error]:', {
                        errorMessage,
                        status: xhr ? xhr.status : 'unknown',
                        responseURL: xhr ? xhr.responseURL : 'unknown',
                        response: xhr ? xhr.response : 'unknown',
                    });
                    alert('Upload failed: ' + errorMessage);
                    this.isProcessing = false;
                    this.dropzoneInstance.removeFile(uploadFile);
                });

                this.dropzoneInstance.processQueue();
            } catch (err) {
                console.error('[error] in upload process:', err);
                alert('Upload failed: ' + err.message);
                this.dropzoneInstance.removeFile(file);
                this.isProcessing = false;
            }

        });
    },
};
</script>

<style scoped>
.dropzone {
    border: 2px dashed #0087f7;
    border-radius: 5px;
    background: #fff;
    min-height: 150px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.dropzone:hover {
    background: #f8f9fa;
}

.video-container {
    border-radius: 8px;
    overflow: hidden;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.video-container iframe {
    margin: 0 auto;
    display: inline-block;
}

.thumbnail-preview {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    overflow: hidden;
}

.thumbnail-preview img {
    width: 100%;
    height: auto;
    display: block;
}

.no-image-placeholder {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    color: #6c757d;
}

.no-image-placeholder i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.no-image-placeholder p {
    margin: 0;
    font-size: 0.9rem;
}
</style>