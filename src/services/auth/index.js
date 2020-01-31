import VueResource from 'vue-resource'

const AUTH_PATH = 'auth'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const authenticationService = {
      init() {
        this.token = window.localStorage.getItem('token')
      },
      
      async signIn(username, password) {
        return Vue.http.post(AUTH_PATH, { username: username, password: password })
          .then(
            (success) => {
              return success.body
            },
            (fail) => {
              console.log("errou")
              throw fail
            }
          )
      },

      signOut() {
        window.localStorage.removeItem('token')
      },

      getAuthenticationToken() {
        return this.token;
      }
    };

    Vue.authenticationService = authenticationService;
    Vue.prototype.$authenticationService = authenticationService;
  }
}