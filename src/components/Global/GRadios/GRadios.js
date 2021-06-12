import { arrayValidator, objectValidator } from 'vue-props-validation';

export default {
    props: {
        group: String,
        radios: {
            type: Array,
            validator: arrayValidator({
                type: Object,
                validator: objectValidator({
                    id: { type: String, required: false },
                    isSelected: { type: Boolean },
                    text: { type: String, required: false },
                }),
            }),
        },
    },

    data() {
        return {
            current: this.radios[0].text,
        };
    },
};
