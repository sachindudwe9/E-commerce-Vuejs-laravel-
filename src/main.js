import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store/store'
//import VueSweetalert2 from 'vue-sweetalert2';
// Vue.use(VueSweetalert2);
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
