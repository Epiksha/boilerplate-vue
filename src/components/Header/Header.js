import Nav from '../Nav/Nav.vue';

import MenuIcon from '../../assets/icons/menu.svg';

export default {
    name: 'Header',

    props: [
        'navOpen',
    ],

    components: {
        Nav,
        MenuIcon,
    },
};
