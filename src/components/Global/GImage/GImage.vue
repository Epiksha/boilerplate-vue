<template>
    <img
        v-if="image"
        :src="image"
        :alt="alt ? alt : ''"
        :role="alt ? 'img' : 'presentation'"
        class="image"
    >
</template>

<script src="./GImage" />