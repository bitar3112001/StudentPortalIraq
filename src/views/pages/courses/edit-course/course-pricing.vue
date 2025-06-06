<!-- src/components/CoursePricing.vue -->
<template>
    <div>
        <div class="title">
            <h5>التسعير</h5>
        </div>
        <div class="row">
            <!-- Course Price -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">سعر الدورة<span class="text-danger ms-1">*</span></label>
                    <div class="input-group">
                        <span class="input-group-text"></span>
                        <input type="number" class="form-control" :value="formData.price"
                            @input="updateField('price', $event.target.value)" min="0" step="0.01" />
                    </div>
                </div>
            </div>

            <!-- Course Discount -->
            <div class="col-md-6">
                <div class="input-block">
                    <label class="form-label">الخصم</label>
                    <div class="input-group">
                        <span class="input-group-text">%</span>
                        <input type="number" class="form-control" :value="formData.discount"
                            @input="updateField('discount', $event.target.value)" min="0" max="100" />
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursePricing',
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateField(field, value) {
            console.log('Updating field:', field, 'with value:', value);
            const newData = {
                ...this.formData,
                [field]: value || 'default'  // Ensure we never send null
            };
            this.$emit('update:form-data', newData);
        }
    }
};
</script>

<style scoped>
.input-block {
    margin-bottom: 1.5rem;
}
</style>