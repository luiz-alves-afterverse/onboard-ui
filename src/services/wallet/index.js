import VueResource from 'vue-resource'

const WALLET_PATH = 'wallet'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const walletService = {
      find() {
        return Vue.http.get(WALLET_PATH)
        .then(response => response.body)
        .catch(error => Promise.reject(error.body))
      }
    };

    Vue.walletService = walletService;
    Vue.prototype.$walletService = walletService;
  }
}