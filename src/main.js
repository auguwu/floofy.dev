import { createApp } from 'vue';
import App from './App.vue';

const vm = createApp(App);
vm.mount('#app');

// Hot module replacement, view here for more information
// https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => vm.unmount());
}
