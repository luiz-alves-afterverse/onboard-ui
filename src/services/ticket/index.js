import VueResource from 'vue-resource'

const TICKET_PATH = 'ticket'

export default {
  install(Vue) {
    Vue.use(VueResource);

    const ticketService = {
      create(lotteryId, quantity) {
        
        return Vue.http.post(TICKET_PATH, { lotteryId: lotteryId, quantity: quantity })
          .then(
            (success) => {
              return success.body
            },
            (fail) => {
              switch(fail.status) {
                case 500:
                  throw "Not enough credits :("
                case 401:
                  Vue.message.error("Sorry, you are not logged in")
                  Vue.router.push('/login')
                  break
                default:
                  throw ":o Something unexpected happened"
              }
            })
      }
    };

    Vue.ticketService = ticketService;
    Vue.prototype.$ticketService = ticketService;
  }
}