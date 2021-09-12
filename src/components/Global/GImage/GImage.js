export default {
    props: {
        alt: {
            type: String,
            required: false,
        },
        external: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        },
    },

    computed: {
        image() {
            if (!this.external && this.name) {
                const imageFiles = require.context('../../../assets/images', false, /\.(gif|jpe?g|svg)$/);

                return imageFiles(imageFiles.keys().filter(image => image.replace('./', '') === this.name));
            } else {
                return this.name;
            }
        },
    },
};
