export default {
    data: () => ({
        bottomNavLinks: [
            {
                url: '/team',
                text: 'Team',
            },
            {
                url: '/about',
                text: 'About us',
            },
            {
                url: '/styleguide',
                text: 'Styleguide',
            },
        ],
        isDropdownActive: false,
    }),

    methods: {
        closeDropdown() {
            this.isDropdownActive = false;
        },

        handleDropdown() {
            this.isDropdownActive = !this.isDropdownActive;
        },
    },
};
