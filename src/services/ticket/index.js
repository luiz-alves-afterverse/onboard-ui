import VueResource from 'vue-resource'

const TICKET_PATH = 'ticket'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const ticketService = {
      create(lotteryId, quantity) {
        
        return Vue.http.post(TICKET_PATH, { lotteryId: lotteryId, quantity: quantity })
        .then((response) => {
          return response
        })
      }
    };

    Vue.ticketService = ticketService;
    Vue.prototype.$ticketService = ticketService;
  }
}