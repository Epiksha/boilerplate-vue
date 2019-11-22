<template>
    <div id="app-layout">
        <Header @navToggle="navOpen = !navOpen" />
        <Sidebar :nav-open="navOpen" />

        <router-view />
        
        <Footer />
    </div>
</template>

<script src="./App.js" />
