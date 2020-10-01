<template>
    <div
        id="app"
        class="relative"
    >
        <a
            href="#app"
            class="skipLink"
        >
            Skip to Content
        </a>

        <Header />

        <Sidebar />
        
        <router-view />

        <Footer />
    </div>
</template>

<script src="./App.js" />
