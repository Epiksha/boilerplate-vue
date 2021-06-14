export default {
    props: {
        label: String,
        value: {
            type: Boolean,
            required: true,
        },
    },

    watch: {
        value() {
            this.$forceUpdate();
        },
    },
};
