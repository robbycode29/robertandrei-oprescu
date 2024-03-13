import { createStore } from 'vuex'

export default createStore({
  state: {
    menu: 0,
    showInfoAlert: false, 
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getShowInfoAlert(state) {
      return state.showInfoAlert;
    },
  },
  mutations: {
    setMenu(state, payload: number) {
      state.menu = payload;
    },
    setShowInfoAlert(state, payload: boolean) {
      state.showInfoAlert = payload;
    },
  },
  actions: {
    changeMenu({ commit }, payload: number) {
      commit('setMenu', payload);
    },
    changeShowInfoAlert({ commit }, payload: boolean) {
      commit('setShowInfoAlert', payload);
    },
  },
  modules: {
  }
})
