import Vue from 'vue';

import eventbus from './libs/eventbus';
import debounce from './libs/debounce';

export default [
    {
        install() {
            Vue.$bus = eventbus;
            Vue.prototype.$bus = eventbus;
        },
    },
    {
        install() {
            Vue.$debounce = debounce;
            Vue.prototype.$debounce = debounce;
        },
    },
];
