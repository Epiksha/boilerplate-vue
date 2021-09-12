import { createApp } from 'vue';

import directives from './js/directives';
import plugins from './js/plugins';
import router from './js/router';
import store from './js/store';
import App from './App/App.vue';

// Import SASS
import './scss/entry.scss';

// Imports SVGs so webpack loaders generate spritesheet
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Setup Vue instance
const app = createApp(App)
    .use(router)
    .use(store);

// Plugins & Directives
plugins.forEach(plugin => app.use(plugin));
directives.forEach(directive => app.directive(directive.name, directive.config));

// Register global components
const globals = ['GAccordion', 'GCard', 'GCheckbox', 'GIcon', 'GImage', 'GInput', 'GPlus', 'GRadios', 'GRange', 'GSpinner', 'GToggle', 'GVideo', 'GVolume'];

globals.forEach(global => {
    app.component(global, require(`./components/Global/${global}/${global}.vue`).default);
});

// Mount the app to DOM
app.mount('#app');

// Remove nojs class since JS is active
document.querySelector('.nojs').classList.remove('nojs');
