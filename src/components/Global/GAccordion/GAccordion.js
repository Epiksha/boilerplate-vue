export default {
    props: {
        title: String,
    },

    data: () => ({
        isVisible: false,
        isActive: false,
        foundJS: false,
        heights: {
            closed: 0,
            open: 0,
        },
        enableTransition: false,
        timeout: null,
    }),

    computed: {
        maxHeight() {
            if (this.enableTransition) {
                return `${this.isActive ? this.heights.open : this.heights.closed}px`;
            }

            return '9999rem';
        },
    },

    watch: {
        maxHeight() {
            this.timeout = setTimeout(() => {
                this.isVisible = true;
            }, 600);
        },
    },

    mounted() {
        const { accordion, header } = this.$refs;
        
        this.heights.open = accordion.getBoundingClientRect().height;
        this.heights.closed = header.getBoundingClientRect().height;

        this.enableTransition = true;
    },

    beforeDestroy() {
        clearTimeout(this.timeout);
    },
};
