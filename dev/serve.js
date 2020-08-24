import Vue from 'vue';
import Dev from './serve.vue';
import Spinner from "@/entry";

Vue.use(Spinner)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
