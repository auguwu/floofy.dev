import App from './App.vue';
import Vue from 'vue';

import './assets/css/styles.scss';

Vue.config.productionTip = false;
const vm = new Vue({
  render(h) {
    return h(App);
  }
});

vm.$mount('#app');
