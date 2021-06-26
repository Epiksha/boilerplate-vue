import PIndex from '../routes/PIndex/PIndex.vue';
import PStyle from '../routes/PStyle/PStyle.vue';

export default [
    {
        path: '/',
        component: PIndex,
        meta: {
            theme: 'dark',
        },
    },
    {
        path: '/styleguide',
        component: PStyle,
        meta: {
            theme: 'dark',
        },
    },
];
