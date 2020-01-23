import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Services from './services';
import './plugins/element.js';

Vue.config.productionTip = false

Vue.use(Services);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
