export default {
    data: () => ({
        isMenuActive: false,
    }),

    methods: {
        closeMenu(event) {
            if (
                this.isMenuActive &&
                (event.target !== this.$refs.hamburger && !this.$refs.hamburger.contains(event.target))
            ) {
                this.isMenuActive = false;
            }
        },

        toggleMenu() {
            this.isMenuActive = !this.isMenuActive;
        },
    },
};
