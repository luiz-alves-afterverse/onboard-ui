import VueResource from 'vue-resource'

const LOTTERY_PATH = 'lottery'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const lotteryService = {
      findAll() {
        return Vue.http.get(LOTTERY_PATH)
        .then(response => response.body)
        .catch(error => Promise.reject(error.body))
      }
    };

    Vue.lotteryService = lotteryService;
    Vue.prototype.$lotteryService = lotteryService;
  }
}