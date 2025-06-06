<template>
    <layouts-header></layouts-header>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Course Levels</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item">
                                <router-link to="/home/index">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Course Levels</li>
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
                    <div class="page-title d-flex align-items-center justify-content-between">
                        <h5 class="fw-bold">Course Levels</h5>
                        <button class="btn btn-primary" @click="openAddModal">
                            <i class="isax isax-add me-2"></i>Add Level
                        </button>
                    </div>

                    <!-- Levels Table -->
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name (English)</th>
                                            <th>Name (Arabic)</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="level in levels" :key="level.id">
                                            <td>{{ level.name }}</td>
                                            <td>{{ level.name_ar }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-info me-2" @click="openEditModal(level)">
                                                    <i class="isax isax-edit-2"></i>
                                                </button>
                                                <button class="btn btn-sm btn-danger" @click="deleteLevel(level.id)">
                                                    <i class="isax isax-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Add/Edit Modal -->
    <div class="modal fade" id="levelModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ isEditing ? 'Edit Level' : 'Add Level' }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="saveLevel">
                        <div class="mb-3">
                            <label class="form-label">Name (English)</label>
                            <input type="text" class="form-control" v-model="form.name" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Name (Arabic)</label>
                            <input type="text" class="form-control" v-model="form.name_ar" required>
                        </div>
                        <div class="text-end">
                            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import apiClient from '@/services/api'
import { Modal } from 'bootstrap'

export default {
    setup() {
        const levels = ref([])
        const form = ref({
            name: '',
            name_ar: ''
        })
        const isEditing = ref(false)
        const currentId = ref(null)
        let modal = null

        const loadLevels = async () => {
            try {
                const response = await apiClient.get('/course-levels')
                levels.value = response.data.data
            } catch (error) {
                console.error('Error loading levels:', error)
            }
        }

        const openAddModal = () => {
            isEditing.value = false
            form.value = { name: '', name_ar: '' }
            modal.show()
        }

        const openEditModal = (level) => {
            isEditing.value = true
            currentId.value = level.id
            form.value = { ...level }
            modal.show()
        }

        const saveLevel = async () => {
            try {
                if (isEditing.value) {
                    await apiClient.put(`/course-levels/${currentId.value}`, form.value)
                } else {
                    await apiClient.post('/course-levels', form.value)
                }
                modal.hide()
                loadLevels()
            } catch (error) {
                console.error('Error saving level:', error)
            }
        }

        const deleteLevel = async (id) => {
            if (confirm('Are you sure you want to delete this level?')) {
                try {
                    await apiClient.delete(`/course-levels/${id}`)
                    loadLevels()
                } catch (error) {
                    console.error('Error deleting level:', error)
                }
            }
        }

        onMounted(() => {
            loadLevels()
            modal = new Modal(document.getElementById('levelModal'))
        })

        return {
            levels,
            form,
            isEditing,
            openAddModal,
            openEditModal,
            saveLevel,
            deleteLevel
        }
    }
}
</script>