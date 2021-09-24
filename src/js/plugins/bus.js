import { createApp } from 'vue';

export default {
    install(app) {
        app.config.globalProperties.$bus = createApp();
    },
};
