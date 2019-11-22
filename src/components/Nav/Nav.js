export default {
    name: 'Nav',

    data() {
        return {
            links: [
                {
                    url: '/',
                    text: 'Home',
                    exact: true,
                },
                {
                    url: '/contact',
                    text: 'Contact',
                },
            ],
        };
    },
};
