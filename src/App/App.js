import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
    name: 'App',

    computed: {
        isHidingNavigation() {
            return (this.$route.path.indexOf('/login') !== -1 && this.$route.path.indexOf('profile') === -1)
                || this.$route.path.indexOf('/register') !== -1
                || this.$route.path.indexOf('/reset') !== -1
                || this.$route.path.indexOf('/forgot') !== -1;
        },
    },

    components: {
        Header,
        Footer,
    },
};
