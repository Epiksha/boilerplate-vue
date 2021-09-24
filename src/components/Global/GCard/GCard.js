import { objectValidator } from 'vue-props-validation';

export default {
    props: {
        link: {
            type: Object,
            validator: objectValidator({
                text: {
                    type: String,
                    required: false,
                },
                url: String,
            }),
        },
        image: {
            type: Object,
            validator: objectValidator({
                alt: {
                    type: String,
                    required: false,
                },
                name: {
                    type: String,
                    required: true,
                },
                external: {
                    type: Boolean,
                    default: false,
                },
            }),
        },
        type: {
            type: String,
            default: 'basic',
        },
        title: String,
    },
};
