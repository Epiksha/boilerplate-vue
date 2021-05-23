<template>
    <div id="app">
        <Header v-if="!isHidingNavigation" />

        <main>
            <router-view />
        </main>

        <Footer v-if="!isHidingNavigation" />
    </div>
</template>

<script src="./App.js" />
