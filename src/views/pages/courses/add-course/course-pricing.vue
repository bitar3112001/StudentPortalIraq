<template>
    <div>
        <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md d-flex align-items-center">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked>
                <label class="form-check-label ms-2" for="flexCheckChecked1">
                    Check if this is a free course
                </label>
                </div>
        </div>
        <div class="input-block mb-2">
            <label class="form-label">Course Price ($)</label>
            <input type="text" class="form-control">
        </div>
        <div class="d-flex align-items-center mb-3">
            <div class="form-check form-check-md d-flex align-items-center">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2">
                <label class="form-check-label ms-2" for="flexCheckChecked2">
                    Check if this course has discount
                </label>
            </div>
        </div>
        <div class="input-block">
            <label class="form-label">Discount Price ($)</label>
            <input type="text" class="form-control mb-1">
            <span>This course has 0% Discount</span>
        </div>
        <div class="mb-4">
            <label class="form-label mb-1">Expiry Period</label>
            <div class="d-flex align-items-center ">
                <div class="form-check me-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Lifetime
                    </label>
                </div>
                <div class="form-check me-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Limited Time
                    </label>
                </div>
            </div>
        </div>
        <div class="input-block">
            <label class="form-label">Number of month</label>
            <input type="text" class="form-control mb-1">
            <span>After purchase, students can access the course until your selected time.</span>
        </div>
    </div>
</template>