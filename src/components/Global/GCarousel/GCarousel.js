/* eslint-disable */
import { Hooper as Carousel, Slide } from 'hooper';
import { arrayValidator, objectValidator } from 'vue-props-validation';

export default {
    props: {
        infiniteScroll: {
            type: Boolean,
            default: true,
        },
        slides: {
            type: Array,
            validator: arrayValidator({
                type: Object,
                validator: objectValidator({
                    title: String,
                    text: String,
                    backgroundImage: {
                        type: String,
                        required: false,
                    },
                    backgroundColor: {
                        type: String,
                        required: false,
                    },
                }),
            }),
        },
    },

    data: () => ({
        currentIndex: 0,
        timeout: null,
    }),

    methods: {
        changeSlide(goForward) {
            if (goForward) {
                this.$refs.carousel.slideNext();
            } else {
                this.$refs.carousel.slidePrev();
            }

            this.updateIndex();
        },

        updateIndex() {
            let delay = 0;

            if (!this.currentIndex || this.currentIndex === this.slides.length - 1) {
                delay = 500;
            }

            this.timeout = setTimeout(() => {
                this.currentIndex = this.$refs.carousel.$data.currentSlide;
            }, delay);
        }
    },

    computed: {
        backgroundImages() {
            if (this.slides && this.slides.length) {
                return this.slides.map(slide => {
                    if (slide.backgroundImage) {
                        return `url(${require('../../../assets/images/' + slide.backgroundImage)})`;
                    }
                });
            }
        },
    },

    mounted() {
        this.$refs.carousel.$el.addEventListener('mouseup', this.updateIndex);
    },

    beforeDestroy() {
        clearTimeout(this.timeout);
    },

    components: {
        Carousel,
        Slide,
    },
};
