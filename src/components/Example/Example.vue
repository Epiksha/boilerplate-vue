<template>
    <div class="example">
        <input
            v-model="text"
            type="text"
            class="example__input"
        >
        
        <p
            class="example__text"
            v-text="text"
        />
    </div>
</template>

<script src="./Example.js" />
