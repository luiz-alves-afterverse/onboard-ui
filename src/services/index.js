import AuthenticationService from './auth'
import LotteryService from './lottery'
import UserService from './user'
import CreditService from './credit'
import TicketService from './ticket'

export default {
  install(Vue) {
    Vue.use(LotteryService)
    Vue.use(AuthenticationService)
    Vue.use(UserService)
    Vue.use(CreditService)
    Vue.use(TicketService)
  }
}