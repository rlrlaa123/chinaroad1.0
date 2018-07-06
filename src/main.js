// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueCordova from 'vue-cordova';

import axios from 'axios';
import App from './App';
import router from './router';

import { store } from './store/store';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8005/api';
// axios.defaults.baseURL = 'http://198.13.50.135:8005/api';

Vue.use(VueCordova);

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  const cordovaScript = document.createElement('script');
  cordovaScript.setAttribute('type', 'text/javascript');
  cordovaScript.setAttribute('src', 'cordova.js');
  document.body.appendChild(cordovaScript);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data() {
    return {
      cordova: Vue.cordova,
    };
  },
});
