import Vue from 'vue';
import App from './App/App.vue';
import store from './js/store';
import router from './js/router';

import Card from './components/Card/Card.vue';
import Icon from './components/Icon/Icon.vue';

import './scss/general.scss';

// Import SVGs
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Global Component Registration
Vue.component('Card', Card);
Vue.component('Icon', Icon);

// Vue Instance Initialisation
new Vue({
    render: (createEl) => createEl(App),
    router,
    store,
}).$mount('#root');

// Remove nojs class if JS is active
document.querySelector('.nojs').classList.remove('nojs');
