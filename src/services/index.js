import AuthenticationService from './auth'
import LotteryService from './lottery'
import UserService from './user'
import WalletService from './wallet'
import TicketService from './ticket'

export default {
  install(Vue) {
    Vue.use(LotteryService)
    Vue.use(AuthenticationService)
    Vue.use(UserService)
    Vue.use(WalletService)
    Vue.use(TicketService)
  }
}