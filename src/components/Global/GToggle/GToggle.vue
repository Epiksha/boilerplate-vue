<template>
    <label class="toggle">
        <span
            v-if="label"
            class="toggle__text"
            v-text="label"
        />

        <input
            type="checkbox"
            :checked="value"
            class="input input--toggle"
            :aria-checked="value"
            role="switch"
            @click="$emit('input', !value)"
        >

        <div class="toggle__container">
            <div class="toggle__handle"></div>
        </div>
    </label>
</template>

<script src="./GToggle" />
