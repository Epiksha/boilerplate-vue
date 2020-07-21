import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isSidebarOpen: false,
    },

    mutations: {
        toggleSidebar(state) {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});
