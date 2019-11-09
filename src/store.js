import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    user: null,
    isUserLoggedIn: false,
    token: null
  },

  mutations: {
    setUser(state, user) {
      state.user = user
      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },

    editUserName(state, name) {
      if (state.isUserLoggedIn) {
        state.user.name = name
      }
    },

    setToken(state, token) {
      state.token = token
    },

    removeUser(state) {
      state.user = null
      state.token = null
      state.isUserLoggedIn = false
    }
  },
  
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user)
    },

    editUserName({ commit }, name) {
      commit('editUserName', name)
    },

    setToken({ commit }, token) {
      commit('setToken', token)
    },

    removeUser({ commit }) {
      commit('removeUser')
    }
  }
})
