import Vue from 'vue';
import Router from 'vue-router';

import PIndex from './routes/PIndex/PIndex.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PIndex',
            component: PIndex,
        },
    ],
});
