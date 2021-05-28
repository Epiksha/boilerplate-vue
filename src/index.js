import Vue from 'vue';

import directives from './js/directives';
import plugins from './js/plugins';
import router from './js/router';
import store from './js/store';
import App from './App/App.vue';

// Global Components
import Card from './components/Global/Card/Card.vue';
import Checkbox from './components/Global/Checkbox/Checkbox.vue';
import Icon from './components/Global/Icon/Icon.vue';
import Input from './components/Global/Input/Input.vue';
import Radios from './components/Global/Radios/Radios.vue';

// Import SASS
import './scss/entry.scss';

// Import SVGs
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Global Component Registration
Vue.component('Card', Card);
Vue.component('Checkbox', Checkbox);
Vue.component('Icon', Icon);
Vue.component('Input', Input);
Vue.component('Radios', Radios);

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
