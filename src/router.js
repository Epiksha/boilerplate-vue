import Vue from 'vue';
import Router from 'vue-router';

import PIndex from './routes/PIndex/PIndex.vue';
import PStyle from './routes/PStyle/PStyle.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PIndex',
            component: PIndex,
        },
        {
            path: '/styleguide',
            name: 'PStyle',
            component: PStyle,
        },
    ],
});
