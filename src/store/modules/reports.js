export default {
    state: {
        reports: []
    },
    getters: {
        reports: state => {
            return state.reports;
        }
    },
    mutations: {
        updateReports(state, payload) {
            state.reports = payload;
        }
    },
    actions: {
        updateReports({commit}, payload) {
            commit('updateReports', payload);
        }
    }
};