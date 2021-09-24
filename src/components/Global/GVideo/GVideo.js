import { arrayValidator, objectValidator } from 'vue-props-validation';

import HLS from 'hls.js';

export default {
    props: {
        controls: Boolean,
        sources: {
            type: Array,
            required: true,
            validator: arrayValidator({
                type: Object,
                validator: objectValidator({
                    url: String,
                    type: String,
                }),
            }),
        },
    },

    data: () => ({
        isPaused: true,
        progress: 0,
    }),

    methods: {
        adjustTime(isForward) {
            if (isForward) {
                const { currentTime, duration } = this.$refs.video;

                const newTime = currentTime + 10;

                this.$refs.video.currentTime = newTime < duration ? newTime : duration;
            } else {
                const { currentTime } = this.$refs.video;
                const newTime = currentTime - 10;

                this.$refs.video.currentTime = newTime > 0 ? newTime : 0;
            }
        },

        handleTimeUpdate(event) {
            this.progress = (event.target.currentTime / event.target.duration) * 100;
        },

        handleTrackInput(currentTime) {
            this.$refs.video.currentTime = (currentTime / 100) * this.$refs.video.duration;
        },

        skip(isEnd) {
            if (isEnd) {
                this.$refs.video.currentTime = this.$refs.video.duration;
            } else {
                this.$refs.video.currentTime = 0;
            }
        },

        triggerFullscreen() {
            this.$refs.video.requestFullscreen();
        },
    },

    watch: {
        isPaused(isTrue) {
            if (isTrue) {
                this.$refs.video.pause();
            } else {
                this.$refs.video.play();
            }
        },
    },

    mounted() {
        const hlsSource = this.sources.filter(({ url }) => url.indexOf('.m3u8') > -1)[0];

        if (HLS.isSupported() && hlsSource) {
            const hls = new HLS();

            hls.loadSource(this.sources[0].url);
            hls.attachMedia(this.$refs.video);

            hls.on(HLS.Events.MANIFEST_PARSED, () => {
                this.progress = 0;
            });
        }
    },

    computed: {
        basicSources() {
            if (this.sources && this.sources.length) {
                return this.sources.filter(({ url }) => url.indexOf('.m3u8') === -1);
            }
        },
    },
};
