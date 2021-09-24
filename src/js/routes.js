import PAbout from '../routes/PAbout/PAbout.vue';
import PContact from '../routes/PContact/PContact.vue';
import PIndex from '../routes/PIndex/PIndex.vue';
import PStyle from '../routes/PStyle/PStyle.vue';

export default [
    {
        path: '/',
        component: PIndex,
    },
    {
        path: '/about',
        component: PAbout,
    },
    {
        path: '/contact',
        component: PContact,
    },
    {
        path: '/styleguide',
        component: PStyle,
    },
];
