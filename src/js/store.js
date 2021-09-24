import { createStore } from 'vuex';
import VuexPersistedState from 'vuex-persistedstate';
import user from './store/user';

export default createStore({
    plugins: [
        VuexPersistedState({ key: document.title }),
    ],

    modules: {
        user,
    },
});
