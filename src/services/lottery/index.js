import VueResource from 'vue-resource'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const lotteryService = {
      findAll() {
        return Vue.http.get("https://sheltered-bastion-22193.herokuapp.com/lottery")
        .then(response => response.body)
        .catch(error => Promise.reject(error.body))
      }
    };

    Vue.lotteryService = lotteryService;
    Vue.prototype.$lotteryService = lotteryService;
  }
}