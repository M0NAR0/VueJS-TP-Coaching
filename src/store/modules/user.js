export default {
    state: {
        user: []
    },
    mutations: {
        updateUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        updateUser({commit}, payload) {
            commit('updateUser', payload);
        }
    }
};