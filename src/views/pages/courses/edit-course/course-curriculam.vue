<template>
    <div class="title">
        <div class="row align-items-center row-gap-2">
            <div class="col-md-6">
                <h5 class="mb-0">المنهج</h5>
            </div>
            <div class="col-md-6 text-md-end">
                <a href="javascript:void(0);" class="btn add-edit-btn d-inline-flex align-items-center"
                    data-bs-toggle="modal" data-bs-target="#add-lesson"><i class="isax isax-add-circle5 me-2"></i>إضافة
                    درس</a>
            </div>
        </div>
    </div>
    <div>
        <div class="accordions-items-seperate" id="accordionSpacingExample">
            <div class="accordion-body">
                <div v-if="sessions.length === 0" class="text-center p-4">
                    <p class="text-muted mb-0">لا يوجد دروس لهذه الدورة.</p>
                </div>
                <div v-else v-for="session in sessions" :key="session.id"
                    class="d-flex align-items-center justify-content-between bg-white p-2 border rounded-3 mb-3">
                    <div class="d-flex align-items-center">
                        <span><i class="isax isax-play-circle5 text-success fs-24 me-1"></i></span>
                        <p class="fw-medium text-gray-5 mb-0">{{ session.name }}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <a href="javascript:void(0);" class="edit-btn1" @click="editSession(session)"><i
                                class="isax isax-edit-25 fs-16"></i></a>
                        <a href="javascript:void(0);" class="delete-btn1" @click="deleteSession(session.id)"><i
                                class="isax isax-trash fs-16"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="add-lesson">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>{{ editingSession ? 'Edit Lesson' : 'New Lesson' }}</h5>
                    <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i class="isax isax-close-circle5"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-block mb-4">
                        <label class="form-label">اسم الدرس (الإنجليزية)<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" v-model="formData.name"
                            :class="{ 'is-invalid': errors.name }">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
                    </div>
                    <div class="input-block mb-4">
                        <label class="form-label">اسم الدرس (العربية)<span class="text-danger ms-1">*</span></label>
                        <input type="text" class="form-control" v-model="formData.name_ar"
                            :class="{ 'is-invalid': errors.name_ar }">
                        <div class="invalid-feedback" v-if="errors.name_ar">{{ errors.name_ar }}</div>
                    </div>
                    <div class="input-block mb-4">
                        <label class="form-label">الوصف (الإنجليزية)</label>
                        <textarea class="form-control" v-model="formData.description"
                            :class="{ 'is-invalid': errors.description }"></textarea>
                        <div class="invalid-feedback" v-if="errors.description">{{ errors.description }}</div>
                    </div>
                    <div class="input-block mb-4">
                        <label class="form-label">الوصف (العربية)</label>
                        <textarea class="form-control" v-model="formData.description_ar"
                            :class="{ 'is-invalid': errors.description_ar }"></textarea>
                        <div class="invalid-feedback" v-if="errors.description_ar">{{ errors.description_ar }}</div>
                    </div>

                    <!-- Video Upload Section -->
                    <div class="input-block mb-4">
                        <label class="form-label">رفع الفيديو<span class="text-danger ms-1">*</span></label>
                        <div ref="dropzoneContainer" class="dropzone">
                            <div class="dz-message">قم بإرفاق الفيديو هنا أو انقر لرفع</div>
                        </div>
                        <div class="invalid-feedback" v-if="errors.video_url">{{ errors.video_url }}</div>

                        <!-- Progress Bar -->
                        <div v-if="isProcessing" class="mt-3">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                    :style="{ width: uploadProgress + '%' }" :aria-valuenow="uploadProgress"
                                    aria-valuemin="0" aria-valuemax="100">
                                    {{ uploadProgress }}%
                                </div>
                            </div>
                            <small class="text-muted mt-1 d-block">يتم معالجة الفيديو... قد يستغرق هذا بضع
                                دقائق.</small>
                        </div>

                        <!-- Video URL Input -->
                        <div v-if="videoEmbedUrl" class="mt-3">
                            <label class="form-label">الرابط المدمج للفيديو</label>
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="formData.video_url" readonly>
                                <button class="btn btn-outline-secondary" type="button"
                                    @click="copyToClipboard(formData.video_url)">
                                    <i class="isax isax-copy"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Video Preview -->
                    <div v-if="videoEmbedUrl" class="input-block mb-4">
                        <label class="form-label">عرض الفيديو</label>
                        <div class="position-relative">
                            <div v-html="videoEmbedUrl"></div>
                        </div>
                    </div>


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-2 btn-light" data-bs-dismiss="modal">إلغاء</button>
                    <button type="submit" class="btn btn-secondary" @click="saveSession">{{ editingSession ? 'تحديث' :
                        'إضافة جديد' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import axios from 'axios';
import apiClient from '@/services/api';
import { Modal } from 'bootstrap';

export default {
    name: 'CourseCurriculam',
    props: {
        courseId: {
            type: [Number, String],
            required: true
        }
    },
    data() {
        return {
            sessions: [],
            editingSession: null,
            dropzoneInstance: null,
            currentVideoId: null,
            videoEmbedUrl: '',
            isProcessing: false,
            uploadProgress: 0,
            formData: {
                course_id: null,
                name: '',
                name_ar: '',
                description: '',
                description_ar: '',
                video_url: '',
                status: 0
            },
            errors: {
                name: '',
                name_ar: '',
                description: '',
                description_ar: '',
                video_url: ''
            }
        };
    },
    created() {
        this.formData.course_id = this.courseId;
        this.loadSessions();
    },
    methods: {
        clearErrors() {
            this.errors = {
                name: '',
                name_ar: '',
                description: '',
                description_ar: '',
                video_url: ''
            };
        },
        async loadSessions() {
            try {
                console.log('Loading sessions for course:', this.courseId);
                const response = await apiClient.get(`/course-online-sessions?course_id=${this.courseId}`);
                console.log('Sessions response:', response.data);
                if (response.data && response.data.data) {
                    // Filter sessions by course_id
                    this.sessions = response.data.data.filter(session => {
                        console.log('Checking session:', session);
                        return session.course_id === Number(this.courseId);
                    });
                    console.log('Filtered sessions:', this.sessions);
                }
            } catch (error) {
                console.error('Error loading sessions:', error);
                if (error.response?.status === 401) {
                    this.$emit('unauthorized');
                }
            }
        },
        async saveSession() {
            this.clearErrors();

            // Validate required fields
            if (!this.formData.name) {
                this.errors.name = 'Lesson name is required';
                return;
            }
            if (!this.formData.name_ar) {
                this.errors.name_ar = 'Lesson name in Arabic is required';
                return;
            }
            if (!this.formData.video_url) {
                this.errors.video_url = 'Video is required';
                return;
            }

            try {
                let response;
                if (this.editingSession) {
                    response = await apiClient.put(`/course-online-sessions/${this.editingSession.id}`, this.formData);
                } else {
                    response = await apiClient.post('/course-online-sessions', this.formData);
                }

                // Check if the response indicates success
                if (response.data && response.data.success !== false) {
                    await this.loadSessions();
                    this.resetForm();
                    // Close modal
                    const modalElement = document.getElementById('add-lesson');
                    const modal = Modal.getInstance(modalElement);
                    if (modal) {
                        modal.hide();
                    }
                } else {
                    // Handle server-side validation errors
                    if (response.data && response.data.errors) {
                        Object.keys(response.data.errors).forEach(key => {
                            if (this.errors.hasOwnProperty(key)) {
                                this.errors[key] = response.data.errors[key][0];
                            }
                        });
                    }
                }
            } catch (error) {
                console.error('Error saving session:', error);
                if (error.response?.status === 401) {
                    this.$emit('unauthorized');
                } else if (error.response?.status === 422) {
                    // Handle validation errors
                    const validationErrors = error.response.data.errors;
                    Object.keys(validationErrors).forEach(key => {
                        if (this.errors.hasOwnProperty(key)) {
                            this.errors[key] = validationErrors[key][0];
                        }
                    });
                } else {
                    alert('An error occurred while saving the lesson. Please try again.');
                }
            }
        },
        editSession(session) {
            this.editingSession = session;
            this.formData = { ...session };
            this.videoEmbedUrl = session.video_url;
            this.clearErrors();
            // Show modal
            const modalElement = document.getElementById('add-lesson');
            const modal = new Modal(modalElement);
            modal.show();
        },
        async deleteSession(id) {
            if (confirm('Are you sure you want to delete this session?')) {
                try {
                    await apiClient.delete(`/course-online-sessions/${id}`);
                    await this.loadSessions();
                } catch (error) {
                    console.error('Error deleting session:', error);
                    if (error.response?.status === 401) {
                        this.$emit('unauthorized');
                    }
                }
            }
        },
        resetForm() {
            this.editingSession = null;
            this.formData = {
                course_id: this.courseId,
                name: '',
                name_ar: '',
                description: '',
                description_ar: '',
                video_url: '',
                status: 0
            };
            this.videoEmbedUrl = '';
            this.clearErrors();
        },
        async waitForVideoProcessing(videoId) {
            const maxAttempts = 30;
            let attempts = 0;

            while (attempts < maxAttempts) {
                try {
                    const resp = await apiClient.get(`/api/vdocipher/status/${videoId}`);
                    console.log(`[poll ${attempts + 1}] status of ${videoId} →`, resp.data);

                    // Update progress during processing (from 50% to 90%)
                    this.uploadProgress = 50 + (attempts / maxAttempts * 40);

                    if (resp.data.success && resp.data.status.toLowerCase() === 'ready') {
                        // Don't return here, continue to get the embed URL
                        console.log('Video is ready, getting embed URL...');
                    }

                    // Show message after 2 attempts
                    if (attempts === 2) {
                        const embedRetry = await apiClient.get(`/api/vdocipher/embed/${this.currentVideoId}`);
                        if (!embedRetry.data.success) {
                            throw new Error(embedRetry.data.message || 'Embed retry also failed');
                        }
                        console.log('[10] Embed URL received (retry):', embedRetry.data.iframeHtml);
                        this.videoEmbedUrl = embedRetry.data.iframeHtml;
                        this.formData.video_url = embedRetry.data.iframeHtml;
                        if (this.formData.video_url && this.formData.video_url.includes('<iframe')) {
                            this.isProcessing = false;
                            this.uploadProgress = 100;
                            return; // Only return when we have a valid iframe
                        }
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
        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // You could add a toast notification here
                alert('URL copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        }
    },
    mounted() {
        Dropzone.autoDiscover = false;

        this.dropzoneInstance = new Dropzone(this.$refs.dropzoneContainer, {
            url: '#',
            autoProcessQueue: false,
            maxFilesize: 5120,
            acceptedFiles: 'video/*',
            addRemoveLinks: true,
            dictDefaultMessage: 'Drop video here or click to upload',
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
                alert('File size exceeds 5 GB limit');
                return;
            }

            this.isProcessing = true;
            this.uploadProgress = 0;

            try {
                console.log('[1] Requesting upload credentials for:', file.name);
                const resp = await apiClient.put('/api/vdocipher/upload', {
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
                    // Only update progress up to 50% during upload
                    this.uploadProgress = Math.min(progress, 50);
                });

                this.dropzoneInstance.on('success', async (uploadFile, s3Response) => {
                    console.log('[7] S3 upload succeeded');
                    // Set progress to 50% after upload
                    this.uploadProgress = 50;
                    try {
                        console.log('[8] Polling VdoCipher status for videoId =', this.currentVideoId);
                        await this.waitForVideoProcessing(this.currentVideoId);

                        console.log('[9] VdoCipher says "ready". Waiting 5 s before embed…');
                        await new Promise((r) => setTimeout(r, 5000));

                        let embedResp;
                        try {
                            embedResp = await apiClient.get(`/api/vdocipher/embed/${this.currentVideoId}`);
                            if (!embedResp.data.success) {
                                throw new Error(embedResp.data.message || 'Embed failed');
                            }
                            console.log('[10] Embed URL received (first try):', embedResp.data.iframeHtml);
                            this.videoEmbedUrl = embedResp.data.iframeHtml;
                            this.formData.video_url = embedResp.data.iframeHtml;
                            if (this.formData.video_url && this.formData.video_url.includes('<iframe')) {
                                this.isProcessing = false;
                                this.uploadProgress = 100;
                            }
                        } catch (e1) {
                            console.warn('[10] First embed attempt failed:', e1.message);
                            console.log('[10] Retrying embed in another 5 s…');
                            await new Promise((r) => setTimeout(r, 5000));

                            const embedRetry = await apiClient.get(`/api/vdocipher/embed/${this.currentVideoId}`);
                            if (!embedRetry.data.success) {
                                throw new Error(embedRetry.data.message || 'Embed retry also failed');
                            }
                            console.log('[10] Embed URL received (retry):', embedRetry.data.iframeHtml);
                            this.videoEmbedUrl = embedRetry.data.iframeHtml;
                            this.formData.video_url = embedRetry.data.iframeHtml;
                            if (this.formData.video_url && this.formData.video_url.includes('<iframe')) {
                                this.isProcessing = false;
                                this.uploadProgress = 100;
                            }
                        }
                    } catch (err) {
                        console.error('[error] after S3 upload:', err);
                        alert('Error processing video: ' + err.message);
                        this.isProcessing = false;
                        this.uploadProgress = 0;
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
    }
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
}

.progress {
    height: 20px;
    margin-bottom: 10px;
}

.progress-bar {
    transition: width 0.3s ease;
}

.input-group .btn {
    z-index: 0;
}
</style>