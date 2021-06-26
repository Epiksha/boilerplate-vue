export default {
    props: {
        label: String,
        value: {
            type: Boolean,
            required: false,
        },
    },

    watch: {
        value() {
            this.$forceUpdate();
        },
    },
};
