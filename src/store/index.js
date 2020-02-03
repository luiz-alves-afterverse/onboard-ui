import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    is_authenticated: false,
    credit: 0
  },

  mutations: {
    SET_AUTHENTICATED(state, authenticated){
      state.is_authenticated = authenticated
    },
    
    SET_CREDIT(state, amount) {
      state.credit = amount
    }
  },

  actions: {
    async init({commit}) {
      console.log("INITING")
      let localStorageToken = window.localStorage.getItem('token')

      if (localStorageToken != null) {
        commit('SET_AUTHENTICATED', true)
        await this.dispatch('fetchCredit')
      }
    },

    async fetchCredit({commit}) {
      try {
        let walletResponse = await Vue.walletService.getWallet()
        let creditAmount = walletResponse.credit

        commit('SET_CREDIT', creditAmount)
      }
      catch {
        throw "Couldnt fetch credit from the server."
      }
    },

    async signIn({commit}, { username, password }) {
      try {
        console.log(username)
        let authResponse = await Vue.authenticationService.signIn(username, password)
        let token = authResponse.token

        window.localStorage.setItem('token', token)
        commit('SET_AUTHENTICATED', true)
        Vue.message({message: "Welcome back :)", type: 'success'})

        await this.dispatch('fetchCredit')
      } 
      catch(error) {
        Vue.message.error(error)
        throw error
      }
    },

    async signOut({commit}) {
      window.localStorage.removeItem('token')
      commit('SET_AUTHENTICATED', false)
    }
  }
})