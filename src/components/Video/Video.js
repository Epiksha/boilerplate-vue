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
            const x = event.pageX - left;

            const newProgress = (x.toFixed(2) / width.toFixed(2)) * duration.toFixed(2);

            this.currentTime = newProgress;
            this.$refs.video.currentTime = newProgress;
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
