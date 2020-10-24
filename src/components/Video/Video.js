import Icon from '../Icon/Icon.vue';

export default {
    name: 'Video',

    props: [
        'sources',
        'controls',
        'autoplay',
    ],

    data() {
        return {
            currentTime: 0,
            progress: 0,
            formattedTime: '00:00',
            paused: true,
            volume: 1,
            isMouseDown: false,
        };
    },

    mounted() {
        if (this.autoplay) {
            this.paused = false;
        } else {
            this.paused = true;
        }
    },

    watch: {
        currentTime(currentTime) {
            const { duration } = this.$refs.video;

            const pad = (val) => val < 10 ? `0${val}` : val;
            
            const currentMinutes = pad(Math.floor(currentTime / 60));
            const currentSeconds = pad(Math.floor(currentTime - currentMinutes * 60));

            this.progress = (currentTime.toFixed(2) / duration.toFixed(2)) * 100;
            this.formattedTime = `${currentMinutes}:${currentSeconds}`;
        },
    },

    methods: {
        updateTime(event) {
            this.currentTime = event.target.currentTime;
        },

        updateProgress(event) {
            const { duration } = this.$refs.video;
            const { left, width } = this.$refs.progress.getBoundingClientRect();
            const x = event.clientX - left;
            const context = this;

            const newProgress = (x.toFixed(2) / width.toFixed(2)) * duration.toFixed(2);

            context.currentTime = newProgress;
            context.$refs.video.currentTime = newProgress;
        },

        debouncer(callback, delay) {
            const debounced = this.debounce(callback, delay);

            debounced();
        },

        updateVolume(event) {
            const volumeBounds = this.$refs.volume.getBoundingClientRect();
            const y = event.clientY - volumeBounds.top;

            const volumeLevel = 1 - y / volumeBounds.height;

            this.volume = volumeLevel;
            this.$refs.video.volume = volumeLevel;
        },

        togglePlay() {
            const { video } = this.$refs;

            if (video.paused) {
                video.play();
                this.paused = false;
            } else {
                video.pause();
                this.paused = true;
            }
        },

        fullscreen() {

        },
    },

    components: {
        Icon,
    },
};
