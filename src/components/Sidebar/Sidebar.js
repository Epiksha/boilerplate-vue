import Nav from '../Nav/Nav.vue';

export default {
    name: 'Sidebar',

    props: [
        'navOpen',
    ],

    components: {
        Nav,
    },
};
