export default {
    name: 'Sidebar',

    data() {
        return {
            isOpen: false,
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

    mounted() {
        this.$bus.$on('toggleSidebar', () => {
            this.isOpen = !this.isOpen;
        });
    },
};
