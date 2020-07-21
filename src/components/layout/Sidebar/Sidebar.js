export default {
    name: 'Sidebar',

    data() {
        return {
            links: [
                {
                    url: '/',
                    text: 'Home',
                },
                {
                    url: 'styleguide',
                    text: 'Styleguide',
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
