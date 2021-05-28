import { objectValidator, arrayValidator } from 'vue-props-validation';

export default {
    props: {
        classes: [Array, String],
        errors: { type: Array, validator: arrayValidator(String) },
        id: [Number, String],
        label: { type: Object, validator: objectValidator({ id: String, text: String }) },
        placeholder: [Number, String],
        required: [Boolean, Number, String],
        type: { type: String, default: 'text' },
        value: [String, Number],
    },

    watch: {
        value(value) {
            this.$emit('input', value);
        },
    },

    data: () => ({
        active: false,
        focused: false,
        isShowingPassword: false,
    }),

    computed: {
        password() {
            if (this.type === 'password' && this.isShowingPassword) {
                return 'text';
            }
        },
    },

    mounted() {
        if (this.value) {
            this.active = true;
        }
    },
    
    updated() {
        if (this.value) {
            this.active = true;
        }
    },
};
