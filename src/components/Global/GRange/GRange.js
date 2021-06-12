export default {
    props: {
        max: {
            required: true,
            type: Number,
        },
        min: {
            required: true,
            type: Number,
        },
        step: {
            required: true,
            type: Number,
        },
        value: {
            required: true,
            type: [Number, String],
        },
    },

    data: () => ({
        isInteracting: false,
        interactionTimeout: null,
    }),

    computed: {
        trackSize() {
            return ((+this.value - this.min) * 100) / (this.max - this.min);
        },
    },
};
