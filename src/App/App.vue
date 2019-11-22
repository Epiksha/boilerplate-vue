<template>
    <div id="app-layout">
        <Header
            :nav-open="navOpen"
            @navToggle="navOpen = !navOpen"
        />
        <Sidebar :nav-open="navOpen" />

        <router-view />
        
        <Footer />
    </div>
</template>

<script src="./App.js" />
