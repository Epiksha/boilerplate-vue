import Vue from 'vue';

import directives from './js/directives';
import plugins from './js/plugins';
import router from './js/router';
import store from './js/store';
import App from './App/App.vue';
import Card from './components/Global/Card/Card.vue';
import Icon from './components/Global/Icon/Icon.vue';

// Import CSS
import './scss/entry.scss';

// Import SVGs
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Global Component Registration
Vue.component('Card', Card);
Vue.component('Icon', Icon);

// Plugins & Directives
plugins.forEach(plugin => Vue.use(plugin));
directives.forEach(directive => Vue.directive(directive.name, directive.config));

// Vue Instance Initialisation
new Vue({
    render: (createEl) => createEl(App),
    router,
    store,
}).$mount('#root');

// Remove nojs class if JS is active
document.querySelector('.nojs').classList.remove('nojs');
