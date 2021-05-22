import axios from 'axios';
import store from '../store';

export default {
    install(Vue) {
        axios.interceptors.request.use(request => {
            if (store.state.user.token) {
                request.headers.authorization = `Bearer ${store.state.user.token}`;
            }
        
            return request;
        });
        
        Vue.axios = axios;
        Vue.prototype.axios = axios;
    },
};
