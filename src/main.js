require('bootstrap/dist/css/bootstrap.min.css');
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
