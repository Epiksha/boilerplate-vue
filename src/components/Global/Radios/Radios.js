export default {
    props: {
        group: String,
        radios: Array,
    },

    data() {
        return {
            current: this.radios[0].text,
        };
    },
};
