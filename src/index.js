import Vue from 'vue';
import App from './vue/App/App.vue';
import router from './router.js';

import './scss/general.scss';

new Vue({
    render: createEl => createEl(App),
    router
}).$mount('#root');