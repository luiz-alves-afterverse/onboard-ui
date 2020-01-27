import VueResource from 'vue-resource'

const CREDIT_PATH = 'credit'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const creditService = {
      find() {
        return Vue.http.get(CREDIT_PATH)
        .then(response => response.body)
        .catch(error => Promise.reject(error.body))
      }
    };

    Vue.creditService = creditService;
    Vue.prototype.$creditService = creditService;
  }
}