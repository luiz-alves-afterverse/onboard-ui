import VueResource from 'vue-resource'

const AUTH_PATH = 'auth'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const authenticationService = {

      async signIn(username, password) {
        return Vue.http.post(AUTH_PATH, { username: username, password: password })
          .then(
            (success) => {
              console.log("Authorization realized")
              return success.body
            },
            (fail) => {
              console.log(username)
              console.log(password)
              switch(fail.status) {
                case 404:
                  throw "Username/password combination is invalid. Please try again."
                default:
                  throw ":o Something unexpected happened"
              }
            }
          )
      },

      signOut() {
        window.localStorage.removeItem('token')
      },

      getAuthenticationToken() {
        return window.localStorage.getItem('token');
      }
    };

    Vue.authenticationService = authenticationService;
    Vue.prototype.$authenticationService = authenticationService;
  }
}