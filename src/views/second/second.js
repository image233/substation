// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import second from '@/views/second/second.vue'
import router from '@/router1'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#second',
  router,
  store,
  components: { second },
  template: '<second/>'
})
