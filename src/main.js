import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Services from './services';
import store from './store'
import './plugins/element.js';

Vue.config.productionTip = false

Vue.use(Services);

Vue.authenticationService.init();

//Vue.http.options.root = "https://sheltered-bastion-22193.herokuapp.com"
Vue.http.options.root = "http://localhost:8080/api"
Vue.http.interceptors.push((request) => {
  var token = Vue.authenticationService.getAuthenticationToken()
  request.headers.set('Authorization', `Bearer ${token}`);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
