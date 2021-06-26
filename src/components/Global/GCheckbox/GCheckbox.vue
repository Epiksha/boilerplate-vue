<template>
    <label class="checkbox">
        <input
            type="checkbox"
            :checked="isSelected"
            class="input input--checkbox"
        >

        <div class="checkbox__icon">
            <div>
                <GIcon
                    class="icon--checkbox"
                    name="icon-tick"
                />
            </div>
        </div>

        <span
            v-if="label"
            class="checkbox__text"
            v-text="label"
        />
    </label>
</template>

<script src="./GCheckbox" />
