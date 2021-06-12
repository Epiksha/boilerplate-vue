<template>
    <input
        ref="range"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :style="`background-size: ${trackSize}% 100%`"
        :value="value"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="value"
        @input="({ target }) => $emit('input', target.value)"
    >
</template>

<script src="./GRange" />
