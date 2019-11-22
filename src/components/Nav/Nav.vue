<template>
    <nav class="nav">
        <router-link
            v-for="link in links"
            :key="link.text"
            :to="link.url"
            :exact="link.exact"
            class="nav__link"
        >
            {{ link.text }}
        </router-link>
    </nav>
</template>

<script src="./Nav.js" />
