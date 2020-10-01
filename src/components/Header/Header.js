export default {
    name: 'Header',

    data() {
        return {
            links: [
                {
                    url: '/',
                    text: 'Home',
                },
                {
                    url: '/styleguide',
                    text: 'Style Guide',
                },
            ],
        };
    },

    methods: {
        toggleSidebar() {
            this.$store.commit('toggleSidebar');
        },
    },

    computed: {
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
};
