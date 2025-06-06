<!-- src/components/CoursePricing.vue -->
<template>
    <div>
        <div class="title">
            <h5>التسعير</h5>
        </div>
        <div class="row">
            <div class="col-md-12 mb-3">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="isFree" :checked="formData.is_free"
                        @change="updateField('is_free', $event.target.checked)" />
                    <label class="form-check-label" for="isFree">الدورة مجانية</label>
                </div>
            </div>
            <div class="col-md-6" v-if="!formData.is_free">
                <div class="input-block">
                    <label class="form-label">سعر الدورة <span class="text-danger ms-1">*</span></label>
                    <input type="number" class="form-control" :value="formData.price"
                        @input="updateField('price', $event.target.value)" min="0" step="0.01" />
                </div>
            </div>
            <div class="col-md-6" v-if="!formData.is_free">
                <div class="input-block">
                    <label class="form-label">سعر الخصم </label>
                    <input type="number" class="form-control" :value="formData.discount_price"
                        @input="updateField('discount_price', $event.target.value)" min="0" step="0.01" />
                </div>
            </div>
            <div class="col-md-6" v-if="!formData.is_free && formData.discount_price">
                <div class="input-block">
                    <label class="form-label">Discount Start Date</label>
                    <input type="date" class="form-control" :value="formData.discount_start_date"
                        @input="updateField('discount_start_date', $event.target.value)" />
                </div>
            </div>
            <div class="col-md-6" v-if="!formData.is_free && formData.discount_price">
                <div class="input-block">
                    <label class="form-label">Discount End Date</label>
                    <input type="date" class="form-control" :value="formData.discount_end_date"
                        @input="updateField('discount_end_date', $event.target.value)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        formData: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateField(field, value) {
            const newData = {
                ...this.formData,
                [field]: value
            };

            // If setting is_free to true, clear price and discount fields
            if (field === 'is_free' && value === true) {
                newData.price = '';
                newData.discount_price = '';
                newData.discount_start_date = '';
                newData.discount_end_date = '';
            }

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