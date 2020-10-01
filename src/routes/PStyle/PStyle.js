import Hero from '../../components/Hero/Hero.vue';
import Header from '../../components/Header/Header.vue';
import Card from '../../components/Card/Card.vue';
import Video from '../../components/Video/Video.vue';

export default {
    name: 'PStyle',

    data() {
        return {
            subnav: false,
            video: {
                controls: false,
                sources: [
                    {
                        url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                        type: 'video/mp4',
                    },
                ],
            },
        };
    },

    components: {
        Hero,
        Header,
        Card,
        Video,
    },
};
