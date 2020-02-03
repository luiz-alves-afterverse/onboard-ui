import VueResource from 'vue-resource'

const WALLET_PATH = 'wallet'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const walletService = {
      
      getWallet() {
        return Vue.http.get(WALLET_PATH)
          .then(
            (success) => {
              console.log("Got wallet")
              return success.body
            },
            (fail) => {
              console.log("Failed when getting wallet")
              throw fail
            }
          )
      }
    };

    Vue.walletService = walletService;
    Vue.prototype.$walletService = walletService;
  }
}