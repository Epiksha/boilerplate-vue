import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';
import Sidebar from '../components/Sidebar/Sidebar.vue';

export default {
    name: 'App',

    components: {
        Header,
        Footer,
        Sidebar,
    },

    data() {
        return {
            navOpen: false,
        };
    },
};
