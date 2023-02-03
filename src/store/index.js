import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flagCartVisiblity : true
  },
  getters: {
    cartVisiblity(state){
      return state.flagCartVisiblity
    }
  },
  mutations: {
    CART_VISIBILITY(state,payload){
      state.flagCartVisiblity = payload
    },
  },
  actions: {
    cart_visibility({commit},payload) {
      commit('CART_VISIBILITY',payload)
    },
  },
  modules: {
  }
})
