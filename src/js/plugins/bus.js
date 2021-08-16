import { createApp } from 'vue';

export default {
    install(app) {
        const bus = createApp();

        app.bus = bus;
        app.prototype.bus = bus;
    },
};
