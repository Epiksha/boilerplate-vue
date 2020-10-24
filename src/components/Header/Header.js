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
            this.$bus.$emit('toggleSidebar');
        },
    },

    computed: {
        isSidebarOpen() {
            return this.$store.state.isSidebarOpen;
        },
    },
};
