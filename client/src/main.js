import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mock from './mock-data.js'

let data = {
  cities: mock,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')