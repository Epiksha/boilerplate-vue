export default {
    computed: {
        isLoggedIn() {
            return this.$store.state.user.token;
        },
    },
};
