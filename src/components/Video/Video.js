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
        updateTime(e) {
            this.currentTime = e.target.currentTime;
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
