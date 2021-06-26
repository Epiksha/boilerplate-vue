<template>
    <div id="app">
        <main>
            <router-view
                class="theme"
                :class="$route.meta.theme ? `theme--${$route.meta.theme}` : ''"
            />
        </main>
    </div>
</template>

<script src="./App.js" />
