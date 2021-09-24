import axios from 'axios';
import store from '../store';

export default {
    install(app) {
        axios.interceptors.request.use(request => {
            if (store.state.user.token) {
                request.headers.authorization = `Bearer ${store.state.user.token}`;
            }
        
            return request;
        });
        
        app.config.globalProperties.axios = axios;
    },
};
