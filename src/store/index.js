import Vue from 'vue'
import Vuex from 'vuex'

import reports from '@/store/modules/reports'
import user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    reports,
    user,
  }
})
