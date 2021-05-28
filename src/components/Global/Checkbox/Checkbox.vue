<template>
    <label class="checkbox">
        <input
            type="checkbox"
            :checked="isSelected"
            class="input input--checkbox"
        >

        <Icon
            class="icon--checkbox"
            name="icon-tick"
        />

        <span
            class="checkbox__text"
            v-text="label"
        />
    </label>
</template>

<script src="./Checkbox" />
