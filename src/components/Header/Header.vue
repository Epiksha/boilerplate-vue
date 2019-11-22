<template>
    <header class="header">
        <button
            type="button"
            class="header__menu"
            :class="{'active': navOpen}"
            @click="$emit('navToggle')"
        >
            <MenuIcon />
        </button>

        <router-link
            to="/"
            class="header__title"
        >
            <h1>Header</h1>
        </router-link>
        
        <Nav />
    </header>
</template>

<script src="./Header.js" />
