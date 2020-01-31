import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_authenticated: false
  },

  mutations: {
    SET_AUTHENTICATED(state, authenticated){
      state.is_authenticated = authenticated
    }
  },

  actions: {
    async signIn({commit}, { username, password }){
      try {
        let authResponse = await Vue.authenticationService.signIn(username, password)
        
        let token = authResponse.token
        window.localStorage.setItem('token', token)
        commit('SET_AUTHENTICATED', true)
      } catch (e) {
        console.log("entrou?")
        console.log(e)
        return 1
      }
    },

    async signOut({commit}){
      window.localStorage.removeItem('token')
      commit('SET_AUTHENTICATED', false)
    }
  }
})