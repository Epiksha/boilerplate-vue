import Vue from 'vue';

import directives from './js/directives';
import plugins from './js/plugins';
import router from './js/router';
import store from './js/store';
import App from './App/App.vue';

// Global Components
import GAccordion from './components/Global/GAccordion/GAccordion.vue';
import GCard from './components/Global/GCard/GCard.vue';
import GCarousel from './components/Global/GCarousel/GCarousel.vue';
import GCheckbox from './components/Global/GCheckbox/GCheckbox.vue';
import GIcon from './components/Global/GIcon/GIcon.vue';
import GInput from './components/Global/GInput/GInput.vue';
import GPlus from './components/Global/GPlus/GPlus.vue';
import GRadios from './components/Global/GRadios/GRadios.vue';
import GRange from './components/Global/GRange/GRange.vue';
import GSpinner from './components/Global/GSpinner/GSpinner.vue';
import GToggle from './components/Global/GToggle/GToggle.vue';
import GVideo from './components/Global/GVideo/GVideo.vue';
import GVolume from './components/Global/GVolume/GVolume.vue';

// Import SASS
import './scss/entry.scss';

// Import SVGs
const svgs = require.context('./assets/icons/', true, /\.svg$/);
svgs.keys().forEach(svgs);

// Global Component Registration
Vue.component('GAccordion', GAccordion);
Vue.component('GCard', GCard);
Vue.component('GCarousel', GCarousel);
Vue.component('GCheckbox', GCheckbox);
Vue.component('GIcon', GIcon);
Vue.component('GInput', GInput);
Vue.component('GPlus', GPlus);
Vue.component('GRadios', GRadios);
Vue.component('GRange', GRange);
Vue.component('GSpinner', GSpinner);
Vue.component('GToggle', GToggle);
Vue.component('GVideo', GVideo);
Vue.component('GVolume', GVolume);

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
