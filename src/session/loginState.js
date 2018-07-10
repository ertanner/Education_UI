import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'

export const session = new Vuex.Session({
  state: {
    isLoggedIn: !!localStorage.getItem('token')
  },
  getters: {
    getItems: state => {
      return state.isLoggedIn
    }
  },
  mutations: {
    [LOGIN] (state) {
      state.pending = true
    },
    [LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [LOGOUT] (state) {
      state.isLoggedIn = false
    },
    increment (state) {
      if (state) {
        state.isLoggedIn = false
      } else {
        state.isLoggedIn = true
      }
    }
  }
})
