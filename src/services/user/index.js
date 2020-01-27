import VueResource from 'vue-resource'

const USER_PATH = 'user'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const userService = {
      create(username, email, password) {
        
        return Vue.http.post(USER_PATH, { username: username, email: email, password: password })
        .then((response) => {
          return response
        })
      }
    };

    Vue.userService = userService;
    Vue.prototype.$userService = userService;
  }
}