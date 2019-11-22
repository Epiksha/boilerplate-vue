import Vue from 'vue';
import App from './App/App.vue';
import router from './router';

import './scss/general.scss';

new Vue({
    render: (createEl) => createEl(App),
    router,
}).$mount('#root');
