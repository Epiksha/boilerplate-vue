<template>
    <label class="checkbox">
        <input
            type="checkbox"
            :checked="isSelected"
            class="input input--checkbox"
        >

        <GIcon
            class="icon--checkbox"
            name="icon-tick"
        />

        <span
            v-if="label"
            class="checkbox__text"
            v-text="label"
        />
    </label>
</template>

<script src="./GCheckbox" />
