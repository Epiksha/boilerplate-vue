export default {
    namespaced: true,

    state: {
        email: '',
        name: '',
        token: '',
    },

    mutations: {
        async set(state, { property, value }) {
            state[property] = value;
        },
        
        async remove(state) {
            state.email = '';
            state.name = '';
            state.token = '';
        },
    },

    actions: {
        set({ commit }, { token, name, email }) {
            if (token !== null && token !== undefined) {
                commit('set', { property: 'token', value: token });
            }
            
            if (name !== null && name !== undefined) {
                commit('set', { property: 'name', value: name });
            }
            
            if (email !== null && email !== undefined) {
                commit('set', { property: 'email', value: email });
            }
        },

        remove({ commit }) {
            commit('remove');
        },
    },
};
