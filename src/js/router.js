import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

export default createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    /* scrollBehavior() {
        return { x: 0, y: 0 };
    }, */
});
