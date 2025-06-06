import apiClient from './api';

export const courseService = {
  createCourse(formData) {
    return apiClient.post(
      '/online-courses',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );
  },

  getCourse(id) {
    return apiClient.get(`/online-courses/${id}`);
  },

  updateCourse(id, formData) {
    // Create a new FormData instance
    const data = new FormData();
    
    // Add _method for Laravel
    data.append('_method', 'PUT');
    
    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            // Skip the image field as we'll handle it separately
            if (key === 'image') return;
            
            // Convert numbers to strings for FormData
            if (typeof value === 'number') {
                value = value.toString();
            }
            data.append(key, value);
        }
    });
    
    // Handle image separately
    if (formData.image instanceof File) {
        data.append('image', formData.image);
    }
    
    // Always use multipart/form-data for updates since we might have files
    return apiClient.post(
        `/online-courses/${id}`,
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }
    );
  },

  getCategories: async () => {
    try {
      const response = await apiClient.get('/course-categories');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getLevels: async () => {
    try {
      const response = await apiClient.get('/course-levels');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getOnlineInstructors: async () => {
    try {
      const response = await apiClient.get('/online-instructors');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
}; 